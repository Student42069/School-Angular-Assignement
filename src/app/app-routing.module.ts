import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { CarouselComponentComponent } from './carousel-component/carousel-component.component';
import { DevComponentComponent } from './dev-component/dev-component.component';
import { EmployesComponentComponent } from './employes-component/employes-component.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { FcComponentComponent } from './fc-component/fc-component.component';
import { InfraComponentComponent } from './infra-component/infra-component.component';
import { LoggedInAdminGuard } from './logged-in-admin.guard';
import { LoginComponentComponent } from './login-component/login-component.component';
import { LogoutComponentComponent } from './logout-component/logout-component.component';
import { PanierComponentComponent } from './panier-component/panier-component.component';
import { ScComponentComponent } from './sc-component/sc-component.component';

const routes: Routes = [
  { path: '', component: CarouselComponentComponent },
  { path: 'developpement', component: DevComponentComponent },
  { path: 'infrastructure', component: InfraComponentComponent },
  { path: 'service-conseil', component: ScComponentComponent },
  { path: 'formation', component: FcComponentComponent },
  { path: 'login', component: LoginComponentComponent },
  {
    path: 'logout',
    component: LogoutComponentComponent,
  },
  { path: 'panier', component: PanierComponentComponent },
  {
    path: 'employes',
    component: EmployesComponentComponent,
    canActivate: [LoggedInAdminGuard],
  },
  {
    path: 'admin',
    component: AdminComponentComponent,
    canActivate: [LoggedInAdminGuard],
  },
  { path: '**', component: ErrorComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
