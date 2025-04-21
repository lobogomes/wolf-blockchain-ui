import { Component } from '@angular/core';
import { ToolbarComponent } from '@shared-components/layouts/toolbar/toolbar.component';
import { SidebarComponent } from '@shared-components/layouts/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [ToolbarComponent, SidebarComponent, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  showSidebar: boolean = false;

  toggleSidebar(value: boolean) {
    this.showSidebar = value;
  }
}
