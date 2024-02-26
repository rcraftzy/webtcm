import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-repair-onecontent',
  templateUrl: './repair-onecontent.component.html',
  styleUrls: ['./repair-onecontent.component.css'],
})
export class RepairOnecontentComponent {
  cel;
  varia;
  vid
  constructor(
    private activerouter: ActivatedRoute,
    private httpClient: HttpClient,
    private _sanitizer: DomSanitizer,
    private router: Router
  ) {}
  ngOnInit() {
    window.scrollTo(0, 1);
    let userid = this.activerouter.snapshot.paramMap.get('id');
    this.getjson(userid);
    //console.log(userid)

  }

  getjson(userid) {
    this.httpClient.get('assets/js/reparaciones.json').subscribe((data) => {
      this.varia = data;
      this.cel = this.varia.filter(function (varia) {
        return varia.titulo == userid;
      })[0];
      this.getVideoIframe(this.cel.video.link)
      console.log(this.cel);
    });
  }

  getVideoIframe(url: string) {
    // console.log(this.videos[0].video)
     var video, results;
 
     if (url === null) {
       // return '';
     }
     results = url.match('[\\?&]v=([^&#]*)');
     video = results === null ? url : results[1];
 
     this.vid = this._sanitizer.bypassSecurityTrustResourceUrl(
       'https://www.youtube.com/embed/' + video
     );
   }
   inicio() {
    this.router.navigate(['']);
  }
  repairs() {
    this.router.navigate(['repairs']);
  }
}
