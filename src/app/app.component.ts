import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'chat';
  entries: string[] = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];

  ngOnInit() {
    // setInterval(() => {
    //   this.entries.push(new Date().toISOString());
    // }, 2000);

    // Hack for the fact that on mobile devices 100vh might be overlapped by the toolbar
    // See:
    // - https://nicolas-hoizey.com/2015/02/viewport-height-is-taller-than-the-visible-part-of-the-document-in-some-mobile-browsers.html
    // - https://stackoverflow.com/questions/37112218/css3-100vh-not-constant-in-mobile-browser
    // @ts-ignore
    document.querySelector('#screen').style.height = window.innerHeight + 'px';
  }

  ngAfterViewInit(): void {
  }

  addEntry(entry) {
    this.entries.push(entry);
  }
}
