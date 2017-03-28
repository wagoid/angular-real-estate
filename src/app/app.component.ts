/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild
} from '@angular/core'
import { AppState } from './app.service'

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  template: `
    <md-sidenav-container>
      <md-sidenav #sidenav mode="over">
        <button md-button class="toggle" (click)="sidenav.toggle()">
          <md-icon>close</md-icon>
        </button>
        <md-list (click)="handleNavListClick($event)">
          <md-list-item>
            <a [routerLink]=" ['./'] "
              routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
              Index
            </a>
          </md-list-item>
          <md-list-item>
            <a [routerLink]=" ['./home'] "
              routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
              Home
            </a>
          </md-list-item>
          <md-list-item>
            <a [routerLink]=" ['./detail'] "
              routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
              Detail
            </a>
          </md-list-item>
          <md-list-item>
            <a [routerLink]=" ['./barrel'] "
              routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
              Barrel
            </a>
          </md-list-item>
          <md-list-item>
            <a [routerLink]=" ['./about'] "
              routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
              About
            </a>
          </md-list-item>
        </md-list>
      </md-sidenav>

      <md-toolbar color="primary">
        <button style="min-width: 40px;" md-button (click)="sidenav.toggle()">
          <md-icon>menu</md-icon>
        </button>
      </md-toolbar>

      <main>
        <router-outlet></router-outlet>
      </main>
    </md-sidenav-container>
  `
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') public sidenav
  public angularclassLogo = 'assets/img/angularclass-avatar.png'
  public name = 'Angular 2 Webpack Starter'
  public url = 'https://twitter.com/AngularClass'

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state)
  }

  public handleNavListClick(event) {
    if (event.target.tagName.toLowerCase() === 'a') {
      this.sidenav.toggle()
    }
  }
}
