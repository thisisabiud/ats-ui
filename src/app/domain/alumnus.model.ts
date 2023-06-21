import { Sector } from "../enums/sector.enum";
import { Status } from "../enums/status.enum";

export interface Alumnus{
    id: number;
    first_name: string;
    last_name: string;
    batch: Date;
    status: Status;
    sector?: Sector;
}