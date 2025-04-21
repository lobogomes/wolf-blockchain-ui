import {AfterViewInit, Component, ElementRef, HostListener, inject, QueryList, viewChildren} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {HomeToolbarComponent} from '@pages/home/home-toolbar/home-toolbar.component';
import {AnimateOnScroll} from 'primeng/animateonscroll';
import {StarsBackgroundComponent} from '@shared-components/stars-background/stars-background.component';
import {NgForOf} from '@angular/common';
import {ButtonDirective} from 'primeng/button';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    HomeToolbarComponent,
    AnimateOnScroll,
    NgForOf,
    ButtonDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  router = inject(Router);

  heroTitle = 'imagine the future';
  heroSubtitle = 'Discover Wolf Blockchain';

  featureCards = [
    {
      icon: 'lock-2',
      title: 'Security',
      description: 'Wolf Blockchain ensures high-level security with cutting-edge cryptography.'
    },
    {
      icon: 'globe',
      title: 'Global Access',
      description: 'Open, borderless, and accessible financial systems powered by blockchain technology.'
    },
    {
      icon: 'bar-graph-4',
      title: 'Scalability',
      description: 'Designed to handle millions of transactions efficiently and sustainably.'
    }
  ];

  statsCards = [
    {
      value: '850K+',
      title: 'Wallets Created',
      description: 'Growing daily across the decentralized economy.'
    },
    {
      value: '$2.5M+',
      title: 'Total Transactions',
      description: 'Processed securely through our blockchain network.'
    },
    {
      value: '150+',
      title: 'Global Partners',
      description: 'Collaborating to expand the decentralized future.'
    }
  ];

  footTitle = 'Join the Revolution';
  footSubtitle = 'Start your journey with Wolf Blockchain and be part of the decentralized transformation.';

  navigateTo(path: string) {
    this.router.navigate([path]).then();
  }

}
