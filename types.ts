
export interface Project {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  longDescription?: string; // Optional longer description for a modal or detail view
  projectUrl?: string; // Optional link to live project or repo
}

export interface NavLink {
  label: string;
  targetId: string;
}
