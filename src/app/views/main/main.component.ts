import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(
    private router: Router,
    private _sanitizer: DomSanitizer,
    private httpClient: HttpClient
  ) {}
  cel;
  varia;
  c
  ngOnInit(): void {
    window.scrollTo(0, 1);
    this.secondWay();
  }
   

  public async secondWay() {
    this.httpClient.get('assets/js/productos.json').subscribe((data) => {
      this.c=[{ poc:"0" },{ poc:"1" },{ poc:"2" }]
      this.cel = data;
      this.varia = this.cel.slice(this.cel.length-4)

    });
  }


  abrirLink(url: string) {
    window.open(
      'https://wa.me/593963644323?text= Saludos quisiera más información de este producto: ' +
        url,
      '_blank'
    );
  }
  products(){
    this.router.navigate(['products']); 
  }
}
