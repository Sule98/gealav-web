import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    mode: "prototype",
    content: "local",
    contactDeliveryEnabled: false,
  });
}
