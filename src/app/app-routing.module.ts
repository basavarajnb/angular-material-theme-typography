import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreditHistoryComponent } from './credit-history/credit-history.component';

const routes: Routes = [
{path:'', component:AppComponent, pathMatch:'full'},
{path:'credit-history', component:CreditHistoryComponent, pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
