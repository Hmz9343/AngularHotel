import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { AuthComponent } from './auth/auth.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { HomeComponent } from './home/home.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { NavigationComponent } from './navigation/navigation.component';
import { OffersComponent } from './offers/offers.component';
import { UiComponent } from './ui/ui.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BarsComponent } from './food-beverage/bars/bars.component';
import { RestaurentComponent } from './food-beverage/restaurent/restaurent.component';
import { ExperienceComponent } from './food-beverage/experience/experience.component';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';

const routes: Routes = [
  { path: 'accomodation', component: AccomodationComponent },
  { path: 'celebrations', component: CelebrationsComponent },
  { path: 'food-beverage', component: FoodBeverageComponent },
  { path: 'lifestyle', component: LifestyleComponent },
  { path: 'weddings', component: WeddingsComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [ CommonModule,
  RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
