import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ReactiveFormsModule} from '@angular/forms';

import {HomePageComponent} from './home-page/home-page.component';
import {TopBarComponent} from './shared/top-bar/top-bar.component';
import {QualificationsComponent} from './qualifications/qualifications.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SuperPowersComponent} from './super-powers/super-powers.component';
import {AccountComponent} from './account/account.component';
import {CareerComponent} from './career/career.component';
import {SideNavComponent} from './shared/side-nav/side-nav.component'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopBarComponent,
    QualificationsComponent,
    CareerComponent,
    AccountComponent,
    SuperPowersComponent,
    PageNotFoundComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [
    TopBarComponent,
    SideNavComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
