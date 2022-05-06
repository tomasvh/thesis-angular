import { Component, OnInit } from '@angular/core';
import { BlogService } from './helpers/blog.service'
import { IBlog } from './helpers/blog'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  pageTitle: string = 'Welcome to the Blog page'
  sub!: Subscription
  blogs: IBlog[] = []
  errorMessage: string = ''


  constructor(private blogService: BlogService) {

   }

  ngOnInit(): void {
    this.sub = this.blogService.getBlogs().subscribe({
      next: blogs => {
        this.blogs = blogs
      },
      error: err => this.errorMessage = err
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
