import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
  constructor(public router: Router) { }
  ngOnInit(): void {
    if (this.router.url === '/pages') {
      this.router.navigate(['/users/list-of-users']);
    }
  }
}
