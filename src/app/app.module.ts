import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { ProductsComponent } from './products/products.component';
import { ProductsData } from './products/products-data.service';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsData } from './projects/projects-data.service';
import { ShareComponent } from './share/share.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvantagesComponent,
    MobileNavComponent,
    ProductsComponent,
    ProjectsComponent,
    ShareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductsData, ProjectsData],
  bootstrap: [AppComponent]
})
export class AppModule { }
