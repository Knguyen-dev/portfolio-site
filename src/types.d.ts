export interface DateRange {
  start: string; // Format: yyyy-mm-dd
  end: string | null; // null for present
}

// Could we used for a job experience or just a project that you worked on
export interface Experience {
  title: string;
  description: string;
  dates: DateRange;
  link: string;
}

export interface Project {
  title: string;
  description: string;
  dates: DateRange;
  tags: string[];
  link: string;
  madeFor: string;
  isFeatured: boolean;
}

export interface ITag {
  title: string
}

export interface APIData {
  name: string;
  header: string;
  subheader: string;
  about: string[];
  experiences: Experience[];
  projects: Project[];
} 

// types.ts
export interface OutletContextType {
  data: APIData;
}
