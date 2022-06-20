import * as React from "react"
import "./Instructions.css"

export function Instructions(props) {
  return (
    <aside className="instructions">
      <p>{props.instruction.start}</p>
    </aside>
  )
}

export default Instructions
