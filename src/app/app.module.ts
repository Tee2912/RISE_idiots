import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper'; 
import { MatDividerModule } from '@angular/material/divider'; 
import { MatExpansionModule } from '@angular/material/expansion'; 
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input'; 
import { MatDialogModule } from '@angular/material/dialog'; 
import { StatusStepperComponent } from './status-stepper/status-stepper.component';
import { DiseaseCaseInformationComponent } from './disease-case-information/disease-case-information.component';
import { BeforeHealthTipsInformationComponent } from './before-health-tips-information/before-health-tips-information.component';
import { BeforeActivityAdviceInformationComponent } from './before-activity-advice-information/before-activity-advice-information.component';
import { BeforeVaccineInformationComponent } from './before-vaccine-information/before-vaccine-information.component'; 
import { AgmCoreModule } from '@agm/core';
import { RestaurantInfoTravellingComponent } from './restaurant-info-travelling/restaurant-info-travelling.component';
import { PharmacyInfoTravellingComponent } from './pharmacy-info-travelling/pharmacy-info-travelling.component';
import { HealthTipInfoTravellingComponent } from './health-tip-info-travelling/health-tip-info-travelling.component';
import { HealthReminderInfoTravellingComponent } from './health-reminder-info-travelling/health-reminder-info-travelling.component';
import { DiseaseCaseInfoTravellingComponent } from './disease-case-info-travelling/disease-case-info-travelling.component';
import { SymptonCheckingAfterTravellingComponent } from './sympton-checking-after-travelling/sympton-checking-after-travelling.component';
import { VerificationDialogComponent } from './verification-dialog/verification-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    StatusStepperComponent,
    DiseaseCaseInformationComponent,
    BeforeHealthTipsInformationComponent,
    BeforeActivityAdviceInformationComponent,
    BeforeVaccineInformationComponent,
    RestaurantInfoTravellingComponent,
    PharmacyInfoTravellingComponent,
    HealthTipInfoTravellingComponent,
    HealthReminderInfoTravellingComponent,
    DiseaseCaseInfoTravellingComponent,
    SymptonCheckingAfterTravellingComponent,
    VerificationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule, 
    MatStepperModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDUMgqjkyxEXGoymG5FdGxG8mvA6UDgYCg",
      libraries: ['places', 'geometry']
  }),

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [VerificationDialogComponent]
})
export class AppModule { }
