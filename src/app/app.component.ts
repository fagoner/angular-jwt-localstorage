import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserService } from "./_services";
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-jwt-refresh-tokens';

  constructor(public authService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  logout(event) {
    event.target.disabled = true;
    this.authService.logout();
  }

}
