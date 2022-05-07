import { Component } from '@angular/core';
import { BitcoinService } from './bitcoin.service';
import { GithubService } from './github.service';
import { TimerService } from './timer.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'HttpClient Demo';

  constructor(
    public gitHubService: GithubService,
    public bitcoinService: BitcoinService,
    public timer: TimerService
  ) {
    //gitHubService => atributo
    // GithubService => classe importada
  }

  ngOnInit() {
    // chama esse método assim q o componente do app carregar
    this.bitcoinService.update();
    this.timer.set();
  }

  /*updateBitcoinRates() {
    this.bitcoinService.update();
  }*/
}
