import { User } from "./user.model";

export interface CommentsInterface{
    author: User;
    content: string;
    pub_date: Date;
}