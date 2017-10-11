import { Component } from '@angular/core';

export class Invention {
  name: String;
  inventor: String;
  year: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'InventionsHub!!';
  invention: Invention = {
    name: ' C Programing Language ',
    inventor: ' Dennis Ritchie ',
    year: '1972'
  }
}
