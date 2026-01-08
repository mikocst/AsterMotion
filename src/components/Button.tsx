import {motion} from 'motion/react';
import { buttonCopy, buttonVariant } from '@types';

interface ButtonProps {
    buttonCopy: buttonCopy;
    variant: buttonVariant;
}

  const MotionButton = motion.create('button');

const Button = ({buttonCopy, variant}: ButtonProps) => {
    const variantStyles = {
        [buttonVariant.Primary]: 'bg-primary text-white',
        [buttonVariant.Secondary]: 'bg-gray-50 border border-gray-100 text-primary'
    };

    const hoverVariants = {
        [buttonVariant.Primary]: { backgroundColor: '#0f327c' },
        [buttonVariant.Secondary]: { backgroundColor: '#f3f4f6', borderColor: '#e5e7eb' }
    }
    return (
        <MotionButton
            whileHover={hoverVariants[variant]}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={`px-4 py-2 rounded-md font-medium ${variantStyles[variant]}`}
        >
            {buttonCopy}
        </MotionButton>
    )
}

export default Button;