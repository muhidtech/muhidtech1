// app/api/traffic.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const PROJECT_ID = process.env.VERCEL_PROJECT_ID!;
  const TOKEN = process.env.VERCEL_API_TOKEN!;

  const res = await fetch(`https://api.vercel.com/v6/analytics/events?projectId=${PROJECT_ID}&limit=30`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
