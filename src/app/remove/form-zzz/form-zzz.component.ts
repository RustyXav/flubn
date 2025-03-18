

import { Component } from '@angular/core';
import { ActorZZZ } from '../actor-zzz';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-form-zzz',
  templateUrl: './form-zzz.component.html',
  styleUrl: './form-zzz.component.css',
  imports: [FormsModule, JsonPipe],
})
export class FormZZZComponent {
  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];
  model = new ActorZZZ(18, 'Tom Cruise', this.skills[3], 'CW Productions');
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
  newActor() {
    this.model = new ActorZZZ(42, '', '');
  }
  heroine(): ActorZZZ {
    const myActress = new ActorZZZ(42, 'Marilyn Monroe', 'Singing');
    console.log('My actress is called ' + myActress.name); // "My actress is called Marilyn"
    return myActress;
  }
  //////// NOT SHOWN IN DOCS ////////
  // Reveal in html:
  //   Name via form.controls = {{showFormControls(actorForm)}}
  showFormControls(form: NgForm) {
    return form && form.controls['name'] && form.controls['name'].value; // Tom Cruise
  }
  /////////////////////////////
}
