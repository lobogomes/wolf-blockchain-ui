import { Component, viewChild } from '@angular/core';
import { ToolbarComponent } from '@shared-components/layouts/toolbar/toolbar.component';
import { SidebarComponent } from '@shared-components/layouts/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [ToolbarComponent, SidebarComponent, RouterOutlet, SidebarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  sidebar = viewChild(SidebarComponent);
  showSidebar: boolean = false;

  toggleSidebar(value: boolean) {
    this.showSidebar = value;
    const sidebar = this.sidebar();
    if (sidebar) sidebar.visible = value;
  }
}
