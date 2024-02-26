import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.css']
})
export class TermsAndConditionsComponent {
  constructor(

    private router: Router
  ) {}
  ngOnInit(): void {
    window.scrollTo(0, 1);
    
  }
  inicio() {
    this.router.navigate(['']);
  }
}
