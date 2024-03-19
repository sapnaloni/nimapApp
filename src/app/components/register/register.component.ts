import { Component } from '@angular/core';
import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm = new FormGroup({

  })
  textToShow="Upload your photo"
  formSubmitted = false
  proceedRegistration()
  {
    this.formSubmitted = true
    if(this.registrationForm.valid)
    {
      alert("Registration successfull");
    }
  }
  myValidation():ValidatorFn
  {
    return(control:AbstractControl):{[key:string]:any} |  null=>
    {
      const value=control.value;
      if(value && value.charAt(0)!==value.charAt(0).toUpperCase())
      {
        return{
          'startsWithUppercase':true
        };
      }
      return null;
    }
  }
  onSliderChange(value:number): void {
    // Handle the slider value change here
    console.log('Slider value changed:',value);
    // You can perform any other actions based on the value

  }

  stateList:string[]=['Karnataka','Maharashtra','Tamilnadu','AndraPadesh','kerala','delhi','Odissa','MadyaPadesh'];


  countryList:string[]=['India','USA','Pakistan','England','Dubai','Indonesia','Brazil','Germany'];

  addressList:string[]=[];

  homeList:string[]=['Home Address1','Home Address2'];

  companyList:string[]=['Company Address1','Company Address2'];
  constructor(){ }
  ngOnInit(){}
  onChange(event: any){
    console.log(event.value);
  }

}
