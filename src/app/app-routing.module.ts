import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';

const routes: Routes =  [
    { path: 'search', component: SearchComponent },
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'user/:login', component: UserComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
