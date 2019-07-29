import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.sass']
})
export class MobileNavComponent implements OnInit {
  @Input() menu;

  constructor() {}

  public openMenu:boolean = false;
  public open() {
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
