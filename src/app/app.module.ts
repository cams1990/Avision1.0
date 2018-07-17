import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FormAlimentComponent } from './form-aliment/form-aliment.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { AppRoutingModule } from './/app-routing.module';
import { ReportingDataComponent } from './reporting-data/reporting-data.component';
import { RedirectReportingComponent } from './redirect-reporting/redirect-reporting.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { EnteteMenuComponent } from './entete-menu/entete-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    FormulaireComponent,
    FormAlimentComponent,
    FormLoginComponent,
    
    ReportingDataComponent,
    
    RedirectReportingComponent,
    
    MenuLateralComponent,
    
    EnteteMenuComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  AppRoutingModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
