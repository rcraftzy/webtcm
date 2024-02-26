import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-reparaciones',
  templateUrl: './reparaciones.component.html',
  styleUrls: ['./reparaciones.component.css'],
})
export class ReparacionesComponent {
  constructor(private router: Router, private httpClient: HttpClient) {}
  cel;
  varia;
  lap;
  ngOnInit(): void {
    window.scrollTo(0, 1);
    this.secondWay();
  }

  public async secondWay() {
    this.httpClient.get('assets/js/reparaciones.json').subscribe((data) => {
      this.varia = data;
      this.cel = this.varia.filter(function (varia) {
        varia.presentacion = varia.presentacion.substring(0, 150) + '...';
        return varia.tipo == 'celulares';
      });
      this.lap = this.varia.filter(function (varia) {
        varia.presentacion = varia.presentacion.substring(0, 150) + '...';
        return varia.tipo == 'laptops';
      });

      //console.log(this.cel);
    });
  }
  inicio() {
    this.router.navigate(['']);
  }
  editarServesh(id: any) {
    // console.log(id)
   this.router.navigate(['our-repairsone', id]);
  }
}
