import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  },
  {
    path: 'signupwithmobileno',
    loadChildren: () => import('./pages/signupwithmobileno/signupwithmobileno.module').then( m => m.SignupwithmobilenoPageModule)
  },
  {
    path: 'mobilenootp',
    loadChildren: () => import('./pages/mobilenootp/mobilenootp.module').then( m => m.MobilenootpPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/tabnav/tabnav.module').then( m => m.TabnavPageModule)
  },
  {
    path: 'view-all-categorie',
    loadChildren: () => import('./pages/view-all-categorie/view-all-categorie.module').then( m => m.ViewAllCategoriePageModule)
  },
  {
    path: 'getcategorie-products',
    loadChildren: () => import('./pages/getcategorie-products/getcategorie-products.module').then( m => m.GetcategorieProductsPageModule)
  },
  {
    path: 'add-cart',
    loadChildren: () => import('./pages/add-cart/add-cart.module').then( m => m.AddCartPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'addnew-address',
    loadChildren: () => import('./pages/addnew-address/addnew-address.module').then( m => m.AddnewAddressPageModule)
  },
  {
    path: 'auto-detect-address',
    loadChildren: () => import('./pages/auto-detect-address/auto-detect-address.module').then( m => m.AutoDetectAddressPageModule)
  },
  {
    path: 'otpverification',
    loadChildren: () => import('./pages/otpverification/otpverification.module').then( m => m.OtpverificationPageModule)
  },
  {
    path: 'productdetail',
    loadChildren: () => import('./pages/productdetail/productdetail.module').then( m => m.ProductdetailPageModule)
  },
  {
    path: 'filtersand-sort',
    loadChildren: () => import('./pages/filtersand-sort/filtersand-sort.module').then( m => m.FiltersandSortPageModule)
  },
  {
    path: 'myorders',
    loadChildren: () => import('./pages/myorders/myorders.module').then( m => m.MyordersPageModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./pages/wishlist/wishlist.module').then( m => m.WishlistPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
