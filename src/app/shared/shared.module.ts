import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';


@NgModule({

  declarations: [],
  imports:[

  ],
  exports: [
    MaterialModule,
    FormsModule ,ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
     MatInputModule,
     MatToolbarModule,
     MatButtonModule,
     MatInputModule,
     MatIconModule,
     MatSidenavModule,
     MatListModule,
     MatExpansionModule,
     CdkTableModule,
     MatTableModule,
     MatPaginatorModule,
     MatSortModule,
     MatMenuModule,
     MatDialogModule,
     MatSelectModule,

  ]
})
export class SharedModule { }
