import React from 'react'

const variantBadgeStyles = {
    pill: 'rounded-md',
    monoPill: 'rounded-md',
    flat: 'rounded-sm'
} as const;

const badgeColors = {
    blue: 'text-blue-500 bg-blue-100',
    mono: 'text-gray-500 bg-gray-100',
    red: 'text-red-500 bg-red-100',
    green: 'text-green-500 bg-green-100',
    yellow: 'text-yellow-500 bg-yellow-100'
} as const;

interface BadgeProps {
    content: string
    color: keyof typeof badgeColors
    variant: keyof typeof variantBadgeStyles
}

const Badge = ({content, color, variant}: BadgeProps) => {
  return (
    <div className = "">
        {content}
    </div>
  )
}

export default Badge