import { Observable } from "rxjs";
import { Alumnus } from "src/app/domain/alumnus.model";

export interface Card{
    name: string;
    value: Observable<Alumnus[]>;
    icon: string;
}