import { Schema, model, models, InferSchemaType } from "mongoose";

const TestimonialSchema = new Schema(
  {
    quote: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    active: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export type TestimonialDocument = InferSchemaType<typeof TestimonialSchema>;
export const Testimonial =
  models.Testimonial || model("Testimonial", TestimonialSchema);
export default Testimonial;