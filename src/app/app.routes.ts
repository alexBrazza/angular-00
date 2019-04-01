import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfilesComponent } from './user-profiles/user-profiles.component';
import { AppComponent } from './app.component';

const ROUTES: Routes = [
  { path: 'profile', component: UserProfilesComponent },
  { path: 'inscription', component: SignUpComponent},
  { path: 'home', component: AppComponent},
];

export { ROUTES };