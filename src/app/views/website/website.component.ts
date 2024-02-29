import { Component } from '@angular/core';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css'],
})
export class WebsiteComponent {
  title = 'websiteTCM';
  topnavbar = false;

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.topnavbar = window.pageYOffset == 0;
    });
    window.scrollTo(0, 1);
  }
}
