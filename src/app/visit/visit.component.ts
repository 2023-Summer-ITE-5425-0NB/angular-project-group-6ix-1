import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent {
  email: any; 
  onSubmit(form: NgForm) {
    console.log(form);
    form.reset();
  }

  groceryForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.minLength(3)]),
    //email: new FormControl<number | null>(null, Validators.required),
  });


}
