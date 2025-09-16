import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRippleModule } from '@angular/material/core';
import { ExactActiveDirective } from '../directives/exact-active.directive';

@Component({
  selector: 'app-menuitem',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLinkActive, RouterLink, ExactActiveDirective],
  templateUrl: './app-menuitem.component.html'
})
export class AppMenuitemComponent {
    @Input() item: any;

    @Input() index!: number;

    @Input() root = false;

    active = false;
}
