export interface EventInterface{
    id: number;
    name: string;
    description: string;
    location: string;
    start_time: Date;
    end_time: Date;
    image: string;
    attendees?: number[] | string[];
    // created_at?: string;
    // updated_at?: string;
    created_by: number | string;
    // isAttending?: boolean;
    // isCreator?: boolean;
    is_public: boolean;
}