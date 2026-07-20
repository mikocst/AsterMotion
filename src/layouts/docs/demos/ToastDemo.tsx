import { ToastProvider, useToast } from '@components/Library/Toast/ToastContext';
import Toaster from '@components/Library/Toast/Toaster';
import Button from '@components/Button';
import { buttonVariant } from '@types';

const ToastTrigger = () => {
  const { addToast } = useToast();

  return (
    <Button
      variant={buttonVariant.Primary}
      onClick={() => addToast('success', 'Changes saved successfully.')}
    >
      Show Toast
    </Button>
  );
};

const ToastDemo = () => (
  <ToastProvider>
    <ToastTrigger />
    <Toaster position="top-right" expandedOnHover />
  </ToastProvider>
);

export default ToastDemo;
