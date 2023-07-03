import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CareerComponent } from "./career.component";
import { CareerDetailsComponent } from "./career-details/career-details.component";

const routes: Routes = [
  { path: "", component: CareerComponent },
  { path: ":id", component: CareerDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class CareerRoutingModule {}
