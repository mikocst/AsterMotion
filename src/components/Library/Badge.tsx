import React from 'react'
import { cn } from 'src/lib/utils';

const variantBadgeStyles = {
    pill: 'rounded-md',
    monoPill: 'rounded-md',
    flat: 'rounded-sm'
} as const;

const badgeColors = {
    blue: 'text-blue-500 bg-blue-100/60 border border-blue-300',
    mono: 'text-gray-500 bg-gray-100/60 border-gray-300',
    red: 'text-red-500 bg-red-100/60 border-red-300',
    green: 'text-green-500 bg-green-100/60 border-green-300',
    yellow: 'text-yellow-500 bg-yellow-100/60 border-yellow-300'
} as const;

interface BadgeProps extends React.ComponentPropsWithoutRef<'div'> {
    color: keyof typeof badgeColors
    variant: keyof typeof variantBadgeStyles
}

const Badge = ({color, variant, children, ...rest}: BadgeProps) => {
  return (
    <div 
    className = {
        cn('inline-flex items-center px-2 text-sm font-medium',
        badgeColors[color],
        variantBadgeStyles[variant]
        )}
    {...rest}    
    >
       {children}
    </div>
  )
}

export default Badge