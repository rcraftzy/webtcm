import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  windowScrolled = false;
  constructor(private router: Router
    ){}
  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset > 400;
     // console.log(this.windowScrolled ,window.pageYOffset)
    });
  }
  scrollToTop(): void {
    window.scrollTo(0, 1);
  }
  abrirLink(url: string){
    window.open(url, "_blank");
}
termsconditions() {
  this.router.navigate(['termsconditions']);
}
privacypolicies() {
  this.router.navigate(['privacypolicies']);
}

mission() {
  this.router.navigate(['mission&vision']);
}
}
