import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${process.env.API_ENDPOINT}/node/page`
  );

  const data = await response.json();

  return NextResponse.json({ data });
}
