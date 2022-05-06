import { Component, OnInit, Input } from '@angular/core';
import { IBlog } from '../helpers/blog'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  @Input() id = 0;
  @Input() title = ''
  @Input() date = ''
  @Input() image = ''
  @Input() content: Array<string> = []
  
  blogDate!: Date;


  constructor() { }

  ngOnInit(): void {
    this.blogDate = new Date(this.date)
  }

}
