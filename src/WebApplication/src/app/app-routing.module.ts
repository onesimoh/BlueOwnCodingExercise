import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InvestorsDashboardComponent } from './investors-dashboard/investors-dashboard.component';
import { InvestorsPositionsComponent } from './investors-positions/investors-positions.component';

const routes: Routes = [
  {
    path: 'app',
    component: AppComponent,
    children: [
      {
        path: 'investors',
        component: InvestorsDashboardComponent,
      },
      {
        path: 'positions',
        component: InvestorsPositionsComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/app/investors',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
