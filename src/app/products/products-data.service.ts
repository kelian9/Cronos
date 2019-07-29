import { Product } from './product';
import { Buttons } from './buttons';
export class ProductsData {
  // массивы для продукции: Фасад, Тротуар, Внутренняя отделка
  // в общий массив добавление идет автоматически
  // чтобы добавить изображения для разных цветов нужно свойсвту href присвоить путь первоначального изображенияБ а затем в свойстве colors задать свойству с цветом путь для других 
  private facade:Product[] = [
    {href: "../assets/images/products/jemch.white.png", title: "Жемчужина", price: 2200, sale: 900, colors:{beige: "../assets/images/products/jemch.beige.png", white: "../assets/images/products/jemch.white.png", brown: "../assets/images/products/jemch.brown.png"}},
    {href: "../assets/images/products/slanec.white.png", title: "Сланец", price: 4100, sale: 1050, colors:{beige: "../assets/images/products/slanec.beige.png", white: "../assets/images/products/slanec.white.png", brown: "../assets/images/products/slanec.brown.png"}}
  ];

  private pavingSlabs:Product[] = [
    {href: "../assets/images/products/corner.white.png", title: "Старый город", price: 1800, sale: 900, colors:{beige: "../assets/images/products/corner.beige.png", white: "../assets/images/products/corner.white.png", brown: "../assets/images/products/corner.brown.png"}},
    {href: "../assets/images/products/stick.white.png", title: "Кирпич Классический", price: 1600, sale: 800, colors:{beige: "../assets/images/products/stick.beige.png", white: "../assets/images/products/stick.white.png", brown: "../assets/images/products/stick.brown.png"}}
  ];

  private inDecoration:Product[] = [
    {href: "../assets/images/products/melisa.white.png", title: "Скала", price: 2000, sale: 1050, colors:{beige: "../assets/images/products/melisa.beige.png", white: "../assets/images/products/melisa.white.png", brown: "../assets/images/products/melisa.brown.png"}},
    {href: "../assets/images/products/browny.white.png", title: "Природный", price: 3700, sale: 900, colors:{beige: "../assets/images/products/browny.beige.png", white: "../assets/images/products/browny.white.png", brown: "../assets/images/products/browny.brown.png"}}
  ];

  private all:Product[];
  private buttons:Buttons[] = [
    {text: "Все", array: this.getAllData()},
    {text: "Фасад", array: this.facade},
    {text: "Тротуар", array: this.pavingSlabs},
    {text: "Внутренняя отделка", array: this.inDecoration}
  ];

  public getAllData() {
    this.all = [];
    this.all = [].concat(this.facade,this.pavingSlabs,this.inDecoration);
    function sortAll(a,b) {
      return (a.price - b.price);
    }
    this.all.sort(sortAll);
    return this.all;
  }

  public getFacadeData() {
    return this.facade;
  }

  public getPavingSlabsData() {
      return this.pavingSlabs;
  }

  public getInDecorationData() {
      return this.inDecoration;
  }

  public getButtonsData() {
      return this.buttons;
  }
}