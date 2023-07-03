import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MessagesComponent } from "./messages.component";
import { MessageThreadComponent } from "./message-thread/message-thread.component";

const routes: Routes = [
  {
    path: "",
    component: MessagesComponent,
  },
  {
    path: "",
    children: [{ path: ":username", component: MessageThreadComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagesRoutingModule {}
