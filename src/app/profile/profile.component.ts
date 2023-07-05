import { Component, OnInit } from "@angular/core";
import { ProfileService } from "./profile.service";
import { Profile } from "../domain/profile.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  profile?: Profile;
  gender?: string;
  constructor(private profileService: ProfileService, private router: Router) {}
  ngOnInit(): void {
    this.profileService.profileInfo$().subscribe((data) => {this.profile = data;
      if(data.gender == 'M'){
        this.gender = "Male";
      }else{
        this.gender = "Female";
      }
      console.log(this.profile);
    
    });
  }

  toEdit(){
    this.router.navigate(['profile/edit']);
  }
}
