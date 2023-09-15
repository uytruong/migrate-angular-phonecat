import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {PhoneListComponent} from "./phone-list/phone-list.component";
import {PhoneDetailComponent} from "./phone-detail/phone-detail.component";

const routes: Routes = [
  { path: '', redirectTo: 'phones', pathMatch: 'full' },
  { path: 'phones',          component: PhoneListComponent },
  { path: 'phones/:phoneId', component: PhoneDetailComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ]
})
export class AppRoutingModule {}