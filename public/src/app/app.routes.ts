import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { PollComponent } from './poll/poll.component';


const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'create', component: CreateComponent},
    { path: 'poll/:id', component: PollComponent},

];
export const routing = RouterModule.forRoot(APP_ROUTES);