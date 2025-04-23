import { Component, output } from '@angular/core';
import { Toolbar } from 'primeng/toolbar';
import { Avatar } from 'primeng/avatar';
import { ButtonIcon } from 'primeng/button';

@Component({
  selector: 'app-toolbar',
  imports: [Toolbar, Avatar, ButtonIcon],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})
export class ToolbarComponent {
  toggleSidebar = output<boolean>();

  onClickSidebarIcon() {
    this.toggleSidebar.emit(true);
  }
}
