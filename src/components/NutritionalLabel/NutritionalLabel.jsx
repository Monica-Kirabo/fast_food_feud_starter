import * as React from "react";
import { nutritionFacts } from "../../constants";
import "./NutritionalLabel.css";

export function NutritionalLabel(props) {
  console.log("nutrition facts is ");
  console.log(nutritionFacts);

  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props.item.item_name}</h4>

      <ul className="fact-list">
        {
          /* WRITE CODE HERE */

          nutritionFacts.map((facts) => {
            console.log(facts);
            return (
              <NutritionalLabelFact
                item={props.item}
                key={facts.id}
                label={facts.label}
                attribute={facts.attribute}
              />
            );
          })
        }
      </ul>
    </div>
  );
}

export function NutritionalLabelFact(props) {
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{/* WRITE */ props.label}</span>{" "}
      <span className="fact-value">
        {/* WRITE CODE HERE */ props.item[props.attribute]}
      </span>
    </li>
  );
}

export default NutritionalLabel;
