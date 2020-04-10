import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuItems: MenuItem[];
  menuStyle: any = {
    
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initializeMenuItems();
  }

  initializeMenuItems() {
    this.menuItems = [
      {
        label: 'HOME',
        icon: 'pi pi-home',
        routerLink: '/home',
        expanded: false
      },
      {
        label: 'LIST',
        icon: 'pi pi-list',
        routerLink: '/home',
        items: [
          {
            label: 'LIKES',
            icon: 'pi pi-thumbs-up'
          },
          {
            label: 'REVENUE',
            icon: 'pi pi-money-bill'
          },
          {
            label: 'TOP100'
          }
        ]
      }
  ];
  }
}
