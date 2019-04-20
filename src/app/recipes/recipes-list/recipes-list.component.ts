import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipe : Recipe[]=[
    new Recipe("A Test Recipe", "this is simply a test","https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg"),
    new Recipe("A Test Recipe", "this is simply a test","https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg"),
    new Recipe("A Test Recipe", "this is simply a test","https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
