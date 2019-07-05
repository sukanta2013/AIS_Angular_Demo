import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { UsersComponent } from "./users.components";
import { ListOfUsersComponent } from "./list-of-users/list-of-users/list-of-users.component";
import { AddStudentComponent } from "./add-user/add-student.component";

const routes: Routes = [
  {
    path: "",
    component: UsersComponent,
    children: [
      {
        path: "list-of-users",
        component: ListOfUsersComponent
      },
      {
        path: "add-student",
        component: AddStudentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
