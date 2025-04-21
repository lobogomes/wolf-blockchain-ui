import { Component } from '@angular/core';
import {ButtonDirective, ButtonIcon} from "primeng/button";
import {NgForOf} from "@angular/common";
import {ColorPaletteComponent} from '@pages/theme-playground/color-palette/color-palette.component';
import {IconBitcoinComponent} from '@shared-components/icons/icon-bitcoin/icon-bitcoin.component';
import {IconEtheriumComponent} from '@shared-components/icons/icon-etherium/icon-etherium.component';

@Component({
  selector: 'app-theme-playground',
  imports: [
    ButtonDirective,
    ColorPaletteComponent,
    IconBitcoinComponent,
    IconEtheriumComponent,
    ButtonIcon
  ],
  templateUrl: './theme-playground.component.html',
  styleUrl: './theme-playground.component.css'
})
export class ThemePlaygroundComponent {

  goBack() {
    window.history.back();
  }
}
