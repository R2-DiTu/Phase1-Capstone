import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { IndexComponent } from './index/index.component';

export const routes: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'index', component: IndexComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'meetings', component: MeetingsComponent},
    {path: 'nav-bar', component: NavBarComponent}
  ];
