

interface CardProps {
  children: React.ReactNode
  size: "sm" | "md" | "lg" | "xl"
}

interface CardCSSProperties extends React.CSSProperties {
  "--card-px": string
  "--card-py": string
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
}

const Card = ({children, size = "md"} : CardProps) => {
  return (
    <div style = {styleMap[size]}>
      {children}
    </div>
  )
}

export default Card