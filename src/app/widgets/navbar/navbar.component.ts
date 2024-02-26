import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router: Router) {}

  inicioac = false;
  repairsac = false;
  ourcontentac = false;
  productsac = false;
  ngOnInit(): void {
    var URLactual = window.location;
    var pathname=URLactual.pathname.split("/")
    this.activeitem(pathname[1])
console.log(pathname[1])

  }
  inicio() {
    this.router.navigate(['']);
    this.activeitem('')
  }
  repairs() {
    this.router.navigate(['repairs']);
    this.activeitem('repairs')
  }

  ourcontent() {
    this.router.navigate(['our-content']);
    this.activeitem('our-content')
  }
  products() {
    this.router.navigate(['products']);
    this.activeitem('products')
  }


  activeitem(item) {
    switch (item) {
      case "":
        this.inicioac = true;
        this.repairsac = false;
        this.ourcontentac = false;
        this.productsac = false;
        break;
      case  "repairs":
        this.inicioac = false;
        this.repairsac = true;
        this.ourcontentac = false;
        this.productsac = false;
        break;
        case"our-repairsone":
        this.inicioac = false;
        this.repairsac = true;
        this.ourcontentac = false;
        this.productsac = false;
        break
      case "our-content":
        this.inicioac = false;
        this.repairsac = false;
        this.ourcontentac = true;
        this.productsac = false;
        break;
      case "products":
        this.inicioac = false;
        this.repairsac = false;
        this.ourcontentac = false;
        this.productsac = true;
        break;
        case "our-repairsone"||"termsconditions" ||"mission&vision":
          this.inicioac = false;
          this.repairsac = false;
          this.ourcontentac = false;
          this.productsac = false;
          break;
    }
  }
}
