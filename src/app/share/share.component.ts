import { Component, OnInit } from '@angular/core';
import { Share } from './share';
import { ShareData } from './share-data.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.sass'],
  providers:[ShareData]
})
export class ShareComponent implements OnInit {
  shareData:Share[] = [];
  constructor(private data: ShareData) { }
  
  ngOnInit() {
    this.shareData = this.data.getData();
  }

}
