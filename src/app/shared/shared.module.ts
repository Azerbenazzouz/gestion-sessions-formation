import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CategorieCoverSliderComponent } from './categorie-cover-slider/categorie-cover-slider.component';
import { CategorieFormationsComponent } from './categorie-formations/categorie-formations.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    AccueilComponent,
    CategorieCoverSliderComponent,
    CategorieFormationsComponent,
  ],
  imports: [
    CommonModule,
    
    SharedRoutingModule
  ]
})
export class SharedModule { }
