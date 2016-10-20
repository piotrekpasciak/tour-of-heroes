import { Component, OnInit}     from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <nav>
        <a routerLink="/heroes">Heroes</a>
        <a routerLink="/dashboard">Dashboard</a>
      </nav>
      <router-outlet></router-outlet>
      `
})

export class AppComponent implements OnInit {
    title = 'Tour of Heroes';

    contstructor() { }

    ngOnInit(): void {}
}