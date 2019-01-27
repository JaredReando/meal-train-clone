import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navItems: string[] = ['Learn the basics', 'Get started', 'Help', 'Sign Up', 'Sign In'];


}
