import { Component } from '@angular/core';
import {lorem} from 'faker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = '';

  onChangeInput(event: Event) {
    const typing = event.target as HTMLInputElement;
    this.enteredText = typing.value;
  }

  compare(randomLetter: string, enteredText: string) {    
    if (!enteredText) {
      return 'pending';
    }

    return randomLetter === enteredText ? 'has-text-success' : 'has-text-danger';
  }
 
}
