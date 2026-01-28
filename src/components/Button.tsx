import {motion} from 'motion/react';
import { buttonCopy, buttonVariant } from '@types';

interface ButtonProps {
    buttonCopy?: buttonCopy;
    children?: React.ReactNode
    variant: buttonVariant;
    onClick?: () => void;
}

  const MotionButton = motion.create('button');

const Button = ({buttonCopy, variant, onClick, children}: ButtonProps) => {
    const variantStyles = {
        [buttonVariant.Primary]: 'bg-primary text-white rounded-md px-4 py-2',
        [buttonVariant.Secondary]: 'bg-gray-50 border border-gray-100 text-primary rounded-md px-4 py-2',
        [buttonVariant.Icon]: 'bg-gray-50 border border-gray-100 rounded-xl p-2'
    };

    const hoverVariants = {
        [buttonVariant.Primary]: { backgroundColor: '#0f327c' },
        [buttonVariant.Secondary]: { backgroundColor: '#f3f4f6', borderColor: '#e5e7eb' },
        [buttonVariant.Icon]: { backgroundColor: '#f3f4f6', borderColor: '#e5e7eb' }
    }
    return (
        <MotionButton
            onClick={onClick}
            whileHover={hoverVariants[variant]}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={`font-medium ${variantStyles[variant]}`}
        >
            {buttonCopy}
            {children}
        </MotionButton>
    )
}

export default Button;