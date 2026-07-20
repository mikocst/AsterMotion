import { useState } from 'react';
import Input from '@components/Library/Input';

const InputDemo = () => {
  const [value, setValue] = useState('');

  return (
    <div className="w-full max-w-sm">
      <Input
        label="Email"
        error={false}
        placeholder="you@example.com"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default InputDemo;
