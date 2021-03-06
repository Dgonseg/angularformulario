import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.services';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  opened:boolean = false;
  constructor( public authService: AuthService) {

  }

  toggle() {
    return !this.opened

  }
}
