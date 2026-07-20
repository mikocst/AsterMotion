import { cn } from "src/lib/utils"

interface CardCSSProperties extends React.CSSProperties {
  "--card-px": string
  "--card-py": string
}

interface CardProps extends React.ComponentPropsWithRef<"div"> {
  variant?: keyof typeof cardStyles.variant;
  behavior?: keyof typeof cardStyles.behavior;
  children: React.ReactNode
  size: "sm" | "md" | "lg" | "xl"
}

const styleMap: Record<CardProps["size"], CardCSSProperties> = {
  sm: {
        "--card-px": "1rem",
        "--card-py": "1rem",
      },
  md: {
      "--card-px": "1.5rem",
      "--card-py": "1.5rem",
      },
  lg: {
      "--card-px": "2rem",
      "--card-py": "2rem",
    },
  xl: {
    "--card-px": "2.5rem",
    "--card-py": "2.5rem",
    }
};

const cardStyles = {
  variant: {
    bordered: "rounded-md border border-border bg-card",
    flat: "rounded-md bg-muted/50 border border-transparent",
    elevated: "rounded-md bg-card border border-border/50 shadow-sm"
  },
  behavior: {
    static: "",
    interactive: "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
  }
};

const Card = ({
  children,
  ref,
  className,
  style,
  size = "md",
  variant = "bordered",
  behavior = "static",
  ...props} : CardProps) => {
  return (
    <div 
    className = {cn(cardStyles.variant[variant], cardStyles.behavior[behavior], className)}
    style = {{...styleMap[size], ...style}}
    ref = {ref}
    {...props}
    >
      {children}
    </div>
  )
}

export default Card