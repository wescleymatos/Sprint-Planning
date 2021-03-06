import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Router } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { MeetingPlace } from './meetingPlace/meeting.place.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDataComponent } from './sections/user-data/user.data.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NewPlanningMeeting } from './planning/new.planning.component';
import { AuthGuard } from './auth/auth.guards.service';
import { AuthService } from './auth/auth.service';
import { LoadingSpinner } from './shared/loading-spinner/loading-spinner.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserNoManagerDatas } from './shared/services/service.user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {  MatDialogModule } from '@angular/material/dialog';
import { TableBasicExample } from './temporary/temporary';

// import {MatDialogModule} from "@angular/material";



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    MeetingPlace,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    UserDataComponent,
    NewPlanningMeeting,
    LoadingSpinner,
    TableBasicExample
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule
  ],
  providers: [HttpClientModule, RouterModule, AuthGuard, AuthService, AngularFirestore,UserNoManagerDatas],
  bootstrap: [AppComponent]
})
export class AppModule { }
