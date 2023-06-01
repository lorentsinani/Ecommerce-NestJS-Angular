import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../../core/services/base/base.service';
import { CategoryService } from '../../../core/services/category/category.service';
import { Category } from '../../../core/interfaces/category.interface';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {
  categories: Category[] = [];
  category: Category;

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService
      .getAllCategories()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
      });
  }

  getCategoryById(id: number) {
    this.categoryService.getCategoryById(id).subscribe((category: Category) => {
      this.category = category;
    });
  }

  updateCategory(id: number, data: Partial<Category>) {
    // use reactive forms to validate the data
    this.categoryService
      .updateCategory(id, data)
      .subscribe((updatedCategory: Category) => {
        this.categories = this.categories.map(category =>
          category.id === id ? updatedCategory : category
        );
      });
  }

  deleteCategory(id: number) {
    this.categoryService
      .deleteCategory(id)
      .subscribe((deletedCategory: Category) => {
        // do something with the deletedCategory
        this.categories = this.categories.filter(
          category => category.id !== deletedCategory.id
        );
      });
  }
}
