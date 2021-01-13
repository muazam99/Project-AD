import { Component } from '@angular/core';

import { Food } from '../../app/pages/food-detail/Food.model';
import { FoodDisplayService } from '../food-display.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 foods: Food [];

  constructor(private foodService : FoodDisplayService) {}

  ngOnInit(){
    this.foods = this.foodService.getAllFood();
  }
}
