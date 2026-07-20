import { useState } from "react";
import Card from "@components/Library/Cards/Card";
import CardHeader from "@components/Library/Cards/CardHeader";
import CardTitle from "@components/Library/Cards/CardTitle";
import CardDescription from "@components/Library/Cards/CardDescription";
import CardFooter from "@components/Library/Cards/CardFooter";
import Badge from "@components/Library/Badge";
import RadioGroup from "@components/Library/RadioGroup/RadioGroup";
import RadioItem from "@components/Library/RadioGroup/RadioItem";
import Button from "@components/Button";
import { buttonVariant, buttonCopy } from "@types";
import { useToast } from "@components/Library/Toast/ToastContext";

type BillingCycle = "monthly" | "yearly";

const plans = [
  {
    id: "free",
    name: "Free",
    description: "For individuals getting started.",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    description: "For growing teams that need more.",
    monthlyPrice: "$19",
    yearlyPrice: "$182",
    highlighted: true,
  },
  {
    id: "team",
    name: "Team",
    description: "Advanced controls and priority support.",
    monthlyPrice: "$49",
    yearlyPrice: "$470",
    highlighted: false,
  },
];

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const { addToast } = useToast();

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-medium">Choose your plan</h3>
        <p className="text-sm text-gray-500">Simple pricing that scales with your team.</p>
      </div>

      <RadioGroup
        value={billingCycle}
        onValueChange={(value) => setBillingCycle(value as BillingCycle)}
        name="billing-cycle"
      >
        <div className="flex flex-row flex-wrap gap-4">
          <RadioItem value="monthly">Monthly</RadioItem>
          <RadioItem value="yearly">Yearly (save 20%)</RadioItem>
        </div>
      </RadioGroup>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <Card key={plan.id} size="md" variant={plan.highlighted ? "elevated" : "bordered"}>
            <CardHeader>
              <div className="flex flex-row items-center justify-between gap-2">
                <CardTitle>{plan.name}</CardTitle>
                {plan.highlighted && (
                  <Badge color="blue" variant="pill">Popular</Badge>
                )}
              </div>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-col items-start gap-3">
              <p className="text-2xl font-semibold">
                {billingCycle === "yearly" ? plan.yearlyPrice : plan.monthlyPrice}
                <span className="text-sm font-normal text-gray-500">
                  /{billingCycle === "yearly" ? "yr" : "mo"}
                </span>
              </p>
              <Button
                variant={plan.highlighted ? buttonVariant.Primary : buttonVariant.Secondary}
                buttonCopy={buttonCopy.SELECT_PLAN}
                onClick={() => addToast("success", `Switched to the ${plan.name} plan.`)}
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
