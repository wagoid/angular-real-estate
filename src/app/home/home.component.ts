import {
  Component,
  OnInit
} from '@angular/core'

import { AppState } from '../app.service'
import { Property } from './property'

@Component({
  selector: 'home',
  providers: [
    Property
  ],
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  constructor(
    public appState: AppState,
    public property: Property
  ) {}

  public ngOnInit() {
    if (!this.appState.state.properties) {
      this.appState.set('properties', [])
      this.property
        .getData()
        .subscribe(properties => this.appState.set('properties', properties))
    }
  }
}
