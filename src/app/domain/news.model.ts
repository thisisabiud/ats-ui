import { NewsStatus } from "../enums/news_status.enum";
import { User } from "./user.model";

export interface NewsInterface{
    id: number;
    title: string;
    content: string;
    author: string|number;
    image?: string;
    pub_date: string;
}