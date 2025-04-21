import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-color-palette',
  imports: [
    NgForOf
  ],
  templateUrl: './color-palette.component.html',
  styleUrl: './color-palette.component.css'
})
export class ColorPaletteComponent {
  colors = [
    { name: 'Primary', variable: 'var(--primary)' },
    { name: 'Primary Hover', variable: 'var(--primary-hover)' },
    { name: 'Primary Active', variable: 'var(--primary-active)' },

    { name: 'Success', variable: 'var(--success)' },
    { name: 'Success Hover', variable: 'var(--success-hover)' },
    { name: 'Success Active', variable: 'var(--success-active)' },

    { name: 'Warn', variable: 'var(--warn)' },
    { name: 'Warn Hover', variable: 'var(--warn-hover)' },
    { name: 'Warn Active', variable: 'var(--warn-active)' },

    { name: 'Danger', variable: 'var(--danger)' },
    { name: 'Danger Hover', variable: 'var(--danger-hover)' },
    { name: 'Danger Active', variable: 'var(--danger-active)' },

    { name: 'Info', variable: 'var(--info)' },
    { name: 'Info Hover', variable: 'var(--info-hover)' },
    { name: 'Info Active', variable: 'var(--info-active)' },

    { name: 'Help', variable: 'var(--help)' },
    { name: 'Help Hover', variable: 'var(--help-hover)' },
    { name: 'Help Active', variable: 'var(--help-active)' },

    { name: 'Neutral', variable: 'var(--neutral)' },
    { name: 'Neutral Hover', variable: 'var(--neutral-hover)' },
    { name: 'Neutral Active', variable: 'var(--neutral-active)' }
  ];
}
