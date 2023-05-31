import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './shared/error/error/error.component';

/**If you have set up the routing in the inner modules and the inner modules are imported in the app module, then the routing information from the inner modules will automatically be available in the app module. You do not necessarily need to define the routes in the app module's routes array unless you want to define some additional routes or change the behavior of the existing routes. */
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
