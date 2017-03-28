import {
  inject,
  TestBed
} from '@angular/core/testing'
import { Component } from '@angular/core'
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http'
import { MockBackend } from '@angular/http/testing'
import { Property } from './Property.service'

describe('Property', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BaseRequestOptions,
      MockBackend,
      {
        provide: Http,
        useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions)
        },
        deps: [MockBackend, BaseRequestOptions]
      },
      Property
    ]}))

  it('should have http', inject([ Property ], (property: Property) => {
    expect(!!property.http).toEqual(true)
  }))

  it('should get data from the server', inject([ Property ], (property: Property) => {
    property.getData().subscribe(properties => {
      expect(properties.length).toEqual(1)
    })
  }))
})
