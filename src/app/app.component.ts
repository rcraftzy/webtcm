import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'websiteTCM';
  topnavbar= false;

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.topnavbar = window.pageYOffset == 0;
     
    });
    window.scrollTo(0, 1);
  }



}
