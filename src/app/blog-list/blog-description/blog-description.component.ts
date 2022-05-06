import { Component, OnInit, Input, } from '@angular/core';

@Component({
  selector: 'app-blog-description',
  templateUrl: './blog-description.component.html',
  styleUrls: ['./blog-description.component.css']
})
export class BlogDescriptionComponent implements OnInit {

  @Input() descriptions: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
