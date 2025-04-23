import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-wolf',
  imports: [],
  templateUrl: './icon-wolf.component.html',
  styleUrl: './icon-wolf.component.css',
})
export class IconWolfComponent {
  @Input() color = '#8f0c63';
  @Input() size = '24px';
}
