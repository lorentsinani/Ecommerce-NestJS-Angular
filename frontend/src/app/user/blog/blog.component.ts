import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
blogs = [{ title: 'Title', content: 'Some information', date: 'Some date' },
  { title: 'Title', content: 'Some information', date: 'Some date' }]

  categories = ['Laptops', 'Phones', 'Computers']
}