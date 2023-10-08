import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesListRoutingModule } from './categories-list-routing.module';
import { CategoriesListComponent } from './categories-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { categoriesService } from '../../services/categories.service';

@NgModule({
  declarations: [
    CategoriesListComponent,
    CategoriesComponent,
    SubcategoriesComponent,
  ],
  imports: [CommonModule, CategoriesListRoutingModule],
  exports: [CategoriesListComponent, CategoriesComponent],
})
export class CategoriesListModule {}
