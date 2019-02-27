import { Component } from '@angular/core';
import { Nav } from './nav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  menu:Nav[] = [
    {href: "#products", text:"Продукция"},
    {href: "#production", text:"Производство"},
    {href: "#about", text:"О компании"},
    {href: "#contacts", text:"Контакты"}
  ];
  
  
}
