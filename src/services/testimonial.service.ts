import { connectDB } from "@/lib/db/connect";
import Testimonial from "@/models/Testimonial";

export async function getTestimonials() {
  await connectDB();
  return Testimonial.find({ active: true }).sort({ order: 1, createdAt: 1 }).lean();
}