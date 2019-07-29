import { Component } from '@angular/core';
import { Nav } from './nav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public menu:Nav[] = [
    {href: "#products", text:"Продукция"},
    {href: "#production", text:"Производство"},
    {href: "#about", text:"О компании"},
    {href: "#contacts", text:"Контакты"}
  ];

  public advantages:boolean = false;
  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
