import React from "react"

export default function HeadOne({ title, onClick }) {
  return (
    <h1
      onClick={onClick}
      style={{
        cursor: "pointer",
      }}
    >
      {title}
    </h1>
  )
}
