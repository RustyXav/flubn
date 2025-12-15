import { Component, inject } from '@angular/core';
import { DataProviderService } from '../../services/data-provider.service';
import { CurrencyService } from '../../services/currency.service';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  imports: [CurrencyPipe],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
})
export class CartPageComponent {
  dataProvider = inject(DataProviderService);
  currencyService = inject(CurrencyService);
  router: Router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  Remove(id: number) {
    this.dataProvider.RemoveFromCart(id);
  }

  Empy() {
    this.dataProvider.EmptyCart();
  }

  Checkout() {
    this.router.navigate(['checkout', 1], { relativeTo: this.activatedRoute });
  }
}
