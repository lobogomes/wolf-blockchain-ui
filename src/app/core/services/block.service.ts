import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BlockService {
  private http = inject(HttpClient);

  getLastBlock() {
    return {
      hash: '1245453456',
      previousHash: '120393940',
      timestamp: new Date(),
    };
  }
}
