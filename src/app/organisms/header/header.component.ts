import { Component } from '@angular/core';
import { CurrencySwitcherComponent } from "../../molecules/currency-switcher/currency-switcher.component";
import { CartButtonComponent } from "../../atoms/cart-button/cart-button.component";

@Component({
  selector: 'app-header',
  imports: [CurrencySwitcherComponent, CartButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
