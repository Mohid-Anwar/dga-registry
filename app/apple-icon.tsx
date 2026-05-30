import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #006838 0%, #004d2a 100%)",
        borderRadius: "36px",
      }}
    >
      {/* Hexagon + code brackets at larger scale */}
      <svg
        width="120"
        height="120"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hexagon outline */}
        <path
          d="M12 2L21 7V17L12 22L3 17V7L12 2Z"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="0.8"
          fill="none"
        />
        {/* Left bracket < */}
        <path
          d="M10 8L6 12L10 16"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Right bracket > */}
        <path
          d="M14 8L18 12L14 16"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>,
    { ...size }
  )
}
