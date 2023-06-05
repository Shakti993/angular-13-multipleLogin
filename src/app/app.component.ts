import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myArray = [];
  constructor() {
    for(let i =0; i<5000; i++) {
      this.myArray.push({
        name: 'Dude ' + i,
        id: i,
        age: (Math.random() * 100).toFixed(0)
      })
    }
    
  }

}
