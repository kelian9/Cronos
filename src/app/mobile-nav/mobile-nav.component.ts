import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.sass']
})
export class MobileNavComponent implements OnInit {
  @Input() menu = this.menu;
  constructor() {}
  openMenu:boolean = false;
  open() {
    if(!this.openMenu) {
        this.openMenu = true;
    }
    else {
      this.openMenu = false;
    }
  }
  ngOnInit() {
  }

}
