import type { ComponentType } from 'react';

import AccordionDemo from '../layouts/docs/demos/AccordionDemo';
import BadgeDemo from '../layouts/docs/demos/BadgeDemo';
import BreadcrumbDemo from '../layouts/docs/demos/BreadcrumbDemo';
import CardDemo from '../layouts/docs/demos/CardDemo';
import CarouselDemo from '../layouts/docs/demos/CarouselDemo';
import InputDemo from '../layouts/docs/demos/InputDemo';
import ModalDemo from '../layouts/docs/demos/ModalDemo';
import PaginationDemo from '../layouts/docs/demos/PaginationDemo';
import RadioGroupDemo from '../layouts/docs/demos/RadioGroupDemo';
import SwitchDemo from '../layouts/docs/demos/SwitchDemo';
import TabsDemo from '../layouts/docs/demos/TabsDemo';
import ToastDemo from '../layouts/docs/demos/ToastDemo';

import accordionCode from '@components/Library/Accordion.tsx?raw';
import badgeCode from '@components/Library/Badge.tsx?raw';
import switchCode from '@components/Library/Switch.tsx?raw';
import tabsCode from '@components/Library/Tabs.tsx?raw';
import inputCode from '@components/Library/Input.tsx?raw';
import modalCode from '@components/Library/Modal.tsx?raw';

import breadcrumbCode from '@components/Library/Breadcrumb/Breadcrumb.tsx?raw';
import breadcrumbStartCode from '@components/Library/Breadcrumb/BreadcrumbStart.tsx?raw';
import breadcrumbStandardCode from '@components/Library/Breadcrumb/BreadcrumbStandard.tsx?raw';
import breadcrumbEndCode from '@components/Library/Breadcrumb/BreadcrumbEnd.tsx?raw';

import cardCode from '@components/Library/Cards/Card.tsx?raw';
import cardHeaderCode from '@components/Library/Cards/CardHeader.tsx?raw';
import cardTitleCode from '@components/Library/Cards/CardTitle.tsx?raw';
import cardDescriptionCode from '@components/Library/Cards/CardDescription.tsx?raw';
import cardFooterCode from '@components/Library/Cards/CardFooter.tsx?raw';

import carouselCode from '@components/Library/Carousel/Carousel.tsx?raw';
import carouselContentCode from '@components/Library/Carousel/CarouselContent.tsx?raw';
import carouselItemCode from '@components/Library/Carousel/CarouselItem.tsx?raw';

import paginationCode from '@components/Library/Pagination/Pagination.tsx?raw';
import paginationContentCode from '@components/Library/Pagination/PaginationContent.tsx?raw';
import paginationPreviousCode from '@components/Library/Pagination/PaginationPrevious.tsx?raw';
import paginationNextCode from '@components/Library/Pagination/PaginationNext.tsx?raw';

import radioGroupCode from '@components/Library/RadioGroup/RadioGroup.tsx?raw';
import radioItemCode from '@components/Library/RadioGroup/RadioItem.tsx?raw';

import toastCode from '@components/Library/Toast/Toast.tsx?raw';
import toastContextCode from '@components/Library/Toast/ToastContext.tsx?raw';
import toasterCode from '@components/Library/Toast/Toaster.tsx?raw';

export interface DocEntry {
  slug: string;
  name: string;
  description: string;
  Demo: ComponentType;
  code: string;
}

const joinFiles = (files: Record<string, string>) =>
  Object.entries(files)
    .map(([name, code]) => `// ${name}\n${code.trim()}`)
    .join('\n\n');

const rawRegistry: DocEntry[] = [
  {
    slug: 'accordion',
    name: 'Accordion',
    description:
      'A vertically stacked set of interactive headings that reveal or hide associated content, with keyboard navigation and an animated height transition.',
    Demo: AccordionDemo,
    code: joinFiles({ 'Accordion.tsx': accordionCode }),
  },
  {
    slug: 'badge',
    name: 'Badge',
    description: 'A small label used to highlight status, category, or metadata.',
    Demo: BadgeDemo,
    code: joinFiles({ 'Badge.tsx': badgeCode }),
  },
  {
    slug: 'breadcrumb',
    name: 'Breadcrumb',
    description: 'Displays the path to the current page and collapses long paths behind an expandable menu.',
    Demo: BreadcrumbDemo,
    code: joinFiles({
      'Breadcrumb.tsx': breadcrumbCode,
      'BreadcrumbStart.tsx': breadcrumbStartCode,
      'BreadcrumbStandard.tsx': breadcrumbStandardCode,
      'BreadcrumbEnd.tsx': breadcrumbEndCode,
    }),
  },
  {
    slug: 'card',
    name: 'Card',
    description: 'A container for grouping related content, composed from header, title, description, and footer parts.',
    Demo: CardDemo,
    code: joinFiles({
      'Card.tsx': cardCode,
      'CardHeader.tsx': cardHeaderCode,
      'CardTitle.tsx': cardTitleCode,
      'CardDescription.tsx': cardDescriptionCode,
      'CardFooter.tsx': cardFooterCode,
    }),
  },
  {
    slug: 'carousel',
    name: 'Carousel',
    description: 'A motion-driven slideshow for cycling through a set of items with previous and next controls.',
    Demo: CarouselDemo,
    code: joinFiles({
      'Carousel.tsx': carouselCode,
      'CarouselContent.tsx': carouselContentCode,
      'CarouselItem.tsx': carouselItemCode,
    }),
  },
  {
    slug: 'input',
    name: 'Input',
    description: 'A labeled text input with built-in error messaging.',
    Demo: InputDemo,
    code: joinFiles({ 'Input.tsx': inputCode }),
  },
  {
    slug: 'modal',
    name: 'Modal',
    description: 'A dialog overlay for confirmations, backed by the native dialog element with an animated fade.',
    Demo: ModalDemo,
    code: joinFiles({ 'Modal.tsx': modalCode }),
  },
  {
    slug: 'pagination',
    name: 'Pagination',
    description: 'Page controls for navigating long lists of paged content.',
    Demo: PaginationDemo,
    code: joinFiles({
      'Pagination.tsx': paginationCode,
      'PaginationContent.tsx': paginationContentCode,
      'PaginationPrevious.tsx': paginationPreviousCode,
      'PaginationNext.tsx': paginationNextCode,
    }),
  },
  {
    slug: 'radio-group',
    name: 'Radio Group',
    description: 'A set of mutually exclusive options with an animated selection and hover indicator.',
    Demo: RadioGroupDemo,
    code: joinFiles({ 'RadioGroup.tsx': radioGroupCode, 'RadioItem.tsx': radioItemCode }),
  },
  {
    slug: 'switch',
    name: 'Switch',
    description: 'A toggle control for switching between two states.',
    Demo: SwitchDemo,
    code: joinFiles({ 'Switch.tsx': switchCode }),
  },
  {
    slug: 'tabs',
    name: 'Tabs',
    description: 'Organizes content into panels, switching between them with an animated indicator.',
    Demo: TabsDemo,
    code: joinFiles({ 'Tabs.tsx': tabsCode }),
  },
  {
    slug: 'toast',
    name: 'Toast',
    description: 'Non-blocking notifications that stack, expand on hover, and auto-dismiss.',
    Demo: ToastDemo,
    code: joinFiles({
      'Toast.tsx': toastCode,
      'ToastContext.tsx': toastContextCode,
      'Toaster.tsx': toasterCode,
    }),
  },
];

export const docsRegistry: DocEntry[] = [...rawRegistry].sort((a, b) => a.name.localeCompare(b.name));
