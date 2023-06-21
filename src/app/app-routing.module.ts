import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./core/auth.guard";
import { PagenotfoundComponent } from "./core/pagenotfound/pagenotfound.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "home",
    canActivate: [AuthGuard],
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "dashboard",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
  },
  {
    path: "events",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./events/events.module").then((m) => m.EventsModule),
  },
  {
    path: "profile",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./profile/profile.module").then((m) => m.ProfileModule),
  },
  {
    path: "reports",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./reports/reports.module").then((m) => m.ReportsModule),
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "news",
    canActivate: [AuthGuard],
    loadChildren: () => import("./news/news.module").then((m) => m.NewsModule),
  },
  {
    path: "career",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./career/career.module").then((m) => m.CareerModule),
  },
  {
    path: "messages",
    loadChildren: () =>
      import("./messages/messages.module").then((m) => m.MessagesModule),
  },
  {
    path: "notifications",
    loadChildren: () =>
      import("./notifications/notifications.module").then(
        (m) => m.NotificationsModule
      ),
  },
  {
    path: "**",
    canActivate: [AuthGuard],
    component: PagenotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
