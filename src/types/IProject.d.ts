export interface IProject {
  startDate: Date;
  endDate?: Date;
  title: string;
  description: string;
  tags?: string[];
  repoUrl: string;
  previewUrl?: string;
  isFeatured?: boolean;
  madeFor?: string;
}
