import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ArquivoRoutingModule } from './arquivo-routing.module';
import { ArquivoUploadComponent } from './arquivo-upload/arquivo-upload.component';
import { ArquivoComponent } from './arquivo.component';



@NgModule({
  declarations: [
    ArquivoUploadComponent,
    ArquivoComponent
  ],
  imports: [
    CommonModule,
    ArquivoRoutingModule,
    RouterModule
  ]
})
export class ArquivoModule { }
