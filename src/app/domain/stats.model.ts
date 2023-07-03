export interface Stats {
    employment_sector_stats: { [key: string]: number };
    employment_stats: { [key: string]: number };
    gender_stats: { [key: string]: number };
    year: number;
  }