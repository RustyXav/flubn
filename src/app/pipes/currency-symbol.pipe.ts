import { inject, Pipe, PipeTransform } from '@angular/core';
import { CurrencyCode } from '../services/currency.service';
import { LocaleService } from '../services/locale.service';

@Pipe({
  name: 'currencySymbol',
})
export class CurrencySymbolPipe implements PipeTransform {
  localeService = inject(LocaleService);
  transform(currencyCode: CurrencyCode): string {
    try {
      const parts = new Intl.NumberFormat(this.localeService.locale, {
        style: 'currency',
        currency: currencyCode,
      }).formatToParts(1);
      return parts.find((p) => p.type === 'currency')?.value ?? currencyCode;
    } catch {
      return currencyCode; // fallback to code when Intl fails or code invalid
    }
  }
}
