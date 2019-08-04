import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chat';
  entries: string[] = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];

  ngOnInit() {
    // setInterval(() => {
    //   this.entries.push(new Date().toISOString());
    // }, 2000);
  }

  addEntry(entry) {
    this.entries.push(entry);
  }
}
