import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';

const routes: Routes = [
  { path: '', component: ProductListComponent }, // Default route
  { path: 'add-product', component: ProductFormComponent }, // Route for ProductForm
  { path: '**', redirectTo: '' } // Wildcard route to redirect to home or 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
