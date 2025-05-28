import { NextResponse } from 'next/server';

export async function GET() {
  const PROJECT_ID = process.env.VERCEL_PROJECT_ID;
  const TOKEN = process.env.VERCEL_API_TOKEN;

  if (!PROJECT_ID || !TOKEN) {
    return NextResponse.json({ error: 'Missing Vercel project ID or API token' }, { status: 500 });
  }

  const res = await fetch(`https://api.vercel.com/v6/analytics/events?projectId=${PROJECT_ID}&limit=30`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  if (!res.ok) {
    // Clone the response so we can safely read it twice
    const resClone = res.clone();

    try {
      const errorJson = await res.json();
      return NextResponse.json({ error: errorJson }, { status: res.status });
    } catch {
      const errorText = await resClone.text();
      return NextResponse.json({ error: errorText }, { status: res.status });
    }
  }

  const data = await res.json();
  return NextResponse.json(data);
}
