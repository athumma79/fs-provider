import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'listings',
        children: [
          {
            path: '',
            loadChildren: '../listings/listings.module#ListingsPageModule'
          },
          {
            path: 'create',
            loadChildren: '../create/create.module#CreatePageModule'
          },
          {
            path: 'details',
            children: [
              {
                path: '',
                loadChildren: '../details/details.module#DetailsPageModule'
              },
              {
                path: 'edit',
                loadChildren: '../edit/edit.module#EditPageModule'
              },
              {
                path: 'bookings',
                loadChildren: '../bookings/bookings.module#BookingsPageModule'
              }
            ]
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../profile/profile.module#ProfilePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'main/tabs/listings',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'main/tabs/listings',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
