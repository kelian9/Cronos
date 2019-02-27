import { Product } from './product';
import { Buttons } from './buttons';
export class ProductsData {
  // массивы для продукции: Фасад, Тротуар, Внутренняя отделка
  // в общий массив добавление идет автоматически
  // чтобы добавить изображения для разных цветов нужно свойсвту href присвоить путь первоначального изображенияБ а затем в свойстве colors задать свойству с цветом путь для других 
  private facade:Product[] = [
      {href: "http://s.petrovich.ru/images/38256/original.jpg", title: "Акакий", price: 3000, sale: 2000, colors:{beige: "http://s.petrovich.ru/images/38256/original.jpg", black: "http://www.vibor-group.com/cache/thumbnails/a43383e14b1620cef4ad656fde0c4904.jpg", white: "https://i1.rozetka.ua/goods/1835401/13495890_images_1835401318.jpg", brown: "http://braer.ru/pictures/images/tile/landhouse/everest_1.jpg"}},
      {href: "http://s.petrovich.ru/images/38256/original.jpg", title: "Гриша", price: 5000, sale: 4000, colors:{beige: "http://s.petrovich.ru/images/38256/original.jpg", black: "http://www.vibor-group.com/cache/thumbnails/a43383e14b1620cef4ad656fde0c4904.jpg", white: "https://i1.rozetka.ua/goods/1835401/13495890_images_1835401318.jpg", brown: "http://braer.ru/pictures/images/tile/landhouse/everest_1.jpg"}},
      {href: "http://s.petrovich.ru/images/38256/original.jpg", title: "Петр", price: 8000, sale: 5000, colors:{beige: "http://s.petrovich.ru/images/38256/original.jpg", black: "http://www.vibor-group.com/cache/thumbnails/a43383e14b1620cef4ad656fde0c4904.jpg", white: "https://i1.rozetka.ua/goods/1835401/13495890_images_1835401318.jpg", brown: "http://braer.ru/pictures/images/tile/landhouse/everest_1.jpg"}},
      {href: "http://s.petrovich.ru/images/38256/original.jpg", title: "Сарделька", price: 6500, sale: 4500, colors:{beige: "http://s.petrovich.ru/images/38256/original.jpg", black: "http://www.vibor-group.com/cache/thumbnails/a43383e14b1620cef4ad656fde0c4904.jpg", white: "https://i1.rozetka.ua/goods/1835401/13495890_images_1835401318.jpg", brown: "http://braer.ru/pictures/images/tile/landhouse/everest_1.jpg"}},
      {href: "http://s.petrovich.ru/images/38256/original.jpg", title: "Ирис", price: 11000, sale: 4000, colors:{beige: "http://s.petrovich.ru/images/38256/original.jpg", black: "http://www.vibor-group.com/cache/thumbnails/a43383e14b1620cef4ad656fde0c4904.jpg", white: "https://i1.rozetka.ua/goods/1835401/13495890_images_1835401318.jpg", brown: "http://braer.ru/pictures/images/tile/landhouse/everest_1.jpg"}},
      {href: "http://s.petrovich.ru/images/38256/original.jpg", title: "Пастила", price: 23000, sale: 17990, colors:{beige: "http://s.petrovich.ru/images/38256/original.jpg", black: "http://www.vibor-group.com/cache/thumbnails/a43383e14b1620cef4ad656fde0c4904.jpg", white: "https://i1.rozetka.ua/goods/1835401/13495890_images_1835401318.jpg", brown: "http://braer.ru/pictures/images/tile/landhouse/everest_1.jpg"}},
      {href: "http://s.petrovich.ru/images/38256/original.jpg", title: "Крендель", price: 6000, sale: 5000, colors:{beige: "http://s.petrovich.ru/images/38256/original.jpg", black: "http://www.vibor-group.com/cache/thumbnails/a43383e14b1620cef4ad656fde0c4904.jpg", white: "https://i1.rozetka.ua/goods/1835401/13495890_images_1835401318.jpg", brown: "http://braer.ru/pictures/images/tile/landhouse/everest_1.jpg"}},
      {href: "http://s.petrovich.ru/images/38256/original.jpg", title: "Султан Сулейман ...", price: 8000, sale: 7000, colors:{beige: "http://s.petrovich.ru/images/38256/original.jpg", black: "http://www.vibor-group.com/cache/thumbnails/a43383e14b1620cef4ad656fde0c4904.jpg", white: "https://i1.rozetka.ua/goods/1835401/13495890_images_1835401318.jpg", brown: "http://braer.ru/pictures/images/tile/landhouse/everest_1.jpg"}},
      {href: "http://s.petrovich.ru/images/38256/original.jpg", title: "Баратеон", price: 3600, sale: 2200, colors:{beige: "http://s.petrovich.ru/images/38256/original.jpg", black: "http://www.vibor-group.com/cache/thumbnails/a43383e14b1620cef4ad656fde0c4904.jpg", white: "https://i1.rozetka.ua/goods/1835401/13495890_images_1835401318.jpg", brown: "http://braer.ru/pictures/images/tile/landhouse/everest_1.jpg"}},
      {href: "http://s.petrovich.ru/images/38256/original.jpg", title: "Данила", price: 5200, sale: 4000, colors:{beige: "http://s.petrovich.ru/images/38256/original.jpg", black: "http://www.vibor-group.com/cache/thumbnails/a43383e14b1620cef4ad656fde0c4904.jpg", white: "https://i1.rozetka.ua/goods/1835401/13495890_images_1835401318.jpg", brown: "http://braer.ru/pictures/images/tile/landhouse/everest_1.jpg"}},
      {href: "http://s.petrovich.ru/images/38256/original.jpg", title: "Никита", price: 9000, sale: 6000, colors:{beige: "http://s.petrovich.ru/images/38256/original.jpg", black: "http://www.vibor-group.com/cache/thumbnails/a43383e14b1620cef4ad656fde0c4904.jpg", white: "https://i1.rozetka.ua/goods/1835401/13495890_images_1835401318.jpg", brown: "http://braer.ru/pictures/images/tile/landhouse/everest_1.jpg"}},
      {href: "http://s.petrovich.ru/images/38256/original.jpg", title: "Алена", price: 2000, sale: 1200, colors:{beige: "http://s.petrovich.ru/images/38256/original.jpg", black: "http://www.vibor-group.com/cache/thumbnails/a43383e14b1620cef4ad656fde0c4904.jpg", white: "https://i1.rozetka.ua/goods/1835401/13495890_images_1835401318.jpg", brown: "http://braer.ru/pictures/images/tile/landhouse/everest_1.jpg"}},
      {href: "http://s.petrovich.ru/images/38256/original.jpg", title: "Маша", price: 3700, sale: 3000, colors:{beige: "http://s.petrovich.ru/images/38256/original.jpg", black: "http://www.vibor-group.com/cache/thumbnails/a43383e14b1620cef4ad656fde0c4904.jpg", white: "https://i1.rozetka.ua/goods/1835401/13495890_images_1835401318.jpg", brown: "http://braer.ru/pictures/images/tile/landhouse/everest_1.jpg"}},
      {href: "http://s.petrovich.ru/images/38256/original.jpg", title: "Соня", price: 6600, sale: 4200, colors:{beige: "http://s.petrovich.ru/images/38256/original.jpg", black: "http://www.vibor-group.com/cache/thumbnails/a43383e14b1620cef4ad656fde0c4904.jpg", white: "https://i1.rozetka.ua/goods/1835401/13495890_images_1835401318.jpg", brown: "http://braer.ru/pictures/images/tile/landhouse/everest_1.jpg"}},
      {href: "http://s.petrovich.ru/images/38256/original.jpg", title: "Евклида сын", price: 3000, sale: 2250, colors:{beige: "http://s.petrovich.ru/images/38256/original.jpg", black: "http://www.vibor-group.com/cache/thumbnails/a43383e14b1620cef4ad656fde0c4904.jpg", white: "https://i1.rozetka.ua/goods/1835401/13495890_images_1835401318.jpg", brown: "http://braer.ru/pictures/images/tile/landhouse/everest_1.jpg"}}
  ];
  private pavingSlabs:Product[] = [
    {href: "https://www.bashfasad.ru/upload/iblock/8bf/8bf1f4970f06317667b8a19e5b772016.jpg", title:"Филипп", price: 3000, sale: 2000, colors:{beige:"https://www.bashfasad.ru/upload/iblock/8bf/8bf1f4970f06317667b8a19e5b772016.jpg", black:"https://tn-hauberk.ru/upload/iblock/2b5/2b5fed6cdf0071ce5223f5947b20e7ad.jpg", white:"https://baucenter.ru/preview/r/612x612/c/612x612/upload/pictures/25/250300057-0.jpg", brown:"http://braer.ru/pictures/images/tile/domino/safari_3.jpg"}},
    {href: "https://www.bashfasad.ru/upload/iblock/8bf/8bf1f4970f06317667b8a19e5b772016.jpg", title:"Филипп", price: 3000, sale: 2000, colors:{beige:"https://www.bashfasad.ru/upload/iblock/8bf/8bf1f4970f06317667b8a19e5b772016.jpg", black:"https://tn-hauberk.ru/upload/iblock/2b5/2b5fed6cdf0071ce5223f5947b20e7ad.jpg", white:"https://baucenter.ru/preview/r/612x612/c/612x612/upload/pictures/25/250300057-0.jpg", brown:"http://braer.ru/pictures/images/tile/domino/safari_3.jpg"}},
    {href: "https://www.bashfasad.ru/upload/iblock/8bf/8bf1f4970f06317667b8a19e5b772016.jpg", title:"Филипп", price: 3000, sale: 2000, colors:{beige:"https://www.bashfasad.ru/upload/iblock/8bf/8bf1f4970f06317667b8a19e5b772016.jpg", black:"https://tn-hauberk.ru/upload/iblock/2b5/2b5fed6cdf0071ce5223f5947b20e7ad.jpg", white:"https://baucenter.ru/preview/r/612x612/c/612x612/upload/pictures/25/250300057-0.jpg", brown:"http://braer.ru/pictures/images/tile/domino/safari_3.jpg"}},
    {href: "https://www.bashfasad.ru/upload/iblock/8bf/8bf1f4970f06317667b8a19e5b772016.jpg", title:"Филипп", price: 3000, sale: 2000, colors:{beige:"https://www.bashfasad.ru/upload/iblock/8bf/8bf1f4970f06317667b8a19e5b772016.jpg", black:"https://tn-hauberk.ru/upload/iblock/2b5/2b5fed6cdf0071ce5223f5947b20e7ad.jpg", white:"https://baucenter.ru/preview/r/612x612/c/612x612/upload/pictures/25/250300057-0.jpg", brown:"http://braer.ru/pictures/images/tile/domino/safari_3.jpg"}},
    {href: "https://www.bashfasad.ru/upload/iblock/8bf/8bf1f4970f06317667b8a19e5b772016.jpg", title:"Филипп", price: 3000, sale: 2000, colors:{beige:"https://www.bashfasad.ru/upload/iblock/8bf/8bf1f4970f06317667b8a19e5b772016.jpg", black:"https://tn-hauberk.ru/upload/iblock/2b5/2b5fed6cdf0071ce5223f5947b20e7ad.jpg", white:"https://baucenter.ru/preview/r/612x612/c/612x612/upload/pictures/25/250300057-0.jpg", brown:"http://braer.ru/pictures/images/tile/domino/safari_3.jpg"}},
    {href: "https://www.bashfasad.ru/upload/iblock/8bf/8bf1f4970f06317667b8a19e5b772016.jpg", title:"Филипп", price: 3000, sale: 2000, colors:{beige:"https://www.bashfasad.ru/upload/iblock/8bf/8bf1f4970f06317667b8a19e5b772016.jpg", black:"https://tn-hauberk.ru/upload/iblock/2b5/2b5fed6cdf0071ce5223f5947b20e7ad.jpg", white:"https://baucenter.ru/preview/r/612x612/c/612x612/upload/pictures/25/250300057-0.jpg", brown:"http://braer.ru/pictures/images/tile/domino/safari_3.jpg"}},
    {href: "https://www.bashfasad.ru/upload/iblock/8bf/8bf1f4970f06317667b8a19e5b772016.jpg", title:"Филипп", price: 3000, sale: 2000, colors:{beige:"https://www.bashfasad.ru/upload/iblock/8bf/8bf1f4970f06317667b8a19e5b772016.jpg", black:"https://tn-hauberk.ru/upload/iblock/2b5/2b5fed6cdf0071ce5223f5947b20e7ad.jpg", white:"https://baucenter.ru/preview/r/612x612/c/612x612/upload/pictures/25/250300057-0.jpg", brown:"http://braer.ru/pictures/images/tile/domino/safari_3.jpg"}},
    {href: "https://www.bashfasad.ru/upload/iblock/8bf/8bf1f4970f06317667b8a19e5b772016.jpg", title:"Филипп", price: 3000, sale: 2000, colors:{beige:"https://www.bashfasad.ru/upload/iblock/8bf/8bf1f4970f06317667b8a19e5b772016.jpg", black:"https://tn-hauberk.ru/upload/iblock/2b5/2b5fed6cdf0071ce5223f5947b20e7ad.jpg", white:"https://baucenter.ru/preview/r/612x612/c/612x612/upload/pictures/25/250300057-0.jpg", brown:"http://braer.ru/pictures/images/tile/domino/safari_3.jpg"}},
    {href: "https://www.bashfasad.ru/upload/iblock/8bf/8bf1f4970f06317667b8a19e5b772016.jpg", title:"Филипп", price: 3000, sale: 2000, colors:{beige:"https://www.bashfasad.ru/upload/iblock/8bf/8bf1f4970f06317667b8a19e5b772016.jpg", black:"https://tn-hauberk.ru/upload/iblock/2b5/2b5fed6cdf0071ce5223f5947b20e7ad.jpg", white:"https://baucenter.ru/preview/r/612x612/c/612x612/upload/pictures/25/250300057-0.jpg", brown:"http://braer.ru/pictures/images/tile/domino/safari_3.jpg"}},
    {href: "https://www.bashfasad.ru/upload/iblock/8bf/8bf1f4970f06317667b8a19e5b772016.jpg", title:"Филипп", price: 3000, sale: 2000, colors:{beige:"https://www.bashfasad.ru/upload/iblock/8bf/8bf1f4970f06317667b8a19e5b772016.jpg", black:"https://tn-hauberk.ru/upload/iblock/2b5/2b5fed6cdf0071ce5223f5947b20e7ad.jpg", white:"https://baucenter.ru/preview/r/612x612/c/612x612/upload/pictures/25/250300057-0.jpg", brown:"http://braer.ru/pictures/images/tile/domino/safari_3.jpg"}},
    {href: "https://www.bashfasad.ru/upload/iblock/8bf/8bf1f4970f06317667b8a19e5b772016.jpg", title:"Филипп", price: 3000, sale: 2000, colors:{beige:"https://www.bashfasad.ru/upload/iblock/8bf/8bf1f4970f06317667b8a19e5b772016.jpg", black:"https://tn-hauberk.ru/upload/iblock/2b5/2b5fed6cdf0071ce5223f5947b20e7ad.jpg", white:"https://baucenter.ru/preview/r/612x612/c/612x612/upload/pictures/25/250300057-0.jpg", brown:"http://braer.ru/pictures/images/tile/domino/safari_3.jpg"}},
  ];
  private inDecoration:Product[] = [
    {href: "https://images.ua.prom.st/533999798_w640_h640_100_2591.jpg", title:"Кирюха", price: 5500, sale: 2000, colors:{white:"https://images.ua.prom.st/533999798_w640_h640_100_2591.jpg", black:"https://реконстрой.рф/assets/goods-images-rekonstroy/lode/Saturn-%D0%9E%D0%B1%D0%BB%D0%B8%D1%86%D0%BE%D0%B2%D0%BE%D1%87%D0%BD%D0%B0%D1%8F-%D0%BF%D0%BB%D0%B8%D1%82%D0%BA%D0%B0-%D1%81%D1%82%D0%B5%D0%BD%D0%B0-%D0%BC%D0%B0%D0%BB%D0%B0%D1%8F.jpg"}},
    {href: "https://images.ua.prom.st/533999798_w640_h640_100_2591.jpg", title:"Кирюха", price: 5500, sale: 2000, colors:{white:"https://images.ua.prom.st/533999798_w640_h640_100_2591.jpg", black:"https://реконстрой.рф/assets/goods-images-rekonstroy/lode/Saturn-%D0%9E%D0%B1%D0%BB%D0%B8%D1%86%D0%BE%D0%B2%D0%BE%D1%87%D0%BD%D0%B0%D1%8F-%D0%BF%D0%BB%D0%B8%D1%82%D0%BA%D0%B0-%D1%81%D1%82%D0%B5%D0%BD%D0%B0-%D0%BC%D0%B0%D0%BB%D0%B0%D1%8F.jpg"}},
    {href: "https://images.ua.prom.st/533999798_w640_h640_100_2591.jpg", title:"Кирюха", price: 5500, sale: 2000, colors:{white:"https://images.ua.prom.st/533999798_w640_h640_100_2591.jpg", black:"https://реконстрой.рф/assets/goods-images-rekonstroy/lode/Saturn-%D0%9E%D0%B1%D0%BB%D0%B8%D1%86%D0%BE%D0%B2%D0%BE%D1%87%D0%BD%D0%B0%D1%8F-%D0%BF%D0%BB%D0%B8%D1%82%D0%BA%D0%B0-%D1%81%D1%82%D0%B5%D0%BD%D0%B0-%D0%BC%D0%B0%D0%BB%D0%B0%D1%8F.jpg"}},
    {href: "https://images.ua.prom.st/533999798_w640_h640_100_2591.jpg", title:"Кирюха", price: 5500, sale: 2000, colors:{white:"https://images.ua.prom.st/533999798_w640_h640_100_2591.jpg", black:"https://реконстрой.рф/assets/goods-images-rekonstroy/lode/Saturn-%D0%9E%D0%B1%D0%BB%D0%B8%D1%86%D0%BE%D0%B2%D0%BE%D1%87%D0%BD%D0%B0%D1%8F-%D0%BF%D0%BB%D0%B8%D1%82%D0%BA%D0%B0-%D1%81%D1%82%D0%B5%D0%BD%D0%B0-%D0%BC%D0%B0%D0%BB%D0%B0%D1%8F.jpg"}},
    {href: "https://images.ua.prom.st/533999798_w640_h640_100_2591.jpg", title:"Кирюха", price: 5500, sale: 2000, colors:{white:"https://images.ua.prom.st/533999798_w640_h640_100_2591.jpg", black:"https://реконстрой.рф/assets/goods-images-rekonstroy/lode/Saturn-%D0%9E%D0%B1%D0%BB%D0%B8%D1%86%D0%BE%D0%B2%D0%BE%D1%87%D0%BD%D0%B0%D1%8F-%D0%BF%D0%BB%D0%B8%D1%82%D0%BA%D0%B0-%D1%81%D1%82%D0%B5%D0%BD%D0%B0-%D0%BC%D0%B0%D0%BB%D0%B0%D1%8F.jpg"}},
    {href: "https://images.ua.prom.st/533999798_w640_h640_100_2591.jpg", title:"Кирюха", price: 5500, sale: 2000, colors:{white:"https://images.ua.prom.st/533999798_w640_h640_100_2591.jpg", black:"https://реконстрой.рф/assets/goods-images-rekonstroy/lode/Saturn-%D0%9E%D0%B1%D0%BB%D0%B8%D1%86%D0%BE%D0%B2%D0%BE%D1%87%D0%BD%D0%B0%D1%8F-%D0%BF%D0%BB%D0%B8%D1%82%D0%BA%D0%B0-%D1%81%D1%82%D0%B5%D0%BD%D0%B0-%D0%BC%D0%B0%D0%BB%D0%B0%D1%8F.jpg"}},
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
    for (let i = 0; i < this.facade.length; i++) {
        const element = this.facade[i];
        this.all.push(element);
    }
    for (let i = 0; i < this.inDecoration.length; i++) {
        const element = this.inDecoration[i];
        this.all.push(element);
    }
    for (let i = 0; i < this.pavingSlabs.length; i++) {
        const element = this.pavingSlabs[i];
        this.all.push(element);
    }
    // this.all.reverse();
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