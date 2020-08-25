import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SideNavbarComponent } from './layout/side-navbar/side-navbar.component';
import { TopNavbarComponent } from './layout/top-navbar/top-navbar.component';
import { PersonalDataComponent } from './pages/personal-data/personal-data.component';
import { MeasurementsComponent } from './pages/measurements/measurements.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoadingScreenComponent } from './pages/loading-screen/loading-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SideNavbarComponent,
    TopNavbarComponent,
    PersonalDataComponent,
    MeasurementsComponent,
    SummaryComponent,
    WelcomeComponent,
    LoadingScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
