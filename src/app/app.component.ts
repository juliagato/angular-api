import { Component, VERSION } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'HttpClient Demo';

  constructor(public gitHubService: GithubService) {
    //gitHubService => atributo
    // GithubService => classe importada
  }

  ngOnInit() {
    this.gitHubService.update();
    // chama esse método assim q o componente do app carregar
  }
}
