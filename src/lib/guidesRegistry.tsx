import type { ComponentType } from 'react';

import InstallationGuide from '../layouts/docs/guides/InstallationGuide';

export interface GuideEntry {
  slug: string;
  name: string;
  description: string;
  Content: ComponentType;
}

export const guidesRegistry: GuideEntry[] = [
  {
    slug: 'installation',
    name: 'Installation',
    description: 'Add AsterMotion to your project as an npm package.',
    Content: InstallationGuide,
  },
];
