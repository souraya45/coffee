import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './core/guards/auth.guard';
import { loginGuard } from './core/guards/login.guard';
import { MenuComponent } from './-side/menu/menu.component';
import { HomeComponent } from './-side/home/home.component';
import { DrinksComponent } from './-side/drinks/drinks.component';
import { SweetsComponent } from './-side/sweets/sweets.component';
import { ShopComponent } from './-side/shop/shop.component';
import { ContactComponent } from './-side/contact/contact.component';
import { PersonDetailsComponent } from './components/person/person-details/person-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'dashboard',
    pathMatch:'full'

  },
  {
    path:'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  },
  {
    path:'menu',
    component: MenuComponent ,
    canActivate: [authGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [loginGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard]
  },
  {
    path: 'drink',
    component: DrinksComponent,
    canActivate: [authGuard]
  },
  {
    path: 'sweet',
    component: SweetsComponent,
    canActivate: [authGuard]
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [authGuard]
  },
  {
    path: 'Person',
    component: PersonDetailsComponent,
    canActivate: [authGuard]
  },
  {
    path: 'shop',
    component: ShopComponent,
    canActivate: [authGuard]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
