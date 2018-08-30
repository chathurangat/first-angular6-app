import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe1',
      'desc 1',
      'https://bluewater.co.uk/sites/bluewater/files/styles/image_spotlight_large/public/images/spotlights/burger-cropped.jpg'),
    new Recipe('Test Recipe2',
      'desc 2',
      'https://cdn.images.express.co.uk/img/dynamic/14/590x/McDonald-s-burger-876121.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
