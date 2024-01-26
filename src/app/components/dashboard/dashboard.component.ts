import { AuthService } from 'src/app/core/services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    ){

  }


  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);

  }

}
