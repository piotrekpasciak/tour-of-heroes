import { Component, OnInit}     from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <nav>
        <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      </nav>

      <router-outlet></router-outlet>
      `,
    styleUrls: [ 'app.component.css' ]
})

export class AppComponent implements OnInit {
    title = 'Tour of Heroes';

    contstructor() { }

    ngOnInit(): void {}
}