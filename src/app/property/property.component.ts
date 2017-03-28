import {
  Component,
  OnInit
} from '@angular/core'
import { Router } from '@angular/router'
import { MdSnackBar } from '@angular/material'

import { AppState } from '../app.service'
import { Property as PropertyService } from '../home/property'

interface Property {
  address?: string,
  image?: string,
  description?: string,
  cars?: number,
  bedrooms?: number,
  bathrooms?: number,
  price?: number
}

@Component({
  selector: 'home',
  providers: [
    PropertyService,
    MdSnackBar
  ],
  styleUrls: ['./property.component.scss'],
  templateUrl: './property.component.html'
})
export class PropertyComponent implements OnInit {
  public property: Property = {}
  constructor(
    private appState: AppState,
    private propertyService: PropertyService,
    private router: Router,
    private snackbar: MdSnackBar
  ) {}

  public ngOnInit() {
    if (!this.appState.state.properties) {
      this.appState.set('properties', [])
      this.propertyService
        .getData()
        .subscribe(properties => this.appState.set('properties', properties))
    }
  }

  public submitProperty(value: string) {
    this.property.image = 'http://loremflickr.com/600/400/real-estate'
    this.appState.set('properties', [
      ...this.appState.state.properties,
      this.property
    ])
    this.snackbar.open('Property successfully created!', null, {
      duration: 1000
    })
    this.router.navigate(['/home'])
  }
}
