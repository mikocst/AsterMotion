import { cn } from "src/lib/utils"
import { useRef, useId } from "react"


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error: string | boolean;
    ref: React.Ref<HTMLInputElement>;
}

const variantInputStyles = {
    error: 'border-red-500 focus:ring-2 focus-ring-red-300',
    normal: 'border-gray-200 focus:ring-2 focus-ring-blue-300',
    disabled: 'bg-gray-50 border-gray-100 cursor-not-allowed text-gray-100'
}

const Input = ({label, error, ref, ...props}: InputProps) => {

    const generatedId = useId();
    const inputId = props.id || generatedId;

    function getInputStyles() {
        const styles = [];
        if (props.disabled) {
            styles.push(variantInputStyles.disabled);
        }
        else if (error) {
             styles.push(variantInputStyles.error);
        }
        else {
             styles.push(variantInputStyles.normal);
        }
        return styles.join(' ');
    }

  return (
    <div className = "flex flex-col gap-1">
        <label
        className = "font-medium text-gray-700"
        htmlFor={inputId}
        >
            {label}
        </label>
        <input
        {...props}
        ref={ref}
        id={inputId}
        aria-invalid = {!!error}
        aria-describedby= {error ? `${inputId}-error` : undefined}
        className = {cn("px-3 py-2 rounded-md border",
            getInputStyles())}
        />
        {error && typeof error === 'string' && (
            <p
            className = "text-sm text-red-600 mt-1"
            id = {`${inputId}-error`}
            >
                {error}
            </p> 
        )}
    </div>
  )
}

export default Input