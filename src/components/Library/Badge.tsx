import React from 'react'
import { cn } from 'src/lib/utils';

const variantBadgeStyles = {
    pill: 'rounded-md',
    monoPill: 'rounded-md',
    flat: 'rounded-sm'
} as const;

const badgeColors = {
    blue: 'text-blue-500 bg-blue-100/60',
    mono: 'text-gray-500 bg-gray-100/60',
    red: 'text-red-500 bg-red-100/60',
    green: 'text-green-500 bg-green-100/60',
    yellow: 'text-yellow-500 bg-yellow-100/60'
} as const;

interface BadgeProps {
    content: string
    color: keyof typeof badgeColors
    variant: keyof typeof variantBadgeStyles
}

const Badge = ({content, color, variant}: BadgeProps) => {
  return (
    <div className = {cn('inline-flex items-center px-2 text-sm font-medium', badgeColors[color], variantBadgeStyles[variant])}>
        {content}
    </div>
  )
}

export default Badge