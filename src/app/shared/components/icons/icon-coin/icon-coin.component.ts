import {Component, input} from '@angular/core';

@Component({
  selector: 'app-icon-coin',
  imports: [],
  templateUrl: './icon-coin.component.html',
  styleUrl: './icon-coin.component.css'
})
export class IconCoinComponent {
  color = input('black')
  size = input('24px')
}
