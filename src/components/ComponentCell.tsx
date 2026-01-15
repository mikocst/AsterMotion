import { useState } from "react";
import Accordion from "./Library/Accordion";
import RadioGroup from "./Library/RadioGroup";
import RadioItem from "./Library/RadioItem";

interface ComponentCellProps {
      componentName: string;
      componentDemo: string;
}

const dialogContent = `Are you sure you want to make these changes? This action cannot be undone.`;

const ComponentCell = () => {
  const [plan, setPlan] = useState("pro")

  return (
    <div className = "flex flex-col gap-2 p-3 border border-gray-200 rounded-lg">
        <h3 className = "text-lg">Component Cell</h3>
        <div className="p-3 border border-gray-100 rounded-md">
           <RadioGroup
           name = "Billing Plans"
           value="plan"
           onValueChange={setPlan}
           >
            <div>
              <RadioItem value ="free">
                <span>No Monthly Payment</span>
              </RadioItem>
              <RadioItem value ="free">
                <span>$15/ Month</span>
              </RadioItem>
              <RadioItem value ="free">
                <span>$30 / Month</span>
              </RadioItem>
            </div>
           </RadioGroup>
        </div>
      </div>
  )
}

export default ComponentCell