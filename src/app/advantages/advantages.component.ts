import { Component, OnInit } from '@angular/core';
import { Advantage } from './advantage';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.sass']
})
export class AdvantagesComponent implements OnInit {
  
  advantages:Advantage[] = [
    {src: "../assets/images/icons/icon1.svg", text: "Лет на рынке", anim: true},
    {src: "../assets/images/icons/icon2.svg", text: "Бесплатная доставка по всей России", anim: false},
    {src: "../assets/images/icons/icon3.svg", text: "Описание какого-то преимущества", anim: false},
    {src: "../assets/images/icons/icon4.svg", text: "Гарантия 10 лет", anim: false}    
  ];
  constructor() { }
  
  ngOnInit() {
  }

}
