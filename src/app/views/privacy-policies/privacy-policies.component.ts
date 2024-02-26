import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-privacy-policies',
  templateUrl: './privacy-policies.component.html',
  styleUrls: ['./privacy-policies.component.css']
})
export class PrivacyPoliciesComponent {
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
