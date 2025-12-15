import { Component, inject } from '@angular/core';
import { CurrencyCode, CurrencyService } from '../../services/currency.service';
import { CurrencySymbolPipe } from '../../pipes/currency-symbol.pipe';

@Component({
  selector: 'app-currency-switcher',
  imports: [CurrencySymbolPipe],
  templateUrl: './currency-switcher.component.html',
  styleUrl: './currency-switcher.component.css',
})
export class CurrencySwitcherComponent {
  readonly currencyService = inject(CurrencyService);

  SwitchTo(currency: CurrencyCode) {
    this.currencyService.SetCurrency(currency);
  }

  //  private readonly currentCurrency = signal()
}
