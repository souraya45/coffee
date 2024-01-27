import { SpinnerService } from './core/services/spinner.service';
import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coffee'

  sidebarOpened:boolean = true;

  constructor(
    private authServise: AuthService,
    private translateService:TranslateService,
    private SpinnerService:SpinnerService,

    ){
      this.translateService.setDefaultLang('en');
      this.translateService.use(localStorage.getItem('lang') || 'en')

    }


  isLoggedIn(): boolean{
    return this.authServise.isAuthenticatedUser();
  }

  toggleSideBar(){
    this.sidebarOpened = !this.sidebarOpened;
  }







}
