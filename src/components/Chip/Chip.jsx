import * as React from "react"
import "./Chip.css"

function Chip({ label = "", isActive = false , iClick=()=>{}}) {
  
var buttonClassName;
if(isActive==false){
  buttonClassName="chip";
}
else{
  buttonClassName="chip active";
}
  return (
    <button className={buttonClassName} onClick={iClick}>
      <p className="label" >{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
