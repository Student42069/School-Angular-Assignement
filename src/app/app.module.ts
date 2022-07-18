import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponentComponent } from './carousel-component/carousel-component.component';
import { DevComponentComponent } from './dev-component/dev-component.component';
import { InfraComponentComponent } from './infra-component/infra-component.component';
import { ScComponentComponent } from './sc-component/sc-component.component';
import { FcComponentComponent } from './fc-component/fc-component.component';
import { PanierComponentComponent } from './panier-component/panier-component.component';
import { EmployesComponentComponent } from './employes-component/employes-component.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { LogoutComponentComponent } from './logout-component/logout-component.component';
import { ProduitComponentComponent } from './produit-component/produit-component.component';
import { ProduitsComponentComponent } from './produits-component/produits-component.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { FormsModule } from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialExampleModule } from '../material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { BsListComponent } from './bs-list/bs-list.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponentComponent,
    DevComponentComponent,
    InfraComponentComponent,
    ScComponentComponent,
    FcComponentComponent,
    PanierComponentComponent,
    EmployesComponentComponent,
    AdminComponentComponent,
    LoginComponentComponent,
    FooterComponentComponent,
    NavbarComponentComponent,
    LogoutComponentComponent,
    ProduitComponentComponent,
    ProduitsComponentComponent,
    ErrorComponentComponent,
    BsListComponent,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
