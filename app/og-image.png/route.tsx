import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f9fafb",
          backgroundImage: "radial-gradient(circle at 25% 25%, #e0f2fe 0%, #f9fafb 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize: 72,
              fontWeight: "bold",
              background: "linear-gradient(to right, #0891b2, #0f172a, #0891b2)",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: 16,
            }}
          >
            Reef & Rocks
          </h1>
          <p
            style={{
              fontSize: 32,
              color: "#64748b",
              textAlign: "center",
              maxWidth: 800,
              marginBottom: 24,
            }}
          >
            Handcrafted Ocean-Inspired Jewelry
          </p>
          <p
            style={{
              fontSize: 24,
              color: "#94a3b8",
              textAlign: "center",
              maxWidth: 600,
            }}
          >
            Uniquely picked stones & shells transformed into wearable art
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}