import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./core/auth.guard";
import { PagenotfoundComponent } from "./core/pagenotfound/pagenotfound.component";

const prefix = 'ATS';
const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "dashboard",
    canActivate: [AuthGuard],
    title: `${prefix} | Dashboard`,
    loadChildren: () =>
      import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
  },
  {
    path: "events",
    canActivate: [AuthGuard],
    title: `${prefix} | Events`,
    loadChildren: () =>
      import("./events/events.module").then((m) => m.EventsModule),
  },
  {
    path: "profile",
    canActivate: [AuthGuard],
    title: `${prefix} | Profile`,
    loadChildren: () =>
      import("./profile/profile.module").then((m) => m.ProfileModule),
  },
  {
    path: "reports",
    canActivate: [AuthGuard],
    title: `${prefix} | Reports`,
    loadChildren: () =>
      import("./reports/reports.module").then((m) => m.ReportsModule),
  },
  {
    path: "auth",
    title: `${prefix} | Login`,
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "news",
    canActivate: [AuthGuard],
    title: `${prefix} | News`,
    loadChildren: () => import("./news/news.module").then((m) => m.NewsModule),
  },
  {
    path: "career",
    canActivate: [AuthGuard],
    title: `${prefix} | Job`,
    loadChildren: () =>
      import("./career/career.module").then((m) => m.CareerModule),
  },
  {
    path: "messages",
    title: `${prefix} | Forum`,
    loadChildren: () =>
      import("./messages/messages.module").then((m) => m.MessagesModule),
  },
  {
    path: "notifications",
    title: `${prefix} | Notifications`,
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
