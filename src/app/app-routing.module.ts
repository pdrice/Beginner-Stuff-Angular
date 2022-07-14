import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { DirectivesComponent } from './pages/directives/directives.component';
import { ParentComponent } from './pages/parent/parent.component';
import { ServiceComponent } from './pages/service/service.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'databinding'},
  {path:'databinding', component:DataBindingComponent},
  {path:'directives', component:DirectivesComponent},
  {path:'parent', component:ParentComponent},
  {path:'service', component:ServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
