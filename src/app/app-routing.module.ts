import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {QualificationsComponent} from './qualifications/qualifications.component';
import {AccountComponent} from './account/account.component';
import {CareerComponent} from './career/career.component';
import {SuperPowersComponent} from './super-powers/super-powers.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'account', component: AccountComponent},
  {path: 'qualifications', component: QualificationsComponent},
  {path: 'career', component: CareerComponent},
  {path: 'super-powers', component: SuperPowersComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
