import { ChurrasUpdateComponent } from './components/churras/churras-update/churras-update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ChurrascoComponent } from './views/churras/churrasco.component';
import { ChurrasCreateComponent } from './components/churras/churras-create/churras-create.component';
import { ChurrasDeleteComponent } from './components/churras/churras-delete/churras-delete.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "churras",
    component: ChurrascoComponent
  },
  {
    path: "churras/create",
    component: ChurrasCreateComponent
  },
  {
    path: "churras/update/:id",
    component: ChurrasUpdateComponent
  },
  {
    path: "churras/delete/:id",
    component: ChurrasDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
