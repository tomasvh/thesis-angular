import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutMessage: string = 'So here is a section about me, my self, and everything in between'
  
  constructor() { }

  ngOnInit(): void {
  }

}
