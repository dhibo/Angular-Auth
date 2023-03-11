import { RequestsComponent } from './pages/requests/requests.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddDocumentComponent } from './pages/add-document/add-document.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignComponent } from './pages/sign/sign.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'sign',component:SignComponent},
  {path:'dashboard',component:HomeComponent},
  {path:'add',component:AddDocumentComponent},
  {path:'request',component:RequestsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
