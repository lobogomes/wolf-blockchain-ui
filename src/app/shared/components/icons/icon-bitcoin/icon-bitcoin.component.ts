import {Component, input} from '@angular/core';

@Component({
  selector: 'app-icon-bitcoin',
  imports: [],
  templateUrl: './icon-bitcoin.component.html',
  styleUrl: './icon-bitcoin.component.css'
})
export class IconBitcoinComponent {

  color = input('black')
  size = input('24px')
}
