import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface MyTypo {
  name: string;
  type: string;
  lat: string;
  lon: string;
}

@Component({
  selector: 'app-nominatim-test',
  imports: [FormsModule],
  templateUrl: './nominatim-test.component.html',
  styleUrl: './nominatim-test.component.css',
})
export class NominatimTestComponent {
  onSubmit() {
    throw new Error('Method not implemented.');
  }
  http = inject(HttpClient);
  async Gruhz() {
    console.log('user input = ');
    console.log(this.Userinput());
    console.log('searching nominatim ...');

    const jgrehg = this.http.get<MyTypo[]>(
      '/api/nominatim/search?' + 'format=json&q=' + this.Userinput()
    );
    jgrehg.subscribe({ next: doSomething, error: doSomething_error });

    // const results = await lastValueFrom(jgrehg);
    // console.log(results);
  }
  Userinput = model('');
}
function doSomething(results: MyTypo[]): void {
  console.log('====================================================');
  console.log('next subscribe : ');
  results
    .filter((result) => {
      return result.type === 'hotel';
    })
    .forEach((result) => {
      console.log('name = ', result.name);
    });
  console.log(results);
  console.log('====================================================');
}

function doSomething_error(err: unknown): void {
  console.log(err);
}
