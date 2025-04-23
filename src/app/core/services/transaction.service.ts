import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  http = inject(HttpClient);

  gettransactions() {
    return {
      data: [
        {
          hash: '0x1234...',
          from: '0xabc...',
          to: '0xdef...',
          amount: 2,
          date: '2021-04-01',
        },
        {
          hash: '0x5678...',
          from: '0xghi...',
          to: '0xjkl...',
          amount: 5,
          date: '2021-04-02',
        },
        {
          hash: '0x9abc...',
          from: '0xmn0...',
          to: '0xpqr...',
          amount: 1,
          date: '2021-04-03',
        },
      ],
      total: 3,
      todayCount: 3,
    };
  }
}
