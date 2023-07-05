import { User } from "./user.model";

export interface Profile {
  id: number;
  avatar?: string;
  bio?: string;
  contact_email?: string;
  current_employer?: string;
  current_job_title?: string;
  current_location?: string;
  employment_sector?: string;
  employment_status?: string;
  gender?: string;
  graduation_year?: number;
  major?: string;
  user: User;
}
