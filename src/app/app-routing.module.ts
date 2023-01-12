import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuchileComponent } from './pages/menuchile/menuchile.component';
import { MenuperuComponent } from './pages/menuperu/menuperu.component';
import { MenuuruguayComponent } from './pages/menuuruguay/menuuruguay.component';

const routes: Routes = [

  { path:'peru', component:MenuperuComponent },
  { path:'chile', component:MenuchileComponent },
  { path:'uruguay', component:MenuuruguayComponent },
  { path:'**', redirectTo:'peru', pathMatch:'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
