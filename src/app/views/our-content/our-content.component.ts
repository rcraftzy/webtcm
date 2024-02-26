import { Component, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-our-content',
  templateUrl: './our-content.component.html',
  styleUrls: ['./our-content.component.css'],
})
export class OurContentComponent {
  constructor(
    private router: Router,
    private _sanitizer: DomSanitizer,
    private httpClient: HttpClient
  ) {}

  videos
  ngAfterViewInit() {
    // ngOnInit is NOT the right lifecycle event for this.
    this.focusSettingEventEmitter.emit(true);
  }
  public focusSettingEventEmitter = new EventEmitter<boolean>();
  setFocus(): void {
    this.focusSettingEventEmitter.emit(true);
  }
  vid;
  varia;
  id;
  titulo
  ngOnInit(): void {
    window.scrollTo(0, 1);
   //  this.getVideoIframe(this.videos[0].video);
   this.getjson('1');
   this.httpClient.get('assets/js/videosyoutube.json').subscribe(async(data) => {
    this.videos=data
   })
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

  getjson(poc:any) {
    this.httpClient.get('assets/js/videosyoutube.json').subscribe(async(data) => {
      this.varia = data;
      this.id =await this.varia.filter(function (varia) {
        return varia.id == poc;
        // console.log(data)
      })[0];
     this.getVideoIframe(this.id.video);
     this.titulo=this.id.title
      //console.log(this.videos);
    });
  }

  getVideoIframe1(url: any) {
    var video, results;

    if (url === null) {
      return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video = results === null ? url : results[1];
    
    return this._sanitizer.bypassSecurityTrustResourceUrl(
      'https://img.youtube.com/vi/' + video + '/hqdefault.jpg'
    );
  }
  valuevid(vid: any) {
   // console.log(vid)
  // (url: any)
   this.getjson(vid);
    this.scrollToTop();
  }
  inicio() {
    this.router.navigate(['']);
  }

  scrollToTop(): void {
    window.scrollTo(0, 300);
  }

}
