import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '@pg/core/layout/layout.module';
import { LayoutComponent } from '@pg/core/layout/layout.component';
import { HomeGuard } from '@pg/features/home/guards/home.guard';
import { LoginGuard } from '@pg/features/login/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [HomeGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
      { path: 'venta-del-dia', loadChildren: () => import('./features/day-sale/day-sale.module').then(m => m.DaySaleModule) }
    ]
  },
  {
    path: 'login',
    canActivate: [LoginGuard],
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    LayoutModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
