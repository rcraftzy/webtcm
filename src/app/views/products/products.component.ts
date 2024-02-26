import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(
    private router: Router,
    private _sanitizer: DomSanitizer,
    private httpClient: HttpClient
  ) {}
  cel;
  varia;

  ngOnInit(): void {
    window.scrollTo(0, 1);
    this.secondWay();


  }

  public async secondWay() {
    this.httpClient.get('assets/js/productos.json').subscribe((data) => {
      this.cel = data;

      //console.log(this.cel);
    });
  }

  inicio() {
    this.router.navigate(['']);
  }
  abrirLink(url: string) {
    window.open(
      'https://wa.me/593963644323?text= Saludos quisiera más información de este producto: ' +
        url,
      '_blank'
    );
  }
}
