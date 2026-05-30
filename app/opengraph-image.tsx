import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

export const alt =
  "DGA Components – Digital Government Authority Saudi Arabia UI Library"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  const fontData = await readFile(
    join(
      process.cwd(),
      "public/fonts/IBM_Plex_Sans/static/IBMPlexSans-Bold.ttf"
    )
  )

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "80px",
        background:
          "linear-gradient(135deg, #006838 0%, #004d2a 50%, #003d1f 100%)",
        fontFamily: "IBM Plex Sans",
        color: "white",
      }}
    >
      {/* Top decoration */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.04)",
          transform: "translate(150px, -200px)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.03)",
          transform: "translate(-100px, 100px)",
          display: "flex",
        }}
      />

      {/* Logo / title area */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "12px",
            background: "rgba(255,255,255,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "28px",
            fontWeight: 700,
          }}
        >
          D
        </div>
        <span style={{ fontSize: "24px", fontWeight: 700, opacity: 0.9 }}>
          DGA Components
        </span>
      </div>

      {/* Main heading */}
      <div
        style={{
          fontSize: "56px",
          fontWeight: 700,
          lineHeight: 1.15,
          maxWidth: "800px",
          marginBottom: "24px",
          display: "flex",
        }}
      >
        Digital Government Authority – Saudi Arabia UI Components
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontSize: "22px",
          fontWeight: 400,
          opacity: 0.8,
          maxWidth: "700px",
          lineHeight: 1.5,
          display: "flex",
        }}
      >
        React, Next.js, Laravel, Vite & more. RTL-first with Arabic
        typography and DGA design tokens.
      </div>

      {/* Tags */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginTop: "40px",
        }}
      >
        {["React", "Next.js", "Laravel", "RTL", "Arabic"].map((tag) => (
          <div
            key={tag}
            style={{
              padding: "8px 20px",
              borderRadius: "100px",
              background: "rgba(255,255,255,0.12)",
              fontSize: "16px",
              fontWeight: 600,
              display: "flex",
            }}
          >
            {tag}
          </div>
        ))}
      </div>

      {/* URL */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          right: "80px",
          fontSize: "18px",
          opacity: 0.5,
          display: "flex",
        }}
      >
        dga-registry.vercel.app
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "IBM Plex Sans",
          data: fontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  )
}
