import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserService } from '../_services';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username: FormControl = new FormControl('', [Validators.required]);
  password: FormControl = new FormControl('', [Validators.required]);
  loginForm: FormGroup;

  constructor(private authService: AuthenticationService,
    private router: Router) {

    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password
    });

  }

  ngOnInit(): void {
    if (this.authService.loggedIn()) {
      this.router.navigate(['/']);
    }

  }

  login(event) {
    event.target.disabled = true;
    this.authService.login(this.username.value.trim(), this.password.value.trim())
      .then(user => {
        this.authService.setToken(user.accessToken);
        this.router.navigate(['/']);
      })
      .catch(err => console.log(err))
      .finally(() => event.target.disabled = false);

  }

}
