import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm?: any;
date: string | number | Date | undefined;

  constructor(
    private fb: FormBuilder,
    private authService : AuthService,
    private router: Router,
    private toastr: ToastrService,
    private spinner:SpinnerService,
    ) {
      this.date= new Date()
    }

  ngOnInit(): void {
    console.log("form login");

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    console.log("login")
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username').value;
      const password = this.loginForm.get('password').value;

       // Call the authentication service's login method
       if (this.authService.login(username, password)) {
        // Navigate to the ProductListComponent upon successful login
        this.router.navigate(['/dashboard']);
      } else {
        // Handle authentication error (show error message, etc.)
        this.toastr.error("username and password does match!","message")
      }

    }
  }
}


