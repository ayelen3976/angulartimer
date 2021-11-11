import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Angulñar Material

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

//service
import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from './services/services.service';

//components
import { ButtonComponent } from './components/button/button.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { SimulationComponent } from './components/simulation/simulation.component';
import { HomeComponent } from './components/home/home.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LoginComponent,
    StatisticsComponent,
    SimulationComponent,
    HomeComponent,
    DialogComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatDialogModule,
    MatTableModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
    ]),
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
