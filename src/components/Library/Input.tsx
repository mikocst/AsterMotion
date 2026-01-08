import { motion} from 'motion/react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error: string | boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const variantInputStyles = {
    error: 'border-red-500 focus:ring-2 focus-ring-red-300',
    normal: 'border-gray-200 focus:ring-2 focus-ring-blue-300',
    disabled: 'bg-gray-50 border-gray-100 cursor-not-allowed text-gray-100'
}

const Input = ({label, error, ...props}: InputProps) => {

    function getInputStyles() {
        const baseStyles = ["px-3", "py-2", "rounded-md", "border"];
        if (props.disabled) {
             baseStyles.push(variantInputStyles.disabled);
        }
        else if (error) {
             baseStyles.push(variantInputStyles.error);
        }
        else {
             baseStyles.push(variantInputStyles.normal);
        }
        return baseStyles.join(' ');
    }

  return (
    <div className = "flex flex-col gap-1">
        <label
        className = "font-medium text-gray-700"
        htmlFor={props.id}
        >
            {label}
        </label>
        <input 
        className = {getInputStyles()}
        {...props}
        /> 
    </div>
  )
}

export default Input