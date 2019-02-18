import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  @Input() color

  constructor() { }

  ngOnInit() {
    console.log(this.color)
    if(!this.color){
      this.color = 'white-text'
    }
    let socialMediaIcons = document.getElementsByClassName('social-media')
    for(let i=0; i<socialMediaIcons.length; i++) {
      socialMediaIcons[i].className += ' ' + this.color;
    }
  }

}
