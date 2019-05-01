import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.sass']
})
export class RequestComponent implements OnInit {

  constructor() { }

  @Output() onOpenModal = new EventEmitter<boolean>();
  
  openModal(open) {
    this.onOpenModal.emit(open);
  }
  ngOnInit() {
  }

}
