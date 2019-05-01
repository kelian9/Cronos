import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  constructor() { }
  @Output() onCloseModal = new EventEmitter<boolean>();
  close(close) {
    this.onCloseModal.emit(close);
  }
  ngOnInit() {
  }

}
