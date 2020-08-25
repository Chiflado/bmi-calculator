import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PersonalDataComponent } from './pages/personal-data/personal-data.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MeasurementsComponent } from './pages/measurements/measurements.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { LoadingScreenComponent } from './pages/loading-screen/loading-screen.component';


const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', component: WelcomeComponent },
    { path: 'personal-data', component: PersonalDataComponent },
    { path: 'measurements', component: MeasurementsComponent },
    { path: 'summary', component: SummaryComponent },
    { path: 'loading', component: LoadingScreenComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
