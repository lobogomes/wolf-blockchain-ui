import {Component, input} from '@angular/core';

@Component({
  selector: 'app-icon-etherium',
  imports: [],
  templateUrl: './icon-etherium.component.html',
  styleUrl: './icon-etherium.component.css'
})
export class IconEtheriumComponent {

  color = input('black')
  size = input('24px')
}
