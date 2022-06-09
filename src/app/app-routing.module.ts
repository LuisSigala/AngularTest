import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostumersComponent } from './costumers/costumers.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent 
  },
  {
    path: "users",
    component: UsersComponent 
  },
  {
    path: "costumers",
    component: CostumersComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
