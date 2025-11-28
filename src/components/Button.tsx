import {motion} from 'motion/react';


const Button = () => {
    const MotionButton = motion('button');
    return (
        <MotionButton
            whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
            Click Me
        </MotionButton>
    )
}

export default Button;