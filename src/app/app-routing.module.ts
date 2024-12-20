import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'custom-splash',
    loadChildren: () =>
      import('./pages/custom-splash/custom-splash.module').then(
        (m) => m.CustomSplashPageModule
      ),
  },
  {
    path: 'landing',
    loadChildren: () =>
      import('./pages/landing/landing.module').then((m) => m.LandingPageModule),
  },
  {
    path: 'details/:id',
    loadChildren: () =>
      import('./pages/details/details.module').then((m) => m.DetailsPageModule),
  },

  {
    path: '**',
    redirectTo: 'custom-splash',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
