import { connectDB } from "@/lib/db/connect";
import TeamMember from "@/models/TeamMember";

export async function getTeamMembers() {
  await connectDB();
  return TeamMember.find({ active: true }).sort({ order: 1, createdAt: 1 }).lean();
}