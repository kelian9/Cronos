import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CallbackService } from './callback.service';
import { Data } from './data';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  constructor(private callback: CallbackService) {}
  @Output() onCloseModal = new EventEmitter<boolean>();
  close(close) {
    this.onCloseModal.emit(close);
  }
  public data: Data = new Data();
  public errors = false;
  public formSubmitted:boolean = false; 
  public btnClicked:boolean = false;
  
  sendData(data: Data, form: NgForm) {
    this.formSubmitted = true;
    this.btnClicked = true;
    if (form.valid) {
      console.log(data);
      this.callback.send(data).subscribe(
        res => {
          console.log(res);
          alert(`Мы перезвоним в ближайшее время`);
        },
        err => console.log("Ошибочка" + err)
      );
      form.reset();
      this.formSubmitted = false;
      this.onCloseModal.emit();
    }
    else {
      setTimeout(()=> this.formSubmitted = false, 2500);
    }
  }

  ngOnInit() {}

}
