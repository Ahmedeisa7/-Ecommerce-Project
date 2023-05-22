
import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, ValidationErrors, ValidatorFn } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor(){


    this.registerForm=new FormGroup({
      

      name : new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required,Validators.pattern(/^[a-zA-Z][a-zA-Z0-9]+@{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,4}$/)]),
      userName: new FormControl(null, [Validators.required,Validators.pattern(/^\S*$/)]),
      password: new FormControl(null, [Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
      confirmpassword: new FormControl(null,this.confirmppassword())
       

    })

    

   

    
    
  }


  confirmppassword() :ValidatorFn{

    console.log("done");
    
    return (control: AbstractControl): ValidationErrors | null=>{
    let password= this.registerForm?.controls['password']?.value
      return control.value== this.registerForm?.controls['password']?.value ?null:{'confirmassword': {'invaled': control.value}} ;
    }


  }

  
  submitRegisterForm(){
    console.log(this.registerForm);
    
  }
}
