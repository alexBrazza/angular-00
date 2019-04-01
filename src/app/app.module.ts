import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfilesComponent } from './user-profiles/user-profiles.component';
import { HighlightDirective } from './highlight.directive';
import { DisplayGuestsDirective } from './display-guests.directive';
import { ShowMoviesDirective } from './show-movies.directive';
import { MenuComponent } from './menu/menu.component';
import { ROUTES } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfilesComponent,
    HighlightDirective,
    DisplayGuestsDirective,
    ShowMoviesDirective,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
