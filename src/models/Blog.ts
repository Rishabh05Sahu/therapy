import mongoose, { Schema, models, model, InferSchemaType } from "mongoose";

const AuthorSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    bio: { type: String, required: true, trim: true },
  },
  { _id: false }
);

const BlogSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true },
    excerpt: { type: String, required: true, trim: true },
    content: {
      type: [String],
      required: true,
      default: [],
    },
    coverImage: { type: String, required: true, trim: true },
    date: { type: String, required: true, trim: true },
    tags: {
      type: [String],
      required: true,
      default: [],
      index: true,
    },
    featured: { type: Boolean, default: false },
    author: { type: AuthorSchema, required: true },
  },
  { timestamps: true }
);

export type BlogDocument = InferSchemaType<typeof BlogSchema>;
export const Blog = models.Blog || model("Blog", BlogSchema);
export default Blog;