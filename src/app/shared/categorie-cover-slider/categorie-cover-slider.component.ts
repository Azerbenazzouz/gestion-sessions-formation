import { Component } from '@angular/core';

@Component({
  selector: 'app-categorie-cover-slider',
  templateUrl: './categorie-cover-slider.component.html',
  styleUrls: ['./categorie-cover-slider.component.css']
})
export class CategorieCoverSliderComponent {
    Images : string[] = [
      "https://static.photocdn.pt/images/articles/2017/11/29/articles/2017_8/iStock-641093712-min.jpg",
      "https://static.photocdn.pt/images/articles/2017/11/29/articles/2017_8/iStock-641093712-min.jpg",
      "https://th.bing.com/th/id/OIP.ACN-Xn2XW0UweoivpVb5rQHaCv?rs=1&pid=ImgDetMain"      
    ];
    constructor() { } 

    ngOnInit(): void {
      
    }
}
