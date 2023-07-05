import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Profile } from "src/app/domain/profile.model";
import { ProfileService } from "../profile.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Location } from "@angular/common";
import { HttpClient } from "@angular/common/http";

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
  profileUrl = "http://45.79.31.232/accounts/profile";
  constructor(
    private profileService: ProfileService,
    private router: Router,
    private fb: FormBuilder,
    private location: Location,
    private http: HttpClient
  ) {
    this.profileForm = fb.group({
      email: ["", Validators.required],
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
    });
  }
  back() {
    this.router.navigate(["profile"]);
  }

  update() {
    // const id = this.profile?.id;
    const id = 1;
    const formData = new FormData();
    formData.append("current_email", this.profileForm.value.email);
    formData.append("bio", this.profileForm.value.bio);
    formData.append("current_employer", this.profileForm.value.employer);
    formData.append("current_job_title", this.profileForm.value.position);
    formData.append("current_location", this.profileForm.value.location);
    formData.append("employment_status", this.profileForm.value.status);
    formData.append("employment_sector", this.profileForm.value.sector);

    this.http
      .patch<any>(`${this.profileUrl}/${id}/edit`, formData)
      .subscribe((res) => {
        console.log(res);
      });
      console.log(this.profileForm.value);
      
  }
}
