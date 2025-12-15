import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./organisms/footer/footer.component";
import { HeaderComponent } from "./organisms/header/header.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
})
export class AppComponent {
  constructor() {
    console.log('in app comp class ctor');
  }
  title = 'end_of_training_app';


}






