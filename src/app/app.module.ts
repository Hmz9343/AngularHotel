import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AccomodationComponent } from './accomodation/accomodation.component';
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


@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    RoomsComponent,
    AuthComponent,
    CelebrationsComponent,
    FoodBeverageComponent,
    HomeComponent,
    LifestyleComponent,
    NavigationComponent,
    OffersComponent,
    UiComponent,
    WeddingsComponent,
    LoginComponent,
    SignupComponent,
    BarsComponent,
    RestaurentComponent,
    ExperienceComponent,
    HeaderComponent,
    FooterComponent,
    SidenavListComponent,
    NavtabsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
