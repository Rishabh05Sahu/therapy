import { NextResponse } from "next/server";
import { getTeamMembers } from "@/services/team.service";

export async function GET() {
  try {
    const team = await getTeamMembers();

    return NextResponse.json({
      success: true,
      data: team,
    });
  } catch (error) {
    console.error("GET /api/team error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch team members." },
      { status: 500 }
    );
  }
}