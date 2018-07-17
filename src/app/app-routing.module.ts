import { NgModule, Component } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormAlimentComponent } from './form-aliment/form-aliment.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ReportingDataComponent } from './reporting-data/reporting-data.component';
import { RedirectReportingComponent } from './redirect-reporting/redirect-reporting.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';

const routes=[
  {path:'formlaireLogin', component:FormLoginComponent},
  {path:'', redirectTo:'/formlaireLogin', pathMatch:'full'},
  {path:'AfficheSaisi', component:FormAlimentComponent},
  {path:'formSaisiInfo', component:FormulaireComponent},
  {path:'reportingData', component:ReportingDataComponent},
  /* {path:'redirectionReportage', component.red} */
  {path:'redirectReporting', component:RedirectReportingComponent},
  {path:"sidebarAvison", component:MenuLateralComponent}

]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
