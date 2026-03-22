export type BlogTag =
  | "Anxiety"
  | "Relationships"
  | "Burnout"
  | "Self Growth"
  | "Trauma"
  | "Parenting";

export type Author = {
  name: string;
  role: string;
  bio: string;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  coverImage: string;
  date: string;
  tags: BlogTag[];
  author: Author;
  featured?: boolean;
};