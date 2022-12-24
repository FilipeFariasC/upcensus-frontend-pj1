import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArquivoUploadComponent } from './arquivo-upload/arquivo-upload.component';
import { ArquivoComponent } from './arquivo.component';

const routes: Routes = [
  {
    path: '',
    component: ArquivoComponent,
    children: [
      {
        path: 'upload',
        component: ArquivoUploadComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArquivoRoutingModule { }
