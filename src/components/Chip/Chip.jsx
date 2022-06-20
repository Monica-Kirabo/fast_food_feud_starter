import * as React from "react"
import "./Chip.css"

function Chip({ label = "", isActive = false ,setCategory}) {
  
var buttonClassName;
if(isActive==false){
  buttonClassName="chip";
}
else{
  buttonClassName="chip active";
}
  return (
    <button className={buttonClassName} onClick={()=>{setCategory(label); console.log("hi")}}>
      <p className="label" >{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
