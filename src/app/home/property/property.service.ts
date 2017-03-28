import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable()
export class Property {
  constructor(
    public http: Http
  ) {}

  public getData() {
    return this.http.get('assets/properties.json').map(res => res.json())
  }
}
