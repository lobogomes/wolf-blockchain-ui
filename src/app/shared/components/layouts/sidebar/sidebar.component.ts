import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, Sidebar],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  showSidebar = input(false);

  constructor() {}
}
