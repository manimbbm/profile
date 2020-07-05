import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomePageComponent } from './home-page/home-page.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {SuperPowersComponent} from './super-powers/super-powers.component';
import {AccountComponent} from './account/account.component';
import {PowerUpsComponent} from './power-ups/power-ups.component';
import {SkillsComponent} from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopBarComponent,
    QualificationsComponent,
    SkillsComponent,
    PowerUpsComponent,
    AccountComponent,
    SuperPowersComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    TopBarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
