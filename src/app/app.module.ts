import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from './modal/modal.module';
import { AppComponent } from './app.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { ProductsComponent } from './products/products.component';
import { ProductsData } from './products/products-data.service';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsData } from './projects/projects-data.service';
import { ShareComponent } from './share/share.component';
import { RequestComponent } from './request/request.component';
import { CallbackService } from './modal/callback.service';

@NgModule({
  declarations: [
    AppComponent,
    AdvantagesComponent,
    MobileNavComponent,
    ProductsComponent,
    ProjectsComponent,
    ShareComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule
  ],
  providers: [ProductsData, ProjectsData, CallbackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
