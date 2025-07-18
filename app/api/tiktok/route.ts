// app/api/tiktok/route.ts

export async function POST(req: Request) {
  const body = await req.json();

  const res = await fetch(
    "https://business-api.tiktok.com/open_api/v1.3/event/track/",
    {
      method: "POST",
      headers: {
        "Access-Token": process.env.TIKTOK_ACCESS_TOKEN!, // Store token in .env
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event_source: "web",
        event_source_id: process.env.TIKTOK_PIXEL_ID!, // Store pixel ID in .env
        data: [
          {
            event: "Schedule", // Or "Contact"
            event_time: Math.floor(Date.now() / 1000), // UNIX timestamp in seconds
            user: {
              email: null,
              phone: null,
              external_id: null,
            },
            properties: {
              currency: null,
              content_type: null,
            },
            page: {
              url: body.url,
              referrer: body.referrer,
            },
          },
        ],
      }),
    }
  );

  const data = await res.json();
  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
