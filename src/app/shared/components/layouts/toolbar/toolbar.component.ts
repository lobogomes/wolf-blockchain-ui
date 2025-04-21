import { Component, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})
export class ToolbarComponent {
  showSidebar = false;
  toggleSidebar = output<boolean>();

  onClickSidebarIcon() {
    this.showSidebar = !this.showSidebar;
    this.toggleSidebar.emit(this.showSidebar);
  }
}
