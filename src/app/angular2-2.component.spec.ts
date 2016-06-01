import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular22AppComponent } from '../app/angular2-2.component';

beforeEachProviders(() => [Angular22AppComponent]);

describe('App: Angular22', () => {
  it('should create the app',
      inject([Angular22AppComponent], (app: Angular22AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-2 works!\'',
      inject([Angular22AppComponent], (app: Angular22AppComponent) => {
    expect(app.title).toEqual('angular2-2 works!');
  }));
});
