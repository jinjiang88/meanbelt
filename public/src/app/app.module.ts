import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { PollComponent } from './poll/poll.component';
import { PollService } from './poll/poll.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { DashboardService } from './dashboard/dashboard.service';
import { CreateService } from './create/create.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PollComponent,
    DashboardComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [LoginService, PollService, CreateService, DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
