import { EstudanteEditComponent } from './components/estudantes/estudante-edit/estudante-edit.component';
import { EstudanteListComponent } from './components/estudantes/estudante-list/estudante-list.component';
import { EstudanteCreateComponent } from './components/estudantes/estudante-create/estudante-create.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  { path: 'estudantes/create', component: EstudanteCreateComponent },
  { path: 'estudantes/list', component: EstudanteListComponent },
  { path: 'estudantes/edit/:id', component: EstudanteEditComponent },

  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
