import Card from "@components/Library/Cards/Card";
import CardHeader from "@components/Library/Cards/CardHeader";
import CardTitle from "@components/Library/Cards/CardTitle";
import CardDescription from "@components/Library/Cards/CardDescription";
import CardFooter from "@components/Library/Cards/CardFooter";
import Input from "@components/Library/Input";
import Button from "@components/Button";
import { buttonVariant, buttonCopy } from "@types";

const AuthPage = () => {
  return (
    <div className="flex justify-center w-full">
      <Card size="lg" variant="elevated" className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
          <CardDescription>Enter your email to sign in to your account.</CardDescription>
        </CardHeader>
        <div className="flex flex-col gap-4 px-[var(--card-px)]">
          <Input label="Email" error={false} placeholder="you@example.com" />
          <Input label="Password" error="Password must be at least 8 characters" placeholder="••••••••" type="password" />
        </div>
        <CardFooter className="flex flex-col items-center gap-3">
          <Button variant={buttonVariant.Primary} buttonCopy={buttonCopy.SIGN_IN} />
          <p className="text-sm text-gray-500">
            Don't have an account? <a href="#" className="text-primary font-medium">Sign up</a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthPage;
