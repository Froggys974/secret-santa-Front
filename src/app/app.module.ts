import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GroupListComponent } from './components/group-list/group-list.component';
import { GroupDetailComponent } from './components/group-detail/group-detail.component';
import { GroupMembersComponent } from './components/group-members/group-members.component';
import { GroupCreateComponent } from './components/group-create/group-create.component';
import { SecretSantaComponent } from './components/secret-santa/secret-santa.component';
import { InvitationsComponent } from './components/invitations/invitations.component';
import { SharedModule } from './shared/shared.module'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; // Importation de HttpClientModule



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    GroupListComponent,
    GroupDetailComponent,
    GroupMembersComponent,
    GroupCreateComponent,
    SecretSantaComponent,
    InvitationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
