import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductsData } from './products-data.service';
import { Buttons } from "./buttons";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass'],
  providers: [ProductsData]
})
export class ProductsComponent implements OnInit {
  // Массивы продуктов
  all:Product[] = [];
  facade:Product[] = [];
  pavingSlabs:Product[] = [];
  inDecoration:Product[] = [];
  productsButtons:Buttons[] = [];//Кнопки

  constructor(private data:ProductsData) {}

  array:Product[] = [];//Массив, который выводится
  
  active:boolean[] = [
    true,false,false,false
  ];//Массив для активации кнопок


  //Функция для получения нужного массива по нажатию кнопки
  getArray(array:Product[], i:number) {
    this.array = [];
    this.forShowMoreArray = array;
    if (document.documentElement.clientWidth <= 600) {
      for (let i = 0; i < 4; i++) {
        const element = array[i];
        this.array.push(element);
      }
      this.canShowMore = true;
    }
    else {
      let index:number;
      if (array.length >= 10) {
        index = 10;
        this.canShowMore = true;
      }
      else {
        index = array.length;
        this.canShowMore = false;
      }
      for (let i = 0; i < index; i++) {
        const element = array[i];
        this.array.push(element);
      }
    }
    this.buttonShowMore = "Показать еще";
    this.hide = false;
    for (let ind = 0; ind < this.active.length; ind++) {
      this.active[ind] = false;
    }
    this.active[i] = true;
  }

  
  //Функция для кнопки показать еще
  forShowMoreArray:Product[] = [];
  buttonShowMore:string = "Показать еще";
  canShowMore:boolean = true;
  hide:boolean = false;// для стрелочки
  arr:Product[] = [];//массив для функций скрытия(в него копируется исходный и из него устанавливаются значения)
  showMore(array, parentArray) {
    //если массив может увеличиваться
    parentArray = this.forShowMoreArray;
    if (this.buttonShowMore == "Показать еще") {
      //для мобильных
      if (document.documentElement.clientWidth <= 600) {
        let a = this.array.length + 4;
        if ((this.array[3] == parentArray[3]) && (parentArray.length >= a)) {
          for (let i = this.array.length; i < a; i++) {
            const element = parentArray[i];
            this.array.push(element);
          }
        }
        else {
          for (let i = array.length; i < parentArray.length; i++) {
            const element = parentArray[i];
            this.array.push(element);
          }
          this.hide = true;
          this.buttonShowMore = "Скрыть";
        }
        // if (this.array[3] == this.all[3]) {
        //   if (this.all.length >= a) {
        //     for (let i = this.array.length; i < a; i++) {
        //       const element = this.all[i];
        //       this.array.push(element);
        //     }
        //   }
        //   else {
        //     for (let i = this.array.length; i < this.all.length; i++) {
        //       const element = this.all[i];
        //       this.array.push(element);
        //     }
        //     this.buttonShowMore = "Скрыть";
        //     this.hide = true;
        //   }
        // }
        // else if (this.array[3] == this.facade[3]) {
        //   if (this.facade.length >= a) {
        //     for (let i = this.array.length; i < a; i++) {
        //       const element = this.facade[i];
        //       this.array.push(element);
        //     }
        //   }
        //   else {
        //     for (let i = this.array.length; i < this.facade.length; i++) {
        //       const element = this.facade[i];
        //       this.array.push(element);
        //     }
        //     this.buttonShowMore = "Скрыть";
        //     this.hide = true;
        //   }
        // }
        // else if (this.array[3] == this.pavingSlabs[3]) {
        //   if (this.pavingSlabs.length >= a) {
        //     for (let i = this.array.length; i < a; i++) {
        //       const element = this.pavingSlabs[i];
        //       this.array.push(element);
        //     }
        //   }
        //   else {
        //     for (let i = this.array.length; i < this.pavingSlabs.length; i++) {
        //       const element = this.pavingSlabs[i];
        //       this.array.push(element);
        //     }
        //     this.buttonShowMore = "Скрыть";
        //     this.hide = true;
        //   }
        // }
        // else if (this.array[3] == this.inDecoration[3]) {
        //   if (this.inDecoration.length >= a) {
        //     for (let i = this.array.length; i < a; i++) {
        //       const element = this.inDecoration[i];
        //       this.array.push(element);
        //     }
        //   }
        //   else {
        //     for (let i = this.array.length; i < this.inDecoration.length; i++) {
        //       const element = this.inDecoration[i];
        //       this.array.push(element);
        //     }
        //     this.buttonShowMore = "Скрыть";
        //     this.hide = true;
        //   }
        // }
      }//для десктопа
      else {
        let a = this.array.length + 10;
        if ((this.array[3] == parentArray[3]) && (parentArray.length >= a)) {
          for (let i = this.array.length; i < a; i++) {
            const element = parentArray[i];
            this.array.push(element);
          }
        }
        else {
          for (let i = array.length; i < parentArray.length; i++) {
            const element = parentArray[i];
            this.array.push(element);
          }
          this.hide = true;
          this.buttonShowMore = "Скрыть";
        }
        // if (this.array[9] == this.all[9]) {
        //   if (this.all.length >= a) {
        //     for (let i = this.array.length; i < a; i++) {
        //       const element = this.all[i];
        //       this.array.push(element);
        //     }
        //   }
        //   else {
        //     for (let i = this.array.length; i < this.all.length; i++) {
        //       const element = this.all[i];
        //       this.array.push(element);
        //     }
        //     this.buttonShowMore = "Скрыть";
        //     this.hide = true;
        //   }
        // }
        // else if (this.array[9] == this.facade[9]) {
        //   if (this.facade.length >= a) {
        //     for (let i = this.array.length; i < a; i++) {
        //       const element = this.facade[i];
        //       this.array.push(element);
        //     }
        //   }
        //   else {
        //     for (let i = this.array.length; i < this.facade.length; i++) {
        //       const element = this.facade[i];
        //       this.array.push(element);
        //     }
        //     this.buttonShowMore = "Скрыть";
        //     this.hide = true;
        //   }
        // }
        // else if (this.array[9] == this.pavingSlabs[9]) {
        //   if (this.pavingSlabs.length >= a) {
        //     for (let i = this.array.length; i < a; i++) {
        //       const element = this.pavingSlabs[i];
        //       this.array.push(element);
        //     }
        //   }
        //   else {
        //     for (let i = this.array.length; i < this.pavingSlabs.length; i++) {
        //       const element = this.pavingSlabs[i];
        //       this.array.push(element);
        //     }
        //     this.buttonShowMore = "Скрыть";
        //     this.hide = true;
        //   }
        // }
        // else if (this.array[9] == this.inDecoration[9]) {
        //   if (this.inDecoration.length >= a) {
        //     for (let i = this.array.length; i < a; i++) {
        //       const element = this.inDecoration[i];
        //       this.array.push(element);
        //     }
        //   }
        //   else {
        //     for (let i = this.array.length; i < this.inDecoration.length; i++) {
        //       const element = this.inDecoration[i];
        //       this.array.push(element);
        //     }
        //     this.buttonShowMore = "Скрыть";
        //     this.hide = true;
        //   }
        // }
      }  
    }
    //если нужно скрыть
    else {
      // this.arr = [];
      this.hide = false;
      for (let i = 0; i < array.length; i++) {
        const element = array[i];
        this.arr.push(element);
      }
      this.array = [];
      if (document.documentElement.clientWidth <= 600) {
        for (let i = 0; i < 4; i++) {
          const element = this.forShowMoreArray[i];
          this.array.push(element);
        }
        this.buttonShowMore = "Показать еще";
      }
      else {
        for (let i = 0; i < 10; i++) {
          const element = this.forShowMoreArray[i];
          this.array.push(element);
        }
        this.buttonShowMore = "Показать еще";
      }
    }
  }

  changeColor(elem, color:string) {
    elem.href = elem.colors[color];
  }
  selected(elem, color) {
    if (elem.href == color) {
      return true;
    }
  }
  

  ngOnInit() {
    if (document.documentElement.clientWidth <= 600) {
      for (let i = 0; i < 4; i++) {
        const element = this.data.getAllData()[i];
        this.array.push(element);
      };
    }
    else {
      for (let i = 0; i < 10; i++) {
        const element = this.data.getAllData()[i];
        this.array.push(element);
      };
    }
    this.all = this.data.getAllData();
    this.facade = this.data.getFacadeData();
    this.pavingSlabs = this.data.getPavingSlabsData();
    this.inDecoration = this.data.getInDecorationData();
    this.productsButtons = this.data.getButtonsData();
    this.forShowMoreArray = this.data.getAllData();
  }

}