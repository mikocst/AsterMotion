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
  code: Record<string, string>;
}

const trimFiles = (files: Record<string, string>) =>
  Object.fromEntries(Object.entries(files).map(([name, code]) => [name, code.trim()]));

const rawRegistry: DocEntry[] = [
  {
    slug: 'accordion',
    name: 'Accordion',
    description:"I thought the accordion would’ve been a bit more challenging and at first I was having trouble until I mapped it all out in my head of linking the animation of the chevron to the appearance of the content. I’m still iterating and deciding whether I want borders on each of the items but I’m leaning towards taking them out. The reason I’m leaning towards taking these out is because as the accordion content populates, the line is pushed creating this awkward state in the UI that I’m not the biggest fan of. I think the border bottom looks great when it’s just the accordion headers but not great when content is exposed. So therefore, it will be eliminated.",
    Demo: AccordionDemo,
    code: trimFiles({ 'Accordion.tsx': accordionCode }),
  },
  {
    slug: 'badge',
    name: 'Badge',
    description: "3 variants of this component were created in order to address most scenarios I’ve seen badges used: pill, mono-pilled, and flat. Badges are either already included in the element or dynamically deleted / added (filters, tags, etc.) The badge component is a case where no interaction or animation is necessary. An animation would cause the element to stick out too much for its intended purpose and an interaction would cause the adding / deleting of badges to feel sluggish. ",
    Demo: BadgeDemo,
    code: trimFiles({ 'Badge.tsx': badgeCode }),
  },
  {
    slug: 'breadcrumb',
    name: 'Breadcrumb',
    description: "This component can be configured based on the max items, icons, items, and render item props. The only animations present are hover animations and the opening of the collapsed menu through the ellipsis since this component primarily serves as navigation, animations are at a minimum here. Given the nature of the ellipsis button opening a menu, that component is only rendered if the length of items is greater than the enforced max items coupled with an ease out animation that feels on par to the feeling of opening something on your phone.",
    Demo: BreadcrumbDemo,
    code: trimFiles({
      'Breadcrumb.tsx': breadcrumbCode,
      'BreadcrumbStart.tsx': breadcrumbStartCode,
      'BreadcrumbStandard.tsx': breadcrumbStandardCode,
      'BreadcrumbEnd.tsx': breadcrumbEndCode,
    }),
  },
  {
    slug: 'card',
    name: 'Card',
    description: "The card was one of the more interesting cases when I was architecting this component. Originally, I was going to make a record and have defined styles for the card. After further analysis, there could be a case where thousands of cards could be used either for a eCommerece page or blog page or if a user wanted to create a full image card or partial image card. I concluded that component having flexible styling and content would be a better approach given those use cases.",
    Demo: CardDemo,
    code: trimFiles({
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
    description: "The carousel was one of the initial components I started on. As I went through the journey of creating this design system, I found it was better for the items to have a react node typing so that the carousel items can take in either content or images depending on the developer’s preference. In future versions, I plan to have variations for the current version and a version that takes up the full width and height of the parent container.",
    Demo: CarouselDemo,
    code: trimFiles({
      'Carousel.tsx': carouselCode,
      'CarouselContent.tsx': carouselContentCode,
      'CarouselItem.tsx': carouselItemCode,
    }),
  },
  {
    slug: 'input',
    name: 'Input',
    description: "Inputs are fairly simple and minimal but when it came to scaling this for production/scalability, it became apparent that there was a huge gap between the components I made previously versus what went into this one. There were so many states and factors to consider such as a developer jumping in and adding in any native html props without prop bombing my component. Another factor that I thought was important that I neglected in the past was accessibility through keyboard navigation. I have to go back and implement those features in the previous components and check if any other components need refs. Lastly, I thought it was really cool to dig into state management and understanding how to manually sort out styling priority depending on state versus utilizing twmerge and clsx like I have in the past without really knowing why it worked in the first place.",
    Demo: InputDemo,
    code: trimFiles({ 'Input.tsx': inputCode }),
  },
  {
    slug: 'modal',
    name: 'Modal',
    description: "Because a modal is a result of a decisive user decision, I opted to include a subtle opacity animation with an ease out curve. A spring or ease in out curve would feel like the component is jumping out at the user instead of smoothly transitioning into its reveal. I believe there’s possibility for a small scale shift when the element enters and leaves but the scale should not be less than 0.95 to prevent the component from jumping at you. I chose to build a custom hook to ensure the component remains headless utility allowing for users to assign refs by themselves or decide what triggers the opening of the dialog.",
    Demo: ModalDemo,
    code: trimFiles({ 'Modal.tsx': modalCode }),
  },
  {
    slug: 'pagination',
    name: 'Pagination',
    description: 'The most challenging aspect was deciding whether or not the double ellipsis was necessaary. I concluded on making this conditional if the items needed exceeded a certain number. I think this approach makes the component versatile for anyone to use which is why I stuck with this approach.',
    Demo: PaginationDemo,
    code: trimFiles({
      'Pagination.tsx': paginationCode,
      'PaginationContent.tsx': paginationContentCode,
      'PaginationPrevious.tsx': paginationPreviousCode,
      'PaginationNext.tsx': paginationNextCode,
    }),
  },
  {
    slug: 'radio-group',
    name: 'Radio Group',
    description: "Not the flashiest of components, but this is where my love for functional interaction design comes into play. I created a hover interaction where a user can start the animation by hovering any of the bubbles. Whether you go up or down, the bubble seems to follow you to the next one displaying interactivity and a sense of direction since the hover bubble follows mouse movement.",
    Demo: RadioGroupDemo,
    code: trimFiles({ 'RadioGroup.tsx': radioGroupCode, 'RadioItem.tsx': radioItemCode }),
  },
  {
    slug: 'switch',
    name: 'Switch',
    description: "The Switch component prioritizes instantaneous state reflection. I opted for a calibrated `ease-out` curve rather than a physics-based `spring`. While springs offer a delightful 'bounce,' they introduce perceived latency in a binary toggle where the user expects immediate confirmation. Since this component is triggered by a click rather than a gesture-based drag, the 'bounce' felt disconnected from the user's physical input. Technically, I omitted internal symbols (like 'on/off' icons) to favor component composability. By keeping the 'thumb' and 'track' as clean primitives, the library remains unopinionated. This shifts the responsibility of branding to the implementation layer, ensuring the component doesn't become 'prop-heavy' as users request different icon sets or labels.",
    Demo: SwitchDemo,
    code: trimFiles({ 'Switch.tsx': switchCode }),
  },
  {
    slug: 'tabs',
    name: 'Tabs',
    description: "The tab component prioritizes content switching at a users click. I opted for the animation to be emphasized in the tab headers and a simpler animation in the body. The user can feel the responsiveness of the click and see the results aka the content easily. There is a more fun approach of creating a jelly like selected tab indicator using a spring animation but it didn’t feel associated with the user’s input to interact with the element. I omitted any images for this version this time around to focus on the core of what tabs achieve in a UI. I think going forward, there’s possibility to add an image but I would have to explore making the image an optional prompt in the case that the user only has text content to offer within the tabs. Side note, this component is where I learned about utilizing layoutId, layout, key, mode, and Animate Presence from motion.dev. I think the biggest thing that I wasn’t understanding at first was the pill ui that I have when selecting the tab and having it move to the next selected item. It was a nice combination of utilizing state and an animation library to make a fleshed-out component.",
    Demo: TabsDemo,
    code: trimFiles({ 'Tabs.tsx': tabsCode }),
  },
  {
    slug: 'toast',
    name: 'Toast',
    description: 'Heavily inspired by sonner and I wanted to recreate this component to understand why it is structured the way it is and what goes into the interaction design here since Emil is an amazing interaction designer.',
    Demo: ToastDemo,
    code: trimFiles({
      'Toast.tsx': toastCode,
      'ToastContext.tsx': toastContextCode,
      'Toaster.tsx': toasterCode,
    }),
  },
];

export const docsRegistry: DocEntry[] = [...rawRegistry].sort((a, b) => a.name.localeCompare(b.name));
