import {motion} from 'motion/react';
import { buttonCopy } from '../types/types';

interface ButtonProps {
    buttonCopy: buttonCopy;
}

const Button = ({buttonCopy}: ButtonProps) => {
    const MotionButton = motion('button');
    return (
        <MotionButton
            whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
            {buttonCopy}
        </MotionButton>
    )
}

export default Button;