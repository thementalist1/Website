import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import {ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ItConsultingComponent } from './it-consulting/it-consulting.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { SupplyChainComponent } from './supply-chain/supply-chain.component';
import { DigiComponent } from './digi/digi.component';
import { HospitalityComponent } from './hospitality/hospitality.component';
import { MarketingComponent } from './marketing/marketing.component';
import { RenwenergyComponent } from './renwenergy/renwenergy.component';
import { MainComponent } from './main/main.component';
const appRoutes: Routes =
[
  {path:'service',component:ServicesComponent},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'it-consulting',component:ItConsultingComponent},
  {path:'ecom',component:EcommerceComponent},
  {path:'supply',component:SupplyChainComponent},
  {path:'digi',component:DigiComponent},
  {path:'hospitality',component:HospitalityComponent},
  {path:'renew',component:RenwenergyComponent},
  {path:'marketing',component:MarketingComponent},
   {path:'adver',component:AdvertiseComponent},
   {path:'main',component:MainComponent},


]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ServicesComponent,
    ContactComponent,
    NavbarComponent,
    ItConsultingComponent,
    AdvertiseComponent,
    EcommerceComponent,
    SupplyChainComponent,
    DigiComponent,
    HospitalityComponent,
    MarketingComponent,
    RenwenergyComponent,
    MainComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
