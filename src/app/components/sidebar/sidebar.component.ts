import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
data: any;
 constructor(
  private authService: AuthService,
  private router: Router,
  ){

  }

  @Input() sidebarOpened:boolean = false;

}
