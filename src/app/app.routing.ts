import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsComponent } from './contacts';
import { PopularComponent } from './popular';

const routes: Routes = [
  { path: '', component: PopularComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'popular', component: PopularComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [ContactsComponent, PopularComponent];