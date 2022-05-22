import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { HomeComponent } from './home/home.component';
import { StdaddComponent } from './stdadd/stdadd.component';
import { StdlistComponent } from './stdlist/stdlist.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'student',component:StudentComponent,children:[
    {path:'',component:StdlistComponent},
    {path:'create',component:StdaddComponent},
    {path:'edit/:id',component:EditStudentComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
