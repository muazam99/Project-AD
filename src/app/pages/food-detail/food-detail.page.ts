import { Component, OnInit } from '@angular/core';
import { Food } from './Food.model'


@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.page.html',
  styleUrls: ['./food-detail.page.scss'],
})
export class FoodDetailPage implements OnInit {

  food: Food[] = [];
  constructor() { }

  ngOnInit() {
  }

}
