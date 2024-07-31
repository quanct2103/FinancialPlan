import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnualReportComponent } from './components/annual-report/annual-report.component'
import { AnnualReportDetailsComponent } from './components/annual-report-details/annual-report-details.component'

const routes: Routes = [
  { path: '', redirectTo: '/annual-report', pathMatch: 'full' },
  { path: 'annual-report', component: AnnualReportComponent },
  { path: 'annual-report-details/:year', component: AnnualReportDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
