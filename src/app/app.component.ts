import { Component } from '@angular/core';
import { BlogDataService } from './blog-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = '5 INF C - Lezione pomeridiana 11/12/20';
  posts = []

  constructor(blogDataService: BlogDataService) {
    blogDataService.getPosts().subscribe(
      (data: any) => this.posts = data
    );
  }

}
