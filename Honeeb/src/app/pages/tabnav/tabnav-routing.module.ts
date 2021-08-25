import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabnavPage } from './tabnav.page';

const routes: Routes = [
  {
    path: 'tabnav',
    component: TabnavPage,
    children: [
      {
        path: 'explore',
        loadChildren: () => import('../explore/explore.module').then(m => m.ExplorePageModule)
      },
      {
        path: 'superhoney',
        loadChildren: () => import('../superhoney/superhoney.module').then(m => m.SuperhoneyPageModule)
      },
      {
        path: 'bimate',
        loadChildren: () => import('../bimate/bimate.module').then(m => m.BimatePageModule)
      },
      {
        path: 'myaccount',
        loadChildren: () => import('../myaccount/myaccount.module').then(m => m.MyaccountPageModule)
      },
      {
        path: '',
        redirectTo: '/tabnav/explore',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabnav/explore',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabnavPageRoutingModule {}
