import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { BlankPageComponent } from './components/blank-page/blank-page.component';
import { EstudanteCreateComponent } from './components/estudantes/estudante-create/estudante-create.component';
import { EstudanteListComponent } from './components/estudantes/estudante-list/estudante-list.component';
import { EstudanteEditComponent } from './components/estudantes/estudante-edit/estudante-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    BlankPageComponent,
    EstudanteCreateComponent,
    EstudanteListComponent,
    EstudanteEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
