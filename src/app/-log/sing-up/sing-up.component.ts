import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent {
  Roles: any = ['Admin', 'Author', 'Reader'];
    constructor(
    private router: Router,
    ) { }


  signUp (){

    this.router.navigate(['/signup'])
  }





}
