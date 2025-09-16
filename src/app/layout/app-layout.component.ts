import { Component } from '@angular/core';
import { AppSidebarComponent } from './app-sidebar.component';
import { AppTopbarComponent } from './app-topbar.component';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, NgClass,AppSidebarComponent, AppTopbarComponent],
  templateUrl: './app-layout.component.html',
})
export class AppLayoutComponent {

}
