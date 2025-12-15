import { Injectable } from '@angular/core';

const CurrentLocalStorageKey = 'CLSK';

// interface SavedLocale {
//   locale?: string;
//   currency?: string;
// }

// TODO : use later ?
// type TerritoryInfo = typeof territoryInfo.supplemental.territoryInfo;
// const TerritoryInfoKeys = Object.keys(territoryInfo.supplemental.territoryInfo);
// type TerritoryInfoKeys = keyof TerritoryInfo;

// function IsValidRegionCode(
//   regionString: string
// ): regionString is TerritoryInfoKeys {
//   return (
//     typeof regionString === 'string' && TerritoryInfoKeys.includes(regionString)
//   );
// }

@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  locale = localStorage.getItem(CurrentLocalStorageKey) || 'fr-FR';

  SetLocale(value: string) {
    localStorage.setItem(CurrentLocalStorageKey, value);
    location.reload();
  }

  GetCurrentLocaleRegionString(): string {
    // TODO : write a fallback if Intl / Intl.Locale not supported
    const regionString = new Intl.Locale(this.locale).region;
    if (regionString) {
      return regionString;
    }
    throw new Error(`Invalid ${this.locale}`);
  }

  // // TODO : use later ?
  // private GetValidRegionCode(regionString: string): TerritoryInfoKeys {
  //   if (IsValidRegionCode(regionString)) {
  //     const retVal = regionString;
  //     return retVal;
  //   }
  //   throw new Error(`'${regionString}' is not a valid region code`);

  //   // private readonly locale: WritableSignal<string> = signal('en-US');
  //   // private readonly currency: WritableSignal<string> = signal('USD');

  //   // GetDefaultCurrencyForCurrentLocale(): string {
  //   //   console.log(`locale id is : ${this.locale2}`);
  //   //   const localeString = this.locale2;

  //   //   const regionString = new Intl.Locale(localeString).region;
  //   //   if (regionString) {
  //   //   } else {
  //   //     throw new Error(`Invalid locale string ${localeString}`);
  //   //   }
  //   // }

  //   // constructor() {
  //   //   // Restore saved values once on service creation
  //   //   try {
  //   //     const raw = localStorage.getItem(LocalizationStorageKey);
  //   //     if (raw) {
  //   //       const parsed = JSON.parse(raw) as SavedLocale;
  //   //       if (parsed.locale) this.locale.set(parsed.locale);
  //   //       if (parsed.currency) this.currency.set(parsed.currency);
  //   //     }
  //   //   } catch {
  //   //     // ignore malformed storage
  //   //   }

  //   //   // Persist whenever either signal changes
  //   //   effect(() => {
  //   //     const payload: SavedLocale = {
  //   //       locale: this.locale(),
  //   //       currency: this.currency(),
  //   //     };
  //   //     try {
  //   //       localStorage.setItem(LocalizationStorageKey, JSON.stringify(payload));
  //   //     } catch {
  //   //       // ignore quota/serialization errors
  //   //     }
  //   //   });
  //   // }

  //   // setLocale(locale: string) {
  //   //   this.locale.set(locale);
  //   // }

  //   // setCurrency(code: string) {
  //   //   this.currency.set(code);
  //   // }

  //   // setLocaleAndCurrency(locale: string, code: string) {
  //   //   this.locale.set(locale);
  //   //   this.currency.set(code);
  //   // }
  // }
}
