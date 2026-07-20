import { ToastProvider } from "@components/Library/Toast/ToastContext";
import Toaster from "@components/Library/Toast/Toaster";
import SettingsPage from "./showcase/SettingsPage";
import PricingPage from "./showcase/PricingPage";
import GalleryPage from "./showcase/GalleryPage";
import AuthPage from "./showcase/AuthPage";

const sections = [
  {
    id: "settings",
    title: "Settings",
    description: "Tabs, inputs, switches, radio group, and a modal composed into a settings page.",
    content: <SettingsPage />,
  },
  {
    id: "pricing",
    title: "Pricing",
    description: "Cards, badges, and a radio group composed into a billing page.",
    content: <PricingPage />,
  },
  {
    id: "gallery",
    title: "Gallery",
    description: "Breadcrumb, carousel, cards, pagination, and an accordion composed into a content page.",
    content: <GalleryPage />,
  },
  {
    id: "auth",
    title: "Sign in",
    description: "A card and inputs composed into an authentication form.",
    content: <AuthPage />,
  },
];

const ComponentShowcase = () => {
  return (
    <ToastProvider>
      <div className="flex flex-col w-full gap-6">
        {sections.map((section, index) => (
          <section key={section.id} className="flex flex-col gap-4">
            <div>
              <p className="text-xs font-medium tracking-wide text-gray-400 uppercase">Example</p>
              <h3 className="text-lg font-medium text-gray-800">{section.title}</h3>
              <p className="text-sm text-gray-500">{section.description}</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg sm:p-6">
              {section.content}
            </div>
            {index < sections.length - 1 && <hr className="border-gray-100" />}
          </section>
        ))}
      </div>
      <Toaster position="top-right" expandedOnHover={true} />
    </ToastProvider>
  );
};

export default ComponentShowcase;
