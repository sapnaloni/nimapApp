import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../components/register/register.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ModelsModule {
  profile:File;
  firstName: string;
  email: string;
  age?: number;
  address?: string;

  // constructor(firstName: string, email: string, age?: number, address?: string) {
  //   this.firstName = name;
  //   this.email = email;
  //   this.age = age;
  //   this.address = address;
  // }
}
