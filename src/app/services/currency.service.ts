import {
  computed,
  inject,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { isValidIndex } from '../Utils';
import { LocaleService } from './locale.service';
import currencyData from 'cldr-core/supplemental/currencyData.json';

//#region CurrencyDataRegion
type CurrencyDataRegion = typeof currencyData.supplemental.currencyData.region;
const CurrencyDataRegionKeys = Object.keys(
  currencyData.supplemental.currencyData.region
);
type CurrencyDataRegionCode = keyof CurrencyDataRegion;

function IsValidCurrencyDataRegionCode(
  regionString: string
): regionString is CurrencyDataRegionCode {
  return (
    typeof regionString === 'string' &&
    CurrencyDataRegionKeys.includes(regionString)
  );
}

function GetValidCurrencyDataRegionCode(
  regionString: string
): CurrencyDataRegionCode {
  if (IsValidCurrencyDataRegionCode(regionString)) {
    return regionString;
  }
  throw new Error(
    `'${regionString}' is not a valid region code for currencies`
  );
}

//#endregion

//#region CurrencyCode

const supportedCurrencies = ['EUR', 'USD', 'CAD'] as const;
export type CurrencyCode = (typeof supportedCurrencies)[number];

function GetCurrencyCodeForRegion(regionString: string): CurrencyCode {
  const regionCode = GetValidCurrencyDataRegionCode(regionString);
  // this will be "all historical and present currencies" for region
  const currenciesForRegion =
    currencyData.supplemental.currencyData.region[regionCode];
  // seems likely that first element is today's default curency
  const mostRecentCurrencyForRegion = currenciesForRegion[0];
  // likely, this element ha one and only key, that is the currency code as string
  // may break some day
  const currencyCode = Object.keys(mostRecentCurrencyForRegion)[0];
  console.log(`currency code for region ${regionCode} is ${currencyCode}`);
  return GetValidCurrencyCode(currencyCode);
}

function isValidCurrencyCode(n: unknown): n is CurrencyCode {
  return (
    typeof n === 'string' && supportedCurrencies.includes(n as CurrencyCode)
  );
}

function GetValidCurrencyCode(currencyCodeString: string): CurrencyCode {
  if (isValidCurrencyCode(currencyCodeString)) return currencyCodeString;
  throw new Error(`${currencyCodeString} is not a suported currency code`);
}

// // get-currency-symbol.ts
// export function getCurrencySymbol(
//   code: string,
//   locale = typeof navigator !== 'undefined' ? navigator.language : 'en-US'
// ): string {
//   if (!code) return '';
//   try {
//     const parts = new Intl.NumberFormat(locale, {
//       style: 'currency',
//       currency: code,
//     }).formatToParts(1);
//     return parts.find((p) => p.type === 'currency')?.value ?? code;
//   } catch {
//     return code; // fallback to code when Intl fails or code invalid
//   }
// }

//#endregion

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private readonly localeService = inject(LocaleService);
  readonly CurrentCurrencyCode: WritableSignal<CurrencyCode>;
  readonly leftovers: Signal<CurrencyCode[]>;

  constructor() {
    this.CurrentCurrencyCode = signal(this.GetCurrentCurrencyCode());
    this.leftovers = computed(() => {
      return supportedCurrencies.filter(
        (item) => item !== this.CurrentCurrencyCode()
      );
    });
  }

  SetCurrency(arg: number | CurrencyCode) {
    if (isValidIndex(arg, supportedCurrencies)) {
      const value = supportedCurrencies[arg];
      this.CurrentCurrencyCode.set(value);
    } else if (isValidCurrencyCode(arg)) {
      this.CurrentCurrencyCode.set(arg);
    } else throw new Error(`${arg} is not a valid value for currency`);
  }

  private GetCurrentCurrencyCode(): CurrencyCode {
    console.log(`current locale = ${this.localeService.locale}`);
    const CurrentLocaleRegionString =
      this.localeService.GetCurrentLocaleRegionString();
    console.log(`current locale region = ${CurrentLocaleRegionString}`);
    return GetCurrencyCodeForRegion(CurrentLocaleRegionString);
  }
}
