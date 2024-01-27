import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ToastrModule } from 'ngx-toastr';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HighlightDirective } from './core/directives/highlight.directive';
import { SquarePipe } from './core/pipes/square.pipe';
import { HomeComponent } from './-side/home/home.component';
import { ShopComponent } from './-side/shop/shop.component';
import { PersonManagementComponent } from './components/person/person-management/person-management.component';
import { PersonDetailsComponent } from './components/person/person-details/person-details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SingUpComponent } from './-log/sing-up/sing-up.component';
import { LoginComponent } from './-log/login/login.component';
import { MatCardModule } from '@angular/material/card';



export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,SidebarComponent, ToolbarComponent,
    HighlightDirective, SquarePipe, ShopComponent, HomeComponent, ShopComponent,
    PersonManagementComponent, PersonDetailsComponent, SingUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, MatCardModule,
    SharedModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot(
      {
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    }
    ),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
