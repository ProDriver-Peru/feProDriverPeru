import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { LayoutComponent } from './component/layout/layout.component';
import { LayoutHeaderComponent } from './component/layout/layout-header/layout-header.component';
import { LayoutMenuComponent } from './component/layout/layout-menu/layout-menu.component';
import { LayoutPanelComponent } from './component/layout/layout-panel/layout-panel.component';
import { HomeDriverComponent } from './component/layout/home/home-driver/home-driver.component';
import { HomeEmployerComponent } from './component/layout/home/home-employer/home-employer.component';
import { SearchComponent } from './component/layout/search/search.component';
import { SearchResultsComponent } from './component/layout/search/search-results/search-results.component';
import { ProfileComponent } from './component/layout/profile/profile.component';
import { ProfileDriverComponent } from './component/layout/profile/profile-driver/profile-driver.component';
import { ProfileEditComponent } from './component/layout/my-profile/profile-edit/profile-edit.component';
import { NotificationsComponent } from './component/layout/notifications/notifications.component';
import { OffersComponent } from './component/layout/offers/offers.component';
import { OffersDriverComponent } from './component/layout/offers-driver/offers-driver.component';
import { OffersEmployerComponent } from './component/layout/offers-employer/offers-employer.component';
import { OffersMadeComponent } from './component/layout/offers-employer/offers-made/offers-made.component';
import { OffersAppliedComponent } from './component/layout/offers-driver/offers-applied/offers-applied.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutMenuComponent,
    LayoutPanelComponent,
    HomeDriverComponent,
    HomeEmployerComponent,
    SearchComponent,
    SearchResultsComponent,
    ProfileComponent,
    ProfileDriverComponent,
    ProfileEditComponent,
    NotificationsComponent,
    OffersComponent,
    OffersDriverComponent,
    OffersEmployerComponent,
    OffersMadeComponent,
    OffersAppliedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
