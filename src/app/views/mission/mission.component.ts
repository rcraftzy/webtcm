import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent {


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
