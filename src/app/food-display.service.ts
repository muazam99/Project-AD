import { Injectable } from '@angular/core';
import { Food } from './pages/food-detail/Food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodDisplayService {

  private foods: Food[] =[
    {
      name:'Kek Lapis Sarawak',
      price:'RM7.00',
      imageURL:'https://images.food52.com/C18MUIyFXgXHyI-SfbqNDlWU1io=/1200x900/103b54ba-45fd-47d5-84f1-d9e3ed1245a8--2019-1022_kek-lapis-sarawak_3x2_rocky-luten_028.jpg'
  },
  {
    name:'Spicy Salted Egg',
    price:'RM6.50',
    imageURL:'https://cf.shopee.com.my/file/ba4aec95c2a2df721480e686ebc64c7a'
  }
];


  

  constructor() { }


  getAllFood(){
    return [...this.foods];
  }

  



}
