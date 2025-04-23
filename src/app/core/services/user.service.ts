import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);

  getAuthenticatedUser() {
    return {
      name: 'Amanda Lobo',
      email: 'amanda@gmail.com',
      avatar:
        'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
      balance: '50',
      historic: [
        {
          date: '2021-01-01',
          amount: '50 WOLF',
          type: 'deposit',
        },
        {
          date: '2021-01-02',
          amount: '10 WOLF',
          type: 'withdraw',
        },
        {
          date: '2021-01-03',
          amount: '50 WOLF',
          type: 'withdraw',
        },
      ],
    };
  }
}
