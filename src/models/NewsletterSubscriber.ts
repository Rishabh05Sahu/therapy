import { Schema, model, models, InferSchemaType } from "mongoose";

const NewsletterSubscriberSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    source: { type: String, default: "website" },
  },
  { timestamps: true }
);

export type NewsletterSubscriberDocument = InferSchemaType<
  typeof NewsletterSubscriberSchema
>;
export const NewsletterSubscriber =
  models.NewsletterSubscriber ||
  model("NewsletterSubscriber", NewsletterSubscriberSchema);

export default NewsletterSubscriber;