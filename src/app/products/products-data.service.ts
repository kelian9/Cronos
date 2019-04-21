import { Product } from './product';
import { Buttons } from './buttons';
export class ProductsData {
  // массивы для продукции: Фасад, Тротуар, Внутренняя отделка
  // в общий массив добавление идет автоматически
  // чтобы добавить изображения для разных цветов нужно свойсвту href присвоить путь первоначального изображенияБ а затем в свойстве colors задать свойству с цветом путь для других 
  private facade:Product[] = [
      {href: "../assets/images/products/jemch.white.png", title: "Жемчужина", price: 2200, sale: 900, colors:{beige: "../assets/images/products/jemch.beige.png", white: "../assets/images/products/jemch.white.png", brown: "../assets/images/products/jemch.brown.png"}},
      {href: "../assets/images/products/slanec.white.png", title: "Сланец", price: 4100, sale: 1050, colors:{beige: "../assets/images/products/slanec.beige.png", white: "../assets/images/products/slanec.white.png", brown: "../assets/images/products/slanec.brown.png"}},
      {href: "../assets/images/products/corner.white.png", title: "Старый город", price: 1800, sale: 900, colors:{beige: "../assets/images/products/corner.beige.png", white: "../assets/images/products/corner.white.png", brown: "../assets/images/products/corner.brown.png"}},
      {href: "../assets/images/products/stick.white.png", title: "Кирпич Классический", price: 1600, sale: 800, colors:{beige: "../assets/images/products/stick.beige.png", white: "../assets/images/products/stick.white.png", brown: "../assets/images/products/stick.brown.png"}},
      {href: "../assets/images/products/melisa.white.png", title: "Скала", price: 2000, sale: 1050, colors:{beige: "../assets/images/products/melisa.beige.png", white: "../assets/images/products/melisa.white.png", brown: "../assets/images/products/melisa.brown.png"}},
      {href: "../assets/images/products/browny.white.png", title: "Природный", price: 3700, sale: 900, colors:{beige: "../assets/images/products/browny.beige.png", white: "../assets/images/products/browny.white.png", brown: "../assets/images/products/browny.brown.png"}}
  ];
  private pavingSlabs:Product[] = [
    {href: "../assets/pl2.jpg", title:"Филипп", price: 3000, sale: 2000, colors:{beige:"../assets/pl2.jpg", black:"https://tn-hauberk.ru/upload/iblock/2b5/2b5fed6cdf0071ce5223f5947b20e7ad.jpg", white:"https://baucenter.ru/preview/r/612x612/c/612x612/upload/pictures/25/250300057-0.jpg", brown:"http://braer.ru/pictures/images/tile/domino/safari_3.jpg"}},
    {href: "../assets/pl2.jpg", title:"Филипп", price: 3000, sale: 2000, colors:{beige:"../assets/pl2.jpg", black:"https://tn-hauberk.ru/upload/iblock/2b5/2b5fed6cdf0071ce5223f5947b20e7ad.jpg", white:"https://baucenter.ru/preview/r/612x612/c/612x612/upload/pictures/25/250300057-0.jpg", brown:"http://braer.ru/pictures/images/tile/domino/safari_3.jpg"}}
  ];
  private inDecoration:Product[] = [
    {href: "https://images.ua.prom.st/533999798_w640_h640_100_2591.jpg", title:"Кирюха", price: 5500, sale: 2000, colors:{white:"https://images.ua.prom.st/533999798_w640_h640_100_2591.jpg", black:"https://реконстрой.рф/assets/goods-images-rekonstroy/lode/Saturn-%D0%9E%D0%B1%D0%BB%D0%B8%D1%86%D0%BE%D0%B2%D0%BE%D1%87%D0%BD%D0%B0%D1%8F-%D0%BF%D0%BB%D0%B8%D1%82%D0%BA%D0%B0-%D1%81%D1%82%D0%B5%D0%BD%D0%B0-%D0%BC%D0%B0%D0%BB%D0%B0%D1%8F.jpg"}},
    {href: "https://images.ua.prom.st/533999798_w640_h640_100_2591.jpg", title:"Кирюха", price: 5500, sale: 2000, colors:{white:"https://images.ua.prom.st/533999798_w640_h640_100_2591.jpg", black:"https://реконстрой.рф/assets/goods-images-rekonstroy/lode/Saturn-%D0%9E%D0%B1%D0%BB%D0%B8%D1%86%D0%BE%D0%B2%D0%BE%D1%87%D0%BD%D0%B0%D1%8F-%D0%BF%D0%BB%D0%B8%D1%82%D0%BA%D0%B0-%D1%81%D1%82%D0%B5%D0%BD%D0%B0-%D0%BC%D0%B0%D0%BB%D0%B0%D1%8F.jpg"}}
  ];
  private all:Product[];
  private buttons:Buttons[] = [
    {text: "Все", array: this.getAllData()},
    {text: "Фасад", array: this.facade},
    {text: "Тротуар", array: this.pavingSlabs},
    {text: "Внутренняя отделка", array: this.inDecoration}
  ];
  getAllData() {
    this.all = [];
    this.all = [].concat(this.facade,this.pavingSlabs,this.inDecoration);
    function sortAll(a,b) {
      return (a.price - b.price);
    }
    this.all.sort(sortAll);
    return this.all;
  }
  getFacadeData() {
    return this.facade;
  }
  getPavingSlabsData() {
      return this.pavingSlabs;
  }
  getInDecorationData() {
      return this.inDecoration;
  }
  getButtonsData() {
      return this.buttons;
  }

}