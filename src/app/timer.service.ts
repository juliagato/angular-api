import { Injectable } from '@angular/core';
import { BitcoinService } from './bitcoin.service';

@Injectable()
export class TimerService {
  private timer: any;

  constructor(public bitcoinService: BitcoinService) {}

  set() {
    this.timer = setInterval(() => {
      this.bitcoinService.update();
    }, 3000);
  }
}
