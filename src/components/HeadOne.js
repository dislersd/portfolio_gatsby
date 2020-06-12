import React from "react"
import LinkAnimated from "./LinkAnimated"

export default function HeadOne({ title, onClick }) {
  return (
    <LinkAnimated onClick={onClick}>
      <h1>{title}</h1>
    </LinkAnimated>
  )
}
