import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { LinkItem } from "../nav-link/link-item";
import { AuthService } from "src/app/auth/auth.service";
import { MatSidenav } from "@angular/material/sidenav";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { ChatService } from "src/app/messages/chat.service";
import { LoaderService } from "../loader.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-scaffold",
  templateUrl: "./scaffold.component.html",
  styleUrls: ["./scaffold.component.css"],
})
export class ScaffoldComponent implements OnInit, AfterViewInit {
  items?: LinkItem[];
  searchForm: FormGroup;

  @ViewChild("sidenav", { static: false }) sidenav!: MatSidenav;
  user: boolean = false;
  public username: string = "";
  result: any;
  // isLoggedIn$ = this.authService.isLoogedIn$;

  auth$!: Observable<boolean>;
  constructor(
    public authService: AuthService,
    private router: Router,
    private searchService: LoaderService,
    private fb: FormBuilder
  ) {
    this.searchForm = fb.group({
      query: [""],
    });
  }

  ngOnInit() {
    this.items = [
      { icon: "dashboard", path: "/dashboard", title: "Dashboard" },
      { icon: "newspaper", path: "/news", title: "News" },
      { icon: "events", path: "/events", title: "Events" },
      { icon: "work", path: "/career", title: "Jobs" },
      { icon: "message", path: "/messages", title: "Messages" },
      { icon: "notifications", path: "/notifications", title: "Notifications" },
      { icon: "analytics", path: "/reports", title: "Statistics" },
      // {icon: 'person', path: '/profile', title: 'Profile'},
    ];
    this.auth$ = this.authService.isLoggedIn$;
    //  this.user = this.authService.userId;
    // this.isLoggedIn$;
    if (localStorage.getItem("token") != null) {
      this.user = true;
      this.authService
        .getProfile()
        .subscribe((data) => (this.username = data["user"]["username"]));
    }
  }

  goToProfile() {
    this.router.navigate(["/profile"]);
  }

  toggleSidenav() {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }
  ngAfterViewInit(): void {
    this.sidenav.mode = "side";
  }
  logout() {
    this.authService.logout();
  }

  get name() {
    return this.username;
  }

  search() {
    const query = this.searchForm.get("query")?.value;
    this.searchService.getResult(query).subscribe((data) => {
      this.result = data;
      console.log(this.result);
    });
  }
}
