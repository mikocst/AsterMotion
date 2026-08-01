import CodeBlock from '@components/Library/CodeBlock';

const InstallationGuide = () => {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-primary">1. Install the package</h2>
        <p className="max-w-[65ch] text-gray-500">
          AsterMotion is published to npm as <code className="text-sm">astermotion</code>. Install it with your
          package manager of choice.
        </p>
        <CodeBlock
          files={{
            npm: 'npm install astermotion',
            pnpm: 'pnpm add astermotion',
            yarn: 'yarn add astermotion',
          }}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-primary">2. Install peer dependencies</h2>
        <p className="max-w-[65ch] text-gray-500">
          Components are built with React and animated with{' '}
          <code className="text-sm">motion</code>. These are declared as peer dependencies rather than bundled, so
          your project controls the versions.
        </p>
        <CodeBlock files={{ npm: 'npm install react react-dom motion' }} />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-primary">3. Import the stylesheet</h2>
        <p className="max-w-[65ch] text-gray-500">
          Components use pre-compiled utility classes for the AsterMotion theme, so no Tailwind setup is required on
          your end. Import the stylesheet once, near the root of your app.
        </p>
        <CodeBlock files={{ 'main.tsx': "import 'astermotion/style.css';" }} />
        <p className="max-w-[65ch] text-sm text-gray-400">
          Note: the shipped styles use AsterMotion's fixed brand colors and font — they are not themed through your
          own Tailwind config.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-primary">4. Use a component</h2>
        <p className="max-w-[65ch] text-gray-500">Import any component directly from the package.</p>
        <CodeBlock
          files={{
            'App.tsx': `import { Button, buttonVariant } from 'astermotion';

function App() {
  return <Button variant={buttonVariant.Primary}>Get Started</Button>;
}`,
          }}
        />
      </section>
    </div>
  );
};

export default InstallationGuide;
