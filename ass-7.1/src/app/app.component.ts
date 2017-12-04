import { Component } from '@angular/core';
// defining the property of the component 
@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
// defining the class with the required property
export class RootComponent {
  title: string;
  name: string;
  lastName: string;
  submitted: boolean = false;
  ngOnInit() {
  }

// defining submit function
  submit(Name: string, LastName: string) {
    this.submitted = true;
    this.title = `${Name} ${LastName}`;
  }
}
