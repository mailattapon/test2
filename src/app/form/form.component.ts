import { Component, OnInit } from '@angular/core';
import { FormBuilder, Form, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { User } from '../user';
import { Key } from 'protractor';

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
      firstName: ['',[Validators.required,Validators.minLength(3)]],
      lastName: ['',[Validators.required,Validators.minLength(3)]],
      email: ['',[Validators.email]],
      Age: ['21',[Validators.min(0),Validators.max(99)]]

    })
  
  }
  EmailValidater(control: AbstractControl){
    const value = control.value;
    if (value && value.includes('@')){
      return null;
    }
    return{
      email: true
    }

  }

  onSubmit(form: FormGroup){
    console.log(form.valid,form.invalid)
    console.log(<FormControl>(form.get('firstName')).errors);

  //   if(form.valid){

  //   }
  //   else{[
  //     'firstName','lastName','email','Age'
  //   ].forEach(Key : string) =>{
  //     cou

  //   }
  // }

    console.log(form);

    const{firstName,lastName,email,Age} = form.value;
  
    console.log(firstName,lastName,email,Age);
    const user = new User(firstName,lastName,email,Age);
    console.log(user);
    
    

    if(form.valid){
      
    }

  
  }

}
