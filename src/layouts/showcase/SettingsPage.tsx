import { useState } from "react";
import Breadcrumb from "@components/Library/Breadcrumb/Breadcrumb";
import type { BreadcrumbItem } from "@components/Library/Breadcrumb/types";
import Tabs from "@components/Library/Tabs";
import Input from "@components/Library/Input";
import Switch from "@components/Library/Switch";
import RadioGroup from "@components/Library/RadioGroup/RadioGroup";
import RadioItem from "@components/Library/RadioGroup/RadioItem";
import Modal from "@components/Library/Modal";
import Button from "@components/Button";
import { buttonVariant, buttonCopy } from "@types";
import { useToast } from "@components/Library/Toast/ToastContext";

const settingsBreadcrumb = [
  { id: "home", title: "Home", link: "#" },
  { id: "settings", title: "Settings", link: "#" },
];

const renderStaticBreadcrumbItem = (item: BreadcrumbItem) => <span>{item.title}</span>;

const notificationRows = [
  { id: "email", label: "Email notifications" },
  { id: "push", label: "Push notifications" },
  { id: "digest", label: "Weekly digest" },
];

const dialogContent = "Are you sure you want to make these changes? This action cannot be undone.";

const ProfileTab = () => {
  const { addToast } = useToast();

  return (
    <div className="flex flex-col gap-4 pt-4 max-w-sm">
      <Input label="Full name" error={false} defaultValue="Miko Castillo" />
      <Input label="Email" error={false} defaultValue="miko@astermotion.dev" />
      <div>
        <Button
          variant={buttonVariant.Primary}
          buttonCopy={buttonCopy.SAVE_CHANGES}
          onClick={() => addToast("success", "Profile updated.")}
        />
      </div>
    </div>
  );
};

const PlanTab = () => {
  const [plan, setPlan] = useState("pro");

  return (
    <div className="flex flex-col gap-1 pt-4">
      <RadioGroup value={plan} onValueChange={setPlan} name="settings-plan">
        <RadioItem value="free">Free</RadioItem>
        <RadioItem value="pro">Pro</RadioItem>
        <RadioItem value="team">Team</RadioItem>
      </RadioGroup>
    </div>
  );
};

const NotificationsTab = () => {
  return (
    <div className="flex flex-col gap-3 pt-4 max-w-sm">
      {notificationRows.map((row) => (
        <div key={row.id} className="flex flex-row items-center justify-between gap-4">
          <span className="text-sm text-gray-700">{row.label}</span>
          <Switch />
        </div>
      ))}
    </div>
  );
};

const SettingsPage = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Breadcrumb items={settingsBreadcrumb} renderItem={renderStaticBreadcrumbItem} />
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-medium">Settings</h3>
        <p className="text-sm text-gray-500">Manage your profile, plan, and notification preferences.</p>
      </div>

      <Tabs
        tabs={[
          { title: "Profile", content: <ProfileTab /> },
          { title: "Plan", content: <PlanTab /> },
          { title: "Notifications", content: <NotificationsTab /> },
        ]}
      />

      <div className="flex flex-col gap-1 pt-4 border-t border-gray-100">
        <h4 className="text-sm font-medium text-gray-700">Danger zone</h4>
        <p className="text-sm text-gray-500">Review changes before they're applied to your account.</p>
        <div className="pt-1">
          <Modal content={dialogContent} />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
