import { Component } from '@angular/core';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopnavbarComponent {


  abrirLink(url: string){
    window.open(url, "_blank");
}

}
