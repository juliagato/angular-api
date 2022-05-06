import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Repo {
  // deve ter nome identico a variavel da api pra fazer a associação automaticamente
  id: number;
  full_name: string;
  html_url: string;
}

@Injectable()
export class GithubService {
  // api retorna um array
  repos: Array<Repo> = [];

  constructor(private http: HttpClient) {}
  update() {
    // this.http calls the module and it has every type of http requests
    this.http
      .get<Array<Repo>>('https://api.github.com/users/juliadelua/repos')
      .subscribe((data) => {
        this.repos = data;
      });
  }
}

// change the name to github user, this returns data information abt your github account
