import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuperuComponent } from './menuperu/menuperu.component';
import { MenuchileComponent } from './menuchile/menuchile.component';
import { MenuuruguayComponent } from './menuuruguay/menuuruguay.component';



@NgModule({
  declarations: [
    MenuperuComponent,
    MenuchileComponent,
    MenuuruguayComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuchileComponent,
    MenuperuComponent,
    MenuuruguayComponent
  ]
})
export class PagesModule { }
