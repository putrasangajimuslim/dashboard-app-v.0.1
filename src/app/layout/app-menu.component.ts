import { Component } from '@angular/core';
import { AppMenuitemComponent } from './app-menuitem.component';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, NgFor, AppMenuitemComponent],
  templateUrl: './app-menu.component.html',
})
export class AppMenuComponent {
  model: any[] = [];

  ngOnInit() {
     this.model = [
       { label: 'Dashboard', routerLink: '/application' },
       { label: 'Employee', routerLink: '/application/employee' },
     ];
  }
}
