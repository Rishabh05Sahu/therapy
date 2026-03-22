import { Schema, model, models, InferSchemaType } from "mongoose";

const TeamMemberSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    availability: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    active: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export type TeamMemberDocument = InferSchemaType<typeof TeamMemberSchema>;
export const TeamMember =
  models.TeamMember || model("TeamMember", TeamMemberSchema);
export default TeamMember;