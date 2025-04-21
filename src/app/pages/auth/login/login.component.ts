import { Component, inject } from '@angular/core';
import { ButtonDirective } from 'primeng/button';
import { Router } from '@angular/router';
import { InputText } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
  selector: 'app-login',
  imports: [ButtonDirective, InputText, FloatLabel],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  router = inject(Router);

  navigateTo(path: string) {
    console.log(path);
    this.router.navigate([path]).then(() => console.log('navigate to', path));
  }
}
