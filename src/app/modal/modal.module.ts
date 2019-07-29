import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { CallbackService } from './callback.service';

@NgModule({
    declarations: [ ModalComponent ],
    imports: [ FormsModule, HttpClientModule, CommonModule ],
    providers: [CallbackService],
    exports: [ModalComponent]
})

export class ModalModule {}