import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Profile } from "src/app/domain/profile.model";
import { ProfileService } from "../profile.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Location } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.css"],
})
export class EditProfileComponent implements OnInit {
  profile?: Profile;
  sector: string[] = ["SELF EMPLOYED", "GOVERNMENT", "PRIVATE"];
  status: string[] = ["UNEMPLOYED", "EMPLOYED", "RETIRED"];
  profileForm: FormGroup;
  public profileId$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  profileUrl = "http://45.79.31.232/accounts/profile";
  constructor(
    private profileService: ProfileService,
    private router: Router,
    private fb: FormBuilder,
    private location: Location,
    private http: HttpClient
  ) {
    this.profileForm = fb.group({
      email: [""],
      employer: [""],
      position: [""],
      status: [""],
      sector: [""],
      bio: [""],
      location: [""],
    });
  }
  ngOnInit(): void {
    this.profileService.profileInfo$().subscribe((data) => {
      this.profile = data;
      this.profileId$.next(data.id);
    });
  }
  back() {
    this.router.navigate(["profile"]);
  }

  update() {
    const id = this.profileId$.value;
    var formData = new FormData();

    formData.append("contact_email", this.profileForm.get('email')?.value);
    formData.append("bio", this.profileForm.get('bio')?.value);
    formData.append("current_employer", this.profileForm.get('employer')?.value);
    formData.append("current_job_title", this.profileForm.get('position')?.value);
    formData.append("current_location", this.profileForm.get('location')?.value);
    formData.append("employment_status", this.profileForm.get('status')?.value);
    formData.append("employment_sector", this.profileForm.get('sector')?.value);

    this.http
      .patch<Profile>(`${this.profileUrl}/${id}/edit/`, formData)
      .subscribe(
        (res) => {
          console.log(formData);

          this.router.navigate(["profile"]);
        },
        (error) => {
          console.log("Error ", error);
        }
      );
  }
}
