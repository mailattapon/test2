import { Component, OnInit } from '@angular/core';
import { FormBuilder, Form, FormGroup } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 //formBuil:FormBuilder;
 formGroup: FormGroup; 
 constructor(
    private fb: FormBuilder
  ) {
    //this.formBuil = fb
   }

  ngOnInit() {
    //this.formBuil
    this.formGroup = this.fb.group({
      firstName: this.fb.control(''),
      lastName: [''],
      email: [''],
      Age: ['21']

    })
  }
  onSubmit(form: FormGroup){
    console.log(form);
    const{firstName,lastName,email,Age} = form.value;
    console.log(firstName,lastName,email,Age);
    const user = new User(firstName,lastName,email,Age);
    console.log(user);
    

  
  }

}
