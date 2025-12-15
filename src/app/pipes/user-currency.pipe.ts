import { inject, Pipe, PipeTransform } from '@angular/core';
import { LocaleService } from '../services/locale.service';


// TODO ....



@Pipe({
  name: 'userCurrency',
})
export class UserCurrencyPipe implements PipeTransform {
  readonly localeService = inject(LocaleService);
  transform(
    value: number | null | undefined,
    currency?: string,
    locale = 'en-US'
  ): string {
    if (value == null) return '';
    // prefer explicit argument, else use persisted currency
    const curr = currency ?? this.localeService.getCurrency();
    try {
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: curr,
      }).format(value);
    } catch {
      // fallback formatting if Intl fails or currency invalid
      return `${Number(value).toFixed(2)} ${curr}`;
    }
  }
}
