import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/layout/home/home.component';
import { LayoutComponent } from './component/layout/layout.component';
import { LoginComponent } from './component/login/login.component';
import { NotificationsComponent } from './component/layout/notifications/notifications.component';
import { OffersComponent } from './component/layout/offers/offers.component';
import { NewJobOfferComponent } from './component/layout/home/home-employer/new-job-offer/new-job-offer.component';
import { HomeEmployerComponent } from './component/layout/home/home-employer/home-employer.component';
import { HomeEmployerMainComponent } from './component/layout/home/home-employer/home-employer-main/home-employer-main.component';
import { ProfileComponent } from './component/layout/profile/profile.component';
import { ProfileEditComponent } from './component/layout/my-profile/profile-edit/profile-edit.component';
import { MyProfileComponent } from './component/layout/my-profile/my-profile.component';
import { OffersEmployerComponent } from './component/layout/offers/offers-employer/offers-employer.component';
import { SearchComponent } from './component/layout/search/search.component';
import { RegisterComponent } from './component/register/register.component';
import { AuthService } from './service/auth.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        canActivate: [AuthService],
        children: [
          {
            path: '',
            component: HomeComponent,
          },
          {
            path: 'new-job-offer',
            component: NewJobOfferComponent,
          },
          {
            path: 'search-driver',
            component: SearchComponent,
          },
          {
            path: 'profile/:id',
            component: ProfileComponent,
          },
        ],
      },
      {
        path: 'offers',
        component: OffersComponent,
        canActivate: [AuthService],
        children: [
          {
            path: '',
            component: OffersEmployerComponent,
          },
        ],
      },
      {
        path: 'notifications',
        component: NotificationsComponent,
        canActivate: [AuthService],
      },
      {
        path: 'my-profile',
        canActivate: [AuthService],
        component: MyProfileComponent,
        children: [
          {
            path: 'edit',
            component: ProfileEditComponent,
          },
        ],
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
