import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, viewChild} from '@angular/core';

@Component({
  selector: 'app-stars-background',
  imports: [],
  templateUrl: './stars-background.component.html',
  styleUrl: './stars-background.component.css'
})
export class StarsBackgroundComponent implements AfterViewInit {
  @ViewChild('starsContainer') starsContainer!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    console.log('ola');
    const stars = 400;
    const r = 400;
    for (let i = 0; i < stars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const s = 0.2 + Math.random();
      const curR = r + (Math.random() * 300);

      star.style.transformOrigin = `0 0 ${curR}px`;
      star.style.transform = `translate3d(0,0,-${curR}px) rotateY(${Math.random() * 360}deg) rotateX(${Math.random() * -50}deg) scale(${s},${s})`;

      this.starsContainer.nativeElement.appendChild(star);
    }
  }
}
