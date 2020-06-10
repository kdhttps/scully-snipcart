import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
}, {
  path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
}, {
  path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
