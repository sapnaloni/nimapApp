import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  onButtonClick(): void {
    alert('I Agreed to Proceed!!!');
    // Add your custom logic here
  }
}
