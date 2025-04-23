import { Component } from '@angular/core';
import { Drawer } from 'primeng/drawer';
import { Ripple } from 'primeng/ripple';
import { StyleClass } from 'primeng/styleclass';

@Component({
  selector: 'app-sidebar',
  imports: [Drawer, Ripple, StyleClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  visible = false;
}
