import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatMenuPanel } from '@angular/material/menu';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() buttonClicked = new EventEmitter<void>();
userAccountMenu: MatMenuPanel<any> | null | undefined;
   menuButtonClicked(){
    this.buttonClicked.emit();
  }


  lang:string ='';

  constructor(private translateService:TranslateService){

  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';

  }

  ChangeLang(lang:any){
    const selectedLanguage = lang.target.value;

    localStorage.setItem('lang',selectedLanguage);

    this.translateService.use(selectedLanguage);

  }
}

