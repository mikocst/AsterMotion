import{c as u,a as w,B as s,C as p,b as h,d as g,e as f,f as I,g as b,h as v,i as C,j as P,k as R,I as T,M as k,P as N,l as S,n as D,o as M,R as B,p as m,S as A,T as l,q as j,r as E,u as O}from"./Toaster.DPjxk5gB.js";import{j as e}from"./jsx-runtime.u17CrQMm.js";import{B as n}from"./Badge.BmiyfC67.js";import{a as x}from"./index.CSo-74ve.js";const H=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Ye=u("menu",H);const L=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ke=u("x",L),V=[{name:"What is Aster.motion?",content:"Aster.motion is an open-source component library. Copy, paste, and edit the components for your own projects."},{name:"Is it free to use?",content:"Yes, every component is free to copy, paste, and edit in any project, personal or commercial."},{name:"Does it use Tailwind?",content:"Yes, every component is styled with Tailwind CSS utility classes and animated with Motion."}],z=()=>e.jsx(w,{items:V}),W=()=>e.jsxs("div",{className:"flex flex-row flex-wrap gap-2",children:[e.jsx(n,{color:"blue",variant:"pill",children:"Default"}),e.jsx(n,{color:"green",variant:"pill",children:"Success"}),e.jsx(n,{color:"red",variant:"pill",children:"Error"}),e.jsx(n,{color:"yellow",variant:"pill",children:"Warning"}),e.jsx(n,{color:"mono",variant:"flat",children:"Mono"})]}),F=[{label:"variant: pill",description:"rounded-md, the default shape for status pills.",node:e.jsxs("div",{className:"flex flex-row flex-wrap gap-2",children:[e.jsx(n,{color:"blue",variant:"pill",children:"Blue"}),e.jsx(n,{color:"green",variant:"pill",children:"Green"}),e.jsx(n,{color:"red",variant:"pill",children:"Red"}),e.jsx(n,{color:"yellow",variant:"pill",children:"Yellow"})]})},{label:"variant: monoPill",description:"same rounded-md shape, meant to pair with color: mono.",node:e.jsx(n,{color:"mono",variant:"monoPill",children:"Mono Pill"})},{label:"variant: flat",description:"rounded-sm, a sharper edge for dense filter/tag lists.",node:e.jsxs("div",{className:"flex flex-row flex-wrap gap-2",children:[e.jsx(n,{color:"mono",variant:"flat",children:"Flat"}),e.jsx(n,{color:"blue",variant:"flat",children:"Flat"})]})}],c=[{id:"1",title:"Home",link:"#"},{id:"2",title:"Docs",link:"#"},{id:"3",title:"Components",link:"#"},{id:"4",title:"Breadcrumb",link:"#"}],d=r=>e.jsx("span",{children:r.title}),G=()=>e.jsx(s,{items:c,maxItems:3,renderItem:d}),q=[{id:"1",title:"Home",link:"#"},{id:"2",title:"Docs",link:"#"},{id:"3",title:"Components",link:"#"},{id:"4",title:"Navigation",link:"#"},{id:"5",title:"Breadcrumb",link:"#"},{id:"6",title:"Examples",link:"#"}],$=[{label:"Short path (no collapse)",description:"Under maxItems, every crumb renders — no ellipsis.",node:e.jsx(s,{items:c.slice(0,3),maxItems:5,renderItem:d})},{label:"Custom separator",description:"The separator prop accepts any ReactNode in place of the default chevron.",node:e.jsx(s,{items:c,maxItems:5,separator:e.jsx("span",{className:"text-gray-300",children:"/"}),renderItem:d})},{label:"Long path (collapsed)",description:"Exceeding maxItems collapses the middle items into the ellipsis menu.",node:e.jsx(s,{items:q,maxItems:3,renderItem:d})}],X=()=>e.jsxs(p,{size:"md",variant:"elevated",className:"w-full max-w-sm bg-white border-gray-200 shadow-sm",children:[e.jsxs(h,{children:[e.jsx(g,{children:"Team Plan"}),e.jsx(f,{children:"Everything you need to collaborate with your team."})]}),e.jsx(I,{children:e.jsx(b,{buttonCopy:C.SELECT_PLAN,variant:v.Primary})})]}),i=(r,o,a,y)=>e.jsx(p,{...y,className:`w-full max-w-sm bg-white ${a}`,children:e.jsxs(h,{children:[e.jsx(g,{children:r}),e.jsx(f,{children:o})]})}),_=[{label:"variant: bordered (default)",node:i("Bordered","A simple border, no shadow.","border-gray-200",{size:"sm",variant:"bordered"})},{label:"variant: flat",node:i("Flat","Muted background, no border.","",{size:"sm",variant:"flat"})},{label:"variant: elevated",node:i("Elevated","Border plus a soft shadow.","border-gray-200/50 shadow-sm",{size:"sm",variant:"elevated"})},{label:"behavior: interactive",description:"Hover to see the lift + shadow transition.",node:i("Interactive","Hover over this card.","border-gray-200",{size:"sm",variant:"bordered",behavior:"interactive"})}],U=["Slide One","Slide Two","Slide Three"],Y=()=>e.jsx("div",{className:"w-full h-40",children:e.jsx(P,{children:U.map(r=>e.jsx(R,{id:r,item:r},r))})}),K=()=>{const[r,o]=x.useState("");return e.jsx("div",{className:"w-full max-w-sm",children:e.jsx(T,{label:"Email",error:!1,placeholder:"you@example.com",value:r,onChange:a=>o(a.target.value)})})},J=()=>e.jsx(k,{content:"This action cannot be undone. Are you sure you want to continue?"}),Q=()=>{const[r,o]=x.useState(1);return e.jsxs(N,{activePage:r,totalPages:12,onPageChange:o,children:[e.jsx(S,{}),e.jsx(D,{}),e.jsx(M,{})]})},Z=()=>e.jsxs(B,{defaultValue:"monthly",name:"billing-cycle",children:[e.jsx(m,{value:"monthly",children:"Monthly"}),e.jsx(m,{value:"yearly",children:"Yearly"})]}),ee=()=>e.jsx(A,{}),re=()=>e.jsx(l,{}),te=[{label:"Two tabs",description:"The pill and content transitions work the same regardless of tab count.",node:e.jsx(l,{tabs:[{title:"Overview",content:"A short summary lives here."},{title:"Details",content:"Longer, more specific content goes here instead."}]})},{label:"Long tab labels",description:"The header row scrolls horizontally (overflow-x-auto) instead of wrapping.",node:e.jsx(l,{tabs:[{title:"General Settings",content:"General settings content."},{title:"Notification Preferences",content:"Notification preferences content."},{title:"Billing & Invoices",content:"Billing content."}]})}],ne=()=>{const{addToast:r}=O();return e.jsx(b,{variant:v.Primary,onClick:()=>r("success","Changes saved successfully."),children:"Show Toast"})},oe=()=>e.jsxs(j,{children:[e.jsx(ne,{}),e.jsx(E,{position:"top-right",expandedOnHover:!0})]}),ae="## Props\n\n| Prop | Type | Default | Description |\n| --- | --- | --- | --- |\n| `items` | `{ name: string; content: string }[]` | — | Ordered list of entries. Each renders a trigger button (`name`) and a collapsible panel (`content`). |\n\n## Styling\n\nEach row is `flex flex-col` with a `border-b border-gray-200` separator, and the trigger is `flex flex-row justify-between` so the chevron always sits flush right regardless of title length.\n\nThe chevron rotates via a plain `animate={{ rotate: ... }}` tied to `activeIndex === index` (`-90deg` when open, `0` otherwise) — no spring, so the rotation reads as a direct response to the click rather than a bounce. The panel itself animates `height: 0 → 'auto'` inside `AnimatePresence`, both at `0.2s easeOut`.\n\nKeyboard support is wired independently of the mouse interaction: `ArrowUp`/`ArrowDown` on a focused trigger move focus to the previous/next trigger (wrapping around the ends), via refs collected in `buttonRefs`.\n\n`content` is typed as a plain `string`. If you need rich JSX inside a panel (links, lists, nested components), you'll need to widen that field to `React.ReactNode` in your own copy of the component.\n",ie="## Props\n\n| Prop | Type | Default | Description |\n| --- | --- | --- | --- |\n| `color` | `'blue' \\| 'mono' \\| 'red' \\| 'green' \\| 'yellow'` | — (required) | Selects the text/background/border token set from `badgeColors`. |\n| `variant` | `'pill' \\| 'monoPill' \\| 'flat'` | — (required) | Selects the corner radius from `variantBadgeStyles` — `pill`/`monoPill` are `rounded-md`, `flat` is `rounded-sm`. |\n| `children` | `ReactNode` | — | Badge label content. |\n| `...rest` | native `div` props | — | Spread onto the root element (e.g. `onClick`, `id`). |\n\n## Styling\n\nThe root `className` is built with `cn('inline-flex items-center px-2 text-sm font-medium', badgeColors[color], variantBadgeStyles[variant])`.\n\n**Caveat:** `{...rest}` is spread *after* `className` on the JSX element, not merged into it. If you pass your own `className` through `...rest`, it will fully replace the computed color/shape classes rather than combine with them — fork the component and route an extra `className` prop through `cn()` if you need to add utility classes alongside the built-in styling.\n\nNo motion is applied to Badge on purpose: it's meant to be glanced at (a status label) or added/removed in bulk (filters, tags), and animating it would make routine list updates feel sluggish.\n",se="## Props\n\n| Prop | Type | Default | Description |\n| --- | --- | --- | --- |\n| `items` | `BreadcrumbItem[]` (`{ id, title, link }`) | — (required) | Full path, from the root to the current page. |\n| `maxItems` | `number` | `5` (clamped to a minimum of `3`) | Once `items.length` exceeds this, the middle items collapse behind an ellipsis menu. |\n| `separator` | `ReactNode` | `<ChevronRight />` | Custom divider rendered between crumbs. |\n| `renderItem` | `(item: BreadcrumbItem) => ReactNode` | plain `<a href={item.link}>` | Override how each crumb renders — the demo on this page uses it to render static `<span>`s instead of real links. |\n\n## Styling\n\nWhen collapsing, the first item and the last `maxItems - 2` items stay visible; everything between them collapses into the ellipsis button. Clicking the ellipsis opens `CollapsedMenu` in an absolutely-positioned dropdown, animated with `opacity`/`scale: 0.95 → 1`/`y: -2 → 0` at `0.2s easeOut` — deliberately kept subtle since a breadcrumb is a navigation aid, not a focal interaction. The dropdown closes on any click outside it, tracked via a `window` click listener rather than a blur handler, so it also closes when focus moves outside the DOM entirely.\n",de="## Props\n\n**`Card`**\n\n| Prop | Type | Default | Description |\n| --- | --- | --- | --- |\n| `size` | `'sm' \\| 'md' \\| 'lg' \\| 'xl'` | — (required) | Sets the `--card-px`/`--card-py` CSS custom properties consumed by `CardHeader` and `CardFooter`. |\n| `variant` | `'bordered' \\| 'flat' \\| 'elevated'` | `'bordered'` | Background/border treatment. |\n| `behavior` | `'static' \\| 'interactive'` | `'static'` | `'interactive'` adds a hover lift, shadow, and pointer cursor. |\n| `className`, `style` | native `div` props | — | Merged via `cn()` / spread; `style` is merged on top of the generated `--card-*` variables, so you can still override them per-instance. |\n\n**`CardHeader` / `CardFooter` / `CardTitle` / `CardDescription`**\n\nPlain content wrappers (`div`, `div`, `h3`, `p`) — no props beyond native HTML attributes plus `className`. `CardHeader`/`CardFooter` read the `--card-px`/`--card-py` variables set by the parent `Card`, so their padding always stays in sync with `size` without needing a `size` prop of their own.\n\n## Styling\n\n`size` doesn't set padding directly on `Card` — it sets CSS custom properties that `CardHeader` (`pt-[var(--card-py)] px-[var(--card-px)]`) and `CardFooter` (`pb-[var(--card-py)] px-[var(--card-px)]`) read. This is why padding stays consistent even though the card's own body content sits between header and footer with no padding utility of its own — compose your card content between `CardHeader` and `CardFooter` rather than adding raw padding to `Card` itself.\n",le='## Props\n\n**`Carousel`** — `children?: ReactNode` (composed of one or more `CarouselItem` elements).\n\n**`CarouselItem`**\n\n| Prop | Type | Default | Description |\n| --- | --- | --- | --- |\n| `item` | `ReactNode` | — (required) | Content or image rendered inside the slide. |\n| `id` | `string` | — (required) | Stable identifier used to register the item with the parent `Carousel`. |\n\n## Styling\n\n`CarouselItem`s register themselves with the parent via context (`registerItem`/`deregisterItem` in a mount/unmount `useEffect`), so `Carousel` derives the total item count from whoever is actually rendered rather than a prop you have to keep in sync. A `ResizeObserver` on the track measures `itemWidth` once, and every item is rendered at that fixed width so the track can slide by simple multiples of it (`x: -(activeIndex * itemWidth)`, `0.3s easeOut`).\n\nThe non-active items are visually pushed back with `scale: 0.95` and a `blur(10px)` filter (`0.2s easeInOut`) — this is what communicates "not the current slide" instead of a dimmed overlay or opacity change, and doubles as a subtle depth cue during the slide transition. The prev/next arrows are the shared `Button` component in its `Icon` variant, so they inherit the same hover/tap feedback as icon buttons elsewhere in the library.\n',ce="## Props\n\n| Prop | Type | Default | Description |\n| --- | --- | --- | --- |\n| `label` | `string` | — (required) | Rendered as a `<label htmlFor>` above the field. |\n| `error` | `string \\| boolean` | — (required) | Truthy switches to the red error style. A `string` value is also rendered as helper text below the input; `true` shows only the red border with no message. |\n| `ref` | `Ref<HTMLInputElement>` | — | React 19 ref-as-prop — no `forwardRef` wrapper needed. |\n| `...rest` | native `input` props | — | Spread directly onto the `<input>` (`type`, `placeholder`, `disabled`, `onChange`, etc.). |\n\n## Styling\n\nState styling is resolved with a fixed priority, not combined: `disabled` is checked first, then `error`, then the `normal` style (see `getInputStyles()`). A disabled+error input will always render as disabled — the red error border never shows through.\n\n`aria-invalid` and `aria-describedby` are derived automatically from `error`, and the field's `id` falls back to a generated `useId()` when you don't pass one — the error message's `id` (`${inputId}-error`) is wired to `aria-describedby` for you, so screen readers announce it without any extra props.\n",me="## Props\n\n| Prop | Type | Default | Description |\n| --- | --- | --- | --- |\n| `content` | `string` | — (required) | Body copy shown in the confirmation dialog. |\n| `isOpen` | `boolean` | uncontrolled internal state | Optional external control — falls back to internal state when omitted (`externalOpen ?? dialogOpen`). |\n| `ref` | `Ref<HTMLDialogElement>` | — | Merged with the component's own internal ref via `useMergedRefs`, so you still get a handle on the native `<dialog>`. |\n| `...props` | `HTMLMotionProps<'dialog'>` | — | Spread onto the underlying `motion.dialog`. |\n\n## Styling\n\nModal is built on a real `<dialog>` element (`showModal()` / `close()`), not a positioned `div` overlay, so it gets native focus trapping and top-layer stacking for free. Closing is sequenced deliberately: the exit animation (`opacity: 1 → 0`, `0.2s easeOut`) plays first, and only once it finishes (`onAnimationComplete`) does the code call `dialog.close()` — closing the native element immediately would cut the fade short. Clicking outside the dialog's content closes it by comparing the click coordinates to `getBoundingClientRect()`, since a `<dialog>`'s backdrop click target isn't otherwise easy to distinguish from its content.\n\nThe scale/opacity entrance never dips below `0.95` — smaller reads as the dialog \"lunging\" at the user, which is exactly wrong for a decisive confirmation. The component currently ships its own trigger button and fixed \"Confirm Changes\" copy/actions — treat it as a template to fork for app-specific confirmation flows rather than a fully generic primitive.\n",ue="## Props\n\n**`Pagination`**\n\n| Prop | Type | Default | Description |\n| --- | --- | --- | --- |\n| `activePage` | `number` | — (required) | Current page (1-indexed). |\n| `totalPages` | `number` | — (required) | Total number of pages. |\n| `maxButtons` | `number` | `5` | Maximum number of page buttons shown before collapsing into ellipses. |\n| `onPageChange` | `(page: number) => void` | — (required) | Called with the target page whenever a page button, or Previous/Next, is activated. |\n| `children` | `ReactNode` | — | Composed of `PaginationContent`, `PaginationPrevious`, `PaginationNext`. |\n\n**`PaginationContent` / `PaginationPrevious` / `PaginationNext`** — no props. Each reads `activePage`, `totalPages`, and `onPageChange` from context, so they must be rendered inside `<Pagination>`.\n\n## Styling\n\nThe page-number logic lives in `generatePaginationRange()` (exported from `PaginationContext.tsx`), decoupled from rendering — it decides between showing no ellipsis, one ellipsis (near either end), or two ellipses (in the middle of a long range) based purely on how close `activePage` is to `1` and `totalPages`. `PaginationPrevious`/`PaginationNext` disable themselves automatically at the first/last page, switching to a muted gray and `cursor-not-allowed` rather than hiding — keeping the control's position stable as the user pages through.\n",pe="## Props\n\n**`RadioGroup`**\n\n| Prop | Type | Default | Description |\n| --- | --- | --- | --- |\n| `value` | `string` | — | Controlled selected value. |\n| `defaultValue` | `string` | — | Initial value when uncontrolled. |\n| `onValueChange` | `(value: string) => void` | — | Called when the selection changes. |\n| `name` | `string` | generated via `useId()` | Native `name` shared by all `RadioItem`s so browser radio grouping works without manual wiring. |\n\n**`RadioItem`** (extends `InputHTMLAttributes<HTMLInputElement>`)\n\n| Prop | Type | Default | Description |\n| --- | --- | --- | --- |\n| `value` | `string` | — (required) | This item's value, compared against the group's selected value. |\n| `id` | `string` | generated via `useId()` | Native `id`, also used as the item's registration key. |\n| `children` | `ReactNode` | falls back to `value` | Label content. |\n\n## Styling\n\nA real `<input type=\"radio\">` sits invisibly (`opacity-0`) on top of the visual circle, so keyboard navigation, form submission, and screen readers all work exactly as they would for native radios — the visible dot/ring is purely decorative motion layered on top (`scale`/`opacity`, `0.15s easeOut`).\n\nThe hover \"bubble\" that appears behind whichever item you're pointing at travels *toward* your mouse: each item registers its index on mount, and when the hovered index changes, the group compares it to the previous one to derive a direction (`'up'`/`'down'`), which flips the bubble's enter/exit offset accordingly — the bubble always animates from the direction you're moving, not from a fixed origin.\n",he="## Props\n\nSwitch currently takes **no props** — `isOn` is internal (`useState(true)`), so this ships as a fixed, uncontrolled demo primitive rather than a controllable form component. To use it in a real form, add `checked`/`defaultChecked`/`onCheckedChange` props and apply the same controlled-with-fallback pattern used by `RadioGroup` and `Modal` (`external ?? internal` state).\n\n## Styling\n\nThe track's background color cross-fades directly (`animate={{ backgroundColor }}`), while the thumb's `translateX` uses a `spring` (`stiffness: 300, damping: 30`) — the one place in the library a spring drives a click-triggered toggle rather than a hover/drag gesture. It's intentional here because the motion represents a physical slide from one side to the other, not a decision being confirmed; contrast with Modal or Accordion, which use `easeOut` specifically because a spring's bounce would read as latency on a binary state change.\n",ge='## Props\n\n| Prop | Type | Default | Description |\n| --- | --- | --- | --- |\n| `tabs` | `{ title: string; content: ReactNode }[]` | 3 built-in demo tabs | Tab list. Each `content` renders in the body when its tab is active. |\n\n## Styling\n\nThe active-tab indicator is a shared-layout pill (`layoutId="pill"`, `layout`, `0.3s easeInOut`) — Motion animates it *between* tab headers rather than fading a new one in, which is what makes it read as one element moving instead of two elements crossfading. The body content below cross-fades on `opacity` (`0.2s easeOut`) inside `AnimatePresence mode="wait"`, keyed on the active tab index, so the outgoing content fully exits before the incoming content mounts — never both visible at once.\n\nThe tab header row is `overflow-x-auto` rather than wrapping, so a long tab set scrolls horizontally instead of growing to multiple lines.\n',fe="## Props\n\n**`useToast()`** (call inside a `<ToastProvider>`) — returns `{ addToast(toastType, description), dismissToast(id) }`.\n\n| Concept | Type | Default | Description |\n| --- | --- | --- | --- |\n| `toastType` | `'default' \\| 'description' \\| 'success' \\| 'info' \\| 'warning' \\| 'error' \\| 'custom'` | — | Selects an icon + color treatment from `toastMap`. Only `'description'` renders the optional `header` text. |\n\n**`Toaster`**\n\n| Prop | Type | Default | Description |\n| --- | --- | --- | --- |\n| `position` | `'top-left' \\| 'top-right' \\| 'top-center' \\| 'bottom-left' \\| 'bottom-right' \\| 'bottom-center'` | `'bottom-right'` | Corner/edge the stack anchors to. |\n| `expandedOnHover` | `boolean` | `true` | Whether hovering the stack fans the toasts apart instead of leaving them collapsed. |\n\n## Styling\n\nThe queue caps at 3 toasts — adding a 4th drops the oldest. Stacked (non-hovered) toasts are pushed back by their distance from the newest: each one scales down an extra `5%` and offsets `10px` per position back in the stack. Hovering expands that offset to `64px` so every toast becomes fully readable, using a `spring(stiffness: 300, damping: 30)` for the resulting movement. Hovering also pauses each toast's 4-second auto-dismiss timer, so you can't have a toast disappear out from under your cursor while reading it.\n",be=`import { ChevronLeft } from "lucide-react";\r
import {AnimatePresence, motion} from 'motion/react';\r
import { useState, useId, useRef } from "react";\r
\r
interface AccordionProps {\r
    items: Array<{\r
        name: string\r
        content: string\r
    }>\r
}\r
\r
const MotionDiv = motion.create('div');\r
const MotionChevronLeft = motion.create(ChevronLeft);\r
\r
const Accordion = ({ items}: AccordionProps) => {\r
  const generatedId = useId();\r
  const [activeIndex, setActiveIndex] = useState<number | null>(null);\r
  const buttonRefs = useRef<HTMLButtonElement[]>([])\r
\r
  const toggleAccordionItem = (index:number) => {\r
    if(activeIndex === index) {\r
        setActiveIndex(null);\r
    } else {\r
        setActiveIndex(index);\r
    }\r
}\r
\r
const handleKeyDown = (e: React.KeyboardEvent, index:number) => {\r
    let nextIndex = 0;\r
    if(e.key === 'ArrowUp'){\r
        e.preventDefault();\r
        nextIndex = (index - 1 + items.length) % items.length\r
        buttonRefs.current[nextIndex].focus();\r
    }\r
\r
    else if (e.key === 'ArrowDown'){\r
         e.preventDefault();\r
         nextIndex = (index + 1) % items.length\r
         buttonRefs.current[nextIndex].focus();\r
    }\r
}\r
\r
  return (\r
    <div className = "flex flex-col w-full gap-2">\r
        {items.map((item, index) => {\r
            const triggerId = \`\${generatedId}-trigger-\${index}\`\r
            const contentId = \`\${generatedId}-content-\${index}\`\r
    \r
            return (\r
            <div \r
             key = {triggerId}\r
             className = "flex flex-col justify-between py-2 border-b border-gray-200"\r
             >\r
                <button \r
                ref={(el) => { if (el) buttonRefs.current[index] = el; }}\r
                aria-controls = {contentId}\r
                id = {triggerId}\r
                aria-expanded = {activeIndex === index ? true : false}\r
                onKeyDown={(e) => handleKeyDown(e, index)}\r
                className = "flex flex-row justify-between py-1 focus-visible:rounded-md cursor-pointer"\r
                onClick = {() => toggleAccordionItem(index)}\r
                >\r
                    <p className = "text-gray-700 font-medium min-w-0 text-left">{item.name}</p>\r
                    <MotionChevronLeft\r
                        animate = {{rotate: activeIndex === index ? -90 : 0}}\r
                        transition = {{ease: 'easeOut', duration: 0.2}}\r
                        className="text-gray-400 w-[20px] h-[20px]"\r
                    >\r
                    </MotionChevronLeft>\r
                </button>\r
                <AnimatePresence>\r
                    {activeIndex === index && (\r
                    <MotionDiv\r
                    role="region"\r
                     id = {contentId}\r
                     aria-labelledby= {triggerId}   \r
                     initial = {{height: 0}}\r
                     animate = {{height: 'auto'}}\r
                     exit={{ height: 0 }}\r
                     transition={{ duration: 0.2, ease: "easeOut" }}\r
                     className = "overflow-hidden"\r
                     >\r
                        <div className = "py-2">\r
                            <p className = "text-gray-600">\r
                            {item.content}\r
                            </p>\r
                        </div>\r
                    </MotionDiv>\r
                )}\r
                </AnimatePresence>\r
            </div>\r
            )\r
        })}\r
    </div>\r
  )\r
}\r
\r
export default Accordion`,ve=`import React from 'react'\r
import { cn } from 'src/lib/utils';\r
\r
const variantBadgeStyles = {\r
    pill: 'rounded-md',\r
    monoPill: 'rounded-md',\r
    flat: 'rounded-sm'\r
} as const;\r
\r
const badgeColors = {\r
    blue: 'text-blue-500 bg-blue-100/60 border border-blue-300',\r
    mono: 'text-gray-500 bg-gray-100/60 border-gray-300',\r
    red: 'text-red-500 bg-red-100/60 border-red-300',\r
    green: 'text-green-500 bg-green-100/60 border-green-300',\r
    yellow: 'text-yellow-500 bg-yellow-100/60 border-yellow-300'\r
} as const;\r
\r
interface BadgeProps extends React.ComponentPropsWithoutRef<'div'> {\r
    color: keyof typeof badgeColors\r
    variant: keyof typeof variantBadgeStyles\r
}\r
\r
const Badge = ({color, variant, children, ...rest}: BadgeProps) => {\r
  return (\r
    <div \r
    className = {\r
        cn('inline-flex items-center px-2 text-sm font-medium',\r
        badgeColors[color],\r
        variantBadgeStyles[variant]\r
        )}\r
    {...rest}    \r
    >\r
       {children}\r
    </div>\r
  )\r
}\r
\r
export default Badge`,xe=`import { motion} from 'motion/react';\r
import { useState } from "react";\r
\r
const MotionDiv = motion.create('div');\r
\r
const Switch = () => {\r
\r
const [isOn, setIsOn] = useState(true);\r
\r
const toggleSwitch = () => {\r
    setIsOn(!isOn);\r
}\r
\r
  return (\r
    <MotionDiv\r
    className = "w-10 h-5 rounded-full flex items-center cursor-pointer relative p-1"\r
    onClick={toggleSwitch}\r
    animate = {{backgroundColor: isOn ? '#0f327c' : '#e5e7eb'}}\r
    >\r
            <MotionDiv \r
                initial = {{translateX: 20}}\r
                animate = {{translateX: isOn ? 20 : 0}}\r
                transition = {{type: 'spring', stiffness: 300, damping: 30}}\r
                className = "bg-white w-5 h-5 rounded-full absolute left-0"\r
            />\r
        </MotionDiv>\r
  )\r
}\r
\r
export default Switch`,ye=`import {AnimatePresence, motion} from 'motion/react';
import { useState } from "react";

const MotionDiv = motion.create('div');

export interface TabItem {
  title: string
  content: React.ReactNode
}

interface TabsProps {
  tabs?: TabItem[]
}

const defaultTabs: TabItem[] = [
  {
    title: "Draft Tab",
    content: "Content is here and will change."
  },
  {
    title: "Low-Fi Tab",
    content: "Content here is low-fidelity and may change."
  },
  {
    title: "Hi-Fi Tab",
    content: "Content here is high-fidelity and close to final."
  }
]

const Tabs = ({ tabs = defaultTabs }: TabsProps) => {
    const [activeTab, setActiveTab] = useState(0);
  return (
    <div className = "flex flex-col gap-1">
       <div className = "relative flex flex-row gap-4 py-2 overflow-x-auto border-b border-gray-200">
            {tabs.map((tab, index) => (
            <div key={index}
                onClick={() => setActiveTab(index)}
                className = "relative z-20 flex flex-col flex-shrink-0 cursor-pointer"
                >
                {activeTab === index && (
                    <MotionDiv
                        layoutId = "pill"
                        layout
                        transition = {{ ease: 'easeInOut', duration: 0.3 }}
                        className = "absolute inset-0 z-10 w-full h-auto bg-blue-200 rounded-md"
                    />
                    )}
                    <h3 className = {activeTab === index ? "text-blue-800 font-medium relative z-20 px-2 whitespace-nowrap" : "text-gray-400 relative z-20 px-2 whitespace-nowrap hover:font-medium"}>
                        {tab.title}
                    </h3>

            </div>
        ))}
       </div>
       <AnimatePresence
       mode='wait'
       >
         {tabs[activeTab] && (
            <MotionDiv
             key = {activeTab}
             initial = {{opacity: 0}}
             animate = {{opacity: 1}}
             exit = {{opacity: 0}}
             transition = {{duration: 0.2, ease: "easeOut"}}
            >
                <div>{tabs[activeTab].content}</div>
            </MotionDiv>
         )}
       </AnimatePresence>
    </div>
  )
}

export default Tabs`,we=`import { cn } from "src/lib/utils"\r
import { useId } from "react"\r
\r
\r
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {\r
    label: string;\r
    error: string | boolean;\r
    ref: React.Ref<HTMLInputElement>;\r
}\r
\r
const variantInputStyles = {\r
    error: 'border-red-500 focus:ring-2 focus-ring-red-300',\r
    normal: 'border-gray-200 focus:ring-2 focus-ring-blue-300',\r
    disabled: 'bg-gray-50 border-gray-100 cursor-not-allowed text-gray-100'\r
}\r
\r
const Input = ({label, error, ref, ...props}: InputProps) => {\r
\r
    const generatedId = useId();\r
    const inputId = props.id || generatedId;\r
\r
    function getInputStyles() {\r
        const styles = [];\r
        if (props.disabled) {\r
            styles.push(variantInputStyles.disabled);\r
        }\r
        else if (error) {\r
             styles.push(variantInputStyles.error);\r
        }\r
        else {\r
             styles.push(variantInputStyles.normal);\r
        }\r
        return styles.join(' ');\r
    }\r
\r
  return (\r
    <div className = "flex flex-col gap-1">\r
        <label\r
        className = "font-medium text-gray-700"\r
        htmlFor={inputId}\r
        >\r
            {label}\r
        </label>\r
        <input\r
        {...props}\r
        ref={ref}\r
        id={inputId}\r
        aria-invalid = {!!error}\r
        aria-describedby= {error ? \`\${inputId}-error\` : undefined}\r
        className = {cn("w-full px-3 py-2 rounded-md border",\r
            getInputStyles())}\r
        />\r
        {error && typeof error === 'string' && (\r
            <p\r
            className = "text-sm text-red-600 mt-1"\r
            id = {\`\${inputId}-error\`}\r
            >\r
                {error}\r
            </p> \r
        )}\r
    </div>\r
  )\r
}\r
\r
export default Input`,Ie=`import {useEffect, useRef, useState} from "react";\r
import {AnimatePresence, motion} from 'motion/react';\r
import {type HTMLMotionProps } from 'motion/react'\r
import Button from "@components/Button";\r
import { buttonVariant, buttonCopy } from "@types";\r
import useMergedRefs from "src/lib/utils/mergedRefs";\r
\r
interface DialogProps extends HTMLMotionProps<"dialog"> {\r
    content: string;\r
    ref?: React.Ref<HTMLDialogElement>\r
    isOpen?: boolean\r
}\r
\r
const Modal = ({ content, ref, isOpen: externalOpen, ...props}: DialogProps) => {\r
\r
const dialogRef = useRef<HTMLDialogElement>(null);\r
const mergedRefs = useMergedRefs(ref, dialogRef);\r
const [dialogOpen, setIsDialogOpen] = useState(false);\r
\r
const isOpen = externalOpen ?? dialogOpen;\r
\r
const handleOpen = () => setIsDialogOpen(true)\r
const handleClose = (e?: React.SyntheticEvent) => {\r
    if(e) {\r
      e.preventDefault()\r
    }\r
    setIsDialogOpen(false)\r
}\r
\r
const handleClick = (e?: React.MouseEvent<HTMLDialogElement>) => {\r
  const dialog = dialogRef.current;\r
  if (!dialog) return;\r
\r
  const rect = dialog.getBoundingClientRect();\r
\r
  if(!e) return\r
  \r
  const outsideClick = (\r
    e.clientX < rect.left || e.clientX > rect.right ||\r
    e.clientY < rect.top || e.clientY > rect.bottom\r
  )\r
\r
  if(outsideClick) {\r
    handleClose();\r
  }\r
}\r
\r
useEffect(() => {\r
  const dialog = dialogRef.current;\r
  if(!dialog || !isOpen) return;\r
\r
  if(!dialog.open) {\r
    dialog.showModal()\r
  }\r
}, [isOpen])\r
\r
useEffect(() => {\r
  if(isOpen) {\r
    document.body.style.overflow = 'hidden'\r
  }\r
  else {\r
    document.body.style.overflow = 'unset'\r
  }\r
\r
  return () => {\r
    document.body.style.overflow = 'unset'\r
  }\r
}, [isOpen])\r
\r
  return (\r
    <div className = "relative">\r
        <Button\r
        variant={buttonVariant.Primary}\r
        buttonCopy={buttonCopy.OPEN_DIALOG}\r
        onClick={handleOpen}\r
        />\r
        <AnimatePresence>\r
          {isOpen === true && (\r
            <motion.dialog\r
              {...props}\r
              ref = {mergedRefs}\r
              onCancel={handleClose}\r
              onClose={handleClose}\r
              onClick = {handleClick}\r
              initial = {{opacity: 0}}\r
              animate = {{opacity: 1}}\r
              exit = {{opacity: 0}}\r
              transition = {{ease: 'easeOut', duration: 0.2}}\r
              onAnimationComplete = {(definition) => {\r
                if(definition === "exit" && dialogRef.current?.open) {dialogRef.current.close()}\r
              }}\r
              className = "w-[calc(100%-2rem)] max-w-md p-6 border border-gray-200 rounded-lg"\r
              >\r
                  <div>\r
                      <h3 className = "mb-4 text-lg font-medium">Confirm Changes</h3>\r
                      <p className = "mb-6 text-gray-700">{content}</p>\r
                      <div className = "flex flex-row flex-wrap justify-end gap-2">\r
                          <Button\r
                          variant = {buttonVariant.Secondary}\r
                          buttonCopy = {buttonCopy.CANCEL}\r
                          onClick={handleClose}\r
                          />\r
                          <Button\r
                          variant = {buttonVariant.Primary}\r
                          buttonCopy = {buttonCopy.CONFIRM}\r
                          />\r
                      </div>\r
                  </div>\r
            </motion.dialog>\r
          )}\r
        </AnimatePresence>\r
    </div>\r
  )\r
}\r
\r
export default Modal`,Ce=`import React from 'react'\r
import { ChevronRight, Ellipsis } from 'lucide-react'\r
import { useState, useEffect, useRef } from 'react'\r
import CollapsedMenu from './CollapsedMenu'\r
import type { BreadcrumbItem } from './types'\r
import { AnimatePresence, motion } from 'motion/react'\r
import BreadcrumbStandard from './BreadcrumbStandard'\r
import BreadcrumbStart from './BreadcrumbStart'\r
import BreadcrumbEnd from './BreadcrumbEnd'\r
\r
interface BreadCrumbProps {\r
    items: BreadcrumbItem[]\r
    maxItems?: number\r
    separator?: React.ReactNode\r
    renderItem?:(item:BreadcrumbItem) => React.ReactNode\r
}\r
\r
const Breadcrumb = ({items, maxItems = 5, separator, renderItem} : BreadCrumbProps) => {\r
\r
    const [isExpanded, setIsExpanded] = useState<boolean>(false);\r
    const elipsisRef = useRef<HTMLButtonElement>(null);\r
\r
    const enforcedMaxItems = Math.max(maxItems, 3);\r
    const listItemCount = enforcedMaxItems - 2;\r
\r
    let visibleStart: BreadcrumbItem[] = [];\r
    let elipsesItems: BreadcrumbItem[] = [];\r
    let visibleEnd: BreadcrumbItem[] = [];\r
    \r
    if(items.length > enforcedMaxItems) {\r
      visibleStart = items.slice(0, 1);\r
      visibleEnd = items.slice(items.length - listItemCount, items.length);\r
      elipsesItems = items.slice(1, items.length - listItemCount)\r
    }\r
\r
    const handleButtonClick = () => {\r
      setIsExpanded(prev => !prev)\r
    }\r
\r
    useEffect(() => {\r
      const clickObserver = (e:MouseEvent) => {\r
        if(!isExpanded) return;\r
        \r
        if(e.target instanceof Node){\r
          if(elipsisRef.current && !elipsisRef.current.contains(e.target)){\r
            setIsExpanded(false)\r
          }\r
        }\r
      }\r
      window.addEventListener('click', clickObserver)\r
      return () => {\r
        window.removeEventListener('click', clickObserver)\r
      }\r
    }, [isExpanded])\r
\r
\r
  return (\r
    <nav>\r
      <ul className='flex flex-row flex-wrap items-center gap-1'>\r
        {items.length <= enforcedMaxItems ? (        \r
            <BreadcrumbStandard\r
            items = {items}\r
            renderItem={renderItem}\r
            separator = {separator}\r
            />\r
        ) : (\r
          <>\r
            <BreadcrumbStart\r
            startItems={visibleStart}\r
            renderItem = {renderItem}\r
            separator = {separator}\r
            />\r
            <li className = "relative flex flex-row items-center gap-1 text-gray-500 hover:text-gray-700">\r
              <button\r
               ref = {elipsisRef}\r
               aria-label = "Show missing paths"\r
               onClick = {handleButtonClick}\r
               className = "p-1 rounded-md hover:bg-gray-200/70"\r
               >\r
                <Ellipsis className = "text-gray-500" size = {'16px'}/>\r
              </button>\r
              <AnimatePresence mode='popLayout'>\r
                {isExpanded === true && (\r
                  <motion.div\r
                  className = "absolute flex flex-col w-48 gap-1 bg-white border border-gray-200 rounded-md shadow-sm top-7"\r
                  initial = {{opacity: 0, scale: 0.95, y: -2}}\r
                  animate = {{opacity: 1, scale: 1, y: 0}}\r
                  exit = {{opacity: 0, scale: 0.95, y: -2}}\r
                  transition={{ease: 'easeOut', duration: 0.2}}\r
                  >\r
                    <CollapsedMenu\r
                     collapsedList={elipsesItems}\r
                     renderItem={renderItem}\r
                    /> \r
                  </motion.div>\r
                )}\r
              </AnimatePresence>\r
              {separator ? separator : <ChevronRight size = {'16px'} className = "text-gray-400"/>}\r
            </li>\r
            <BreadcrumbEnd\r
            endItems = {visibleEnd}\r
            renderItem={renderItem}\r
            separator = {separator}\r
            />\r
          </>\r
        )}\r
      </ul>\r
    </nav>\r
  )\r
}\r
\r
export default Breadcrumb`,Pe=`import React from 'react'\r
import type { BreadcrumbItem } from './types'\r
import { ChevronRight } from 'lucide-react'\r
\r
interface BreadcrumbStartProps {\r
    startItems: BreadcrumbItem[]\r
    renderItem?: (item:BreadcrumbItem) => React.ReactNode\r
    separator?: React.ReactNode\r
}\r
\r
const BreadcrumbStart = ({startItems, renderItem, separator}: BreadcrumbStartProps) => {\r
  return (\r
    <>\r
        {startItems.map((start) =>\r
              <li key = {start.id} className = "flex flex-row items-center gap-1 text-gray-500 hover:text-gray-700">\r
                {renderItem ? renderItem(start) : <a href = {start.link}>{start.title}</a>}\r
                {separator ? separator : <ChevronRight size = {'16px'} className = "text-gray-500"/>}\r
              </li>\r
            )}\r
    </>\r
  )\r
}\r
\r
export default BreadcrumbStart`,Re=`import React from 'react'\r
import type { BreadcrumbItem } from './types'\r
import { ChevronRight } from 'lucide-react'\r
\r
interface breadcrumbStandardProps{\r
    items: BreadcrumbItem[]\r
    renderItem?: (item:BreadcrumbItem) => React.ReactNode\r
    separator?: React.ReactNode\r
}\r
\r
const BreadcrumbStandard = ({items, renderItem, separator}: breadcrumbStandardProps) => {\r
  return (\r
    <>\r
     {items.map((item, index) => {\r
            if(index === items.length - 1){\r
              return(\r
                <li key = {item.id} aria-current ="page" className = "text-gray-700">\r
                    {item.title}\r
                </li>\r
              )\r
            }\r
            return (\r
              <li key = {item.id} className = "flex flex-row items-center gap-1 text-gray-500 hover:text-gray-700">\r
                {renderItem ? renderItem(item) : <a href = {item.link}>{item.title}</a>}\r
                {separator ? separator : <ChevronRight size = {'16px'} className = "text-gray-500"/>}\r
              </li>\r
            )\r
          })}\r
    </>\r
  )\r
}\r
\r
export default BreadcrumbStandard`,Te=`import type { BreadcrumbItem } from "./types"\r
import { ChevronRight } from "lucide-react"\r
\r
interface BreadcrumbEndProps {\r
    endItems: BreadcrumbItem[]\r
    renderItem?: (item:BreadcrumbItem) => React.ReactNode\r
    separator?: React.ReactNode\r
}\r
\r
const BreadcrumbEnd = ({endItems, renderItem, separator}: BreadcrumbEndProps) => {\r
  return (\r
    <>\r
    {endItems.map((endItem, index) => {\r
              if (index === endItems.length - 1){\r
                return(\r
                  <li key = {endItem.id} aria-current ="page" className = "flex flex-row items-center gap-1 text-gray-700">\r
                    {endItem.title}\r
                </li>\r
                )\r
              }\r
              return (\r
              <li key = {endItem.id}>\r
                {renderItem ? renderItem(endItem) : <a href = {endItem.link}>{endItem.title}</a>}\r
                {separator ? separator : <ChevronRight size = {'16px'} className = "text-gray-400"/>}\r
              </li>\r
            )\r
            })}\r
    </>\r
  )\r
}\r
\r
export default BreadcrumbEnd`,ke=`import { cn } from "src/lib/utils"\r
\r
interface CardCSSProperties extends React.CSSProperties {\r
  "--card-px": string\r
  "--card-py": string\r
}\r
\r
interface CardProps extends React.ComponentPropsWithRef<"div"> {\r
  variant?: keyof typeof cardStyles.variant;\r
  behavior?: keyof typeof cardStyles.behavior;\r
  children: React.ReactNode\r
  size: "sm" | "md" | "lg" | "xl"\r
}\r
\r
const styleMap: Record<CardProps["size"], CardCSSProperties> = {\r
  sm: {\r
        "--card-px": "1rem",\r
        "--card-py": "1rem",\r
      },\r
  md: {\r
      "--card-px": "1.5rem",\r
      "--card-py": "1.5rem",\r
      },\r
  lg: {\r
      "--card-px": "2rem",\r
      "--card-py": "2rem",\r
    },\r
  xl: {\r
    "--card-px": "2.5rem",\r
    "--card-py": "2.5rem",\r
    }\r
};\r
\r
const cardStyles = {\r
  variant: {\r
    bordered: "rounded-md border border-border bg-card",\r
    flat: "rounded-md bg-muted/50 border border-transparent",\r
    elevated: "rounded-md bg-card border border-border/50 shadow-sm"\r
  },\r
  behavior: {\r
    static: "",\r
    interactive: "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-pointer"\r
  }\r
};\r
\r
const Card = ({\r
  children,\r
  ref,\r
  className,\r
  style,\r
  size = "md",\r
  variant = "bordered",\r
  behavior = "static",\r
  ...props} : CardProps) => {\r
  return (\r
    <div \r
    className = {cn(cardStyles.variant[variant], cardStyles.behavior[behavior], className)}\r
    style = {{...styleMap[size], ...style}}\r
    ref = {ref}\r
    {...props}\r
    >\r
      {children}\r
    </div>\r
  )\r
}\r
\r
export default Card`,Ne=`import React from 'react'\r
import { cn } from 'src/lib/utils'\r
\r
interface CardHeaderProps extends React.ComponentPropsWithRef<"div"> {\r
  children: React.ReactNode\r
}\r
\r
const CardHeader = ({children, ref, className, ...props}: CardHeaderProps) => {\r
  return (\r
    <div \r
    className = {cn("flex flex-col gap-1.5 pt-[var(--card-py)] px-[var(--card-px)]", className)}\r
    ref = {ref}\r
    {...props}\r
    >\r
      {children}\r
    </div>\r
  )\r
}\r
\r
export default CardHeader`,Se=`import React from 'react'\r
import { cn } from 'src/lib/utils'\r
\r
interface CardTitleProps extends React.ComponentPropsWithRef<"h3"> {\r
  children: React.ReactNode\r
}\r
\r
const CardTitle = ({children, ref, className, ...props}: CardTitleProps) => {\r
  return (\r
    <h3 className = {cn('font-semibold leading-none tracking-tight', className)}\r
    ref = {ref}\r
    {...props}\r
    >\r
      {children}\r
    </h3>\r
  )\r
}\r
\r
export default CardTitle`,De=`import React from 'react'\r
import { cn } from 'src/lib/utils'\r
\r
interface CardDescriptionProps extends React.ComponentPropsWithRef<"p"> {\r
  children: React.ReactNode\r
}\r
\r
const CardDescription = ({children, ref, className, ...props}: CardDescriptionProps) => {\r
  return (\r
    <p className = {cn('text-sm text-gray-500', className)}\r
    ref = {ref}\r
    {...props}\r
    >\r
        {children}\r
    </p>\r
  )\r
}\r
\r
export default CardDescription`,Me=`import { cn } from 'src/lib/utils'\r
\r
interface CardFooterProps extends React.ComponentPropsWithRef<"div"> {\r
  children: React.ReactNode\r
}\r
\r
const CardFooter = ({children, ref, className, ...props}: CardFooterProps) => {\r
\r
  return (\r
    <div \r
    className = {cn("pt-4 pb-[var(--card-py)] px-[var(--card-px)]", className)}\r
    ref = {ref}\r
    {...props}\r
    >\r
        {children}\r
    </div>\r
  )\r
}\r
\r
export default CardFooter`,Be=`import Button from "@components/Button";\r
import { buttonVariant } from "@types";\r
import { ArrowLeft, ArrowRight } from "lucide-react";\r
import CarouselContent from "./CarouselContent";\r
import { useState, useRef, useEffect, useCallback, useMemo } from "react";\r
import React from "react";\r
import { CarouselContext } from "./CarouselContext";\r
\r
interface CarouselProps {\r
    children?: React.ReactNode\r
}\r
\r
const Carousel = ({children}: CarouselProps) => {\r
  const [activeIndex, setActiveIndex] = useState(0);\r
  const [itemIds, setItemIds] = useState<string[]>([]);\r
  const [itemWidth, setItemWidth] = useState(0)\r
  const widthRef = useRef<HTMLDivElement>(null);\r
\r
  const handleLeftArrow = () => {\r
        setActiveIndex(Math.max(activeIndex - 1, 0))  \r
  }\r
\r
  const handleRightArrow = () => {\r
        setActiveIndex(Math.min(activeIndex + 1, totalItems - 1)) \r
  }\r
\r
  const totalItems = itemIds.length;\r
\r
   const registerItem = useCallback((newItem: string) => {\r
    setItemIds(prev => {\r
        if(!prev.includes(newItem)) {\r
            return [...prev, newItem]   \r
        }\r
\r
        else {\r
            return prev\r
        }\r
    })\r
  },[]);\r
\r
  const deregisterItem = useCallback((chosenItem: string) => {\r
        setItemIds(prev => {\r
            return prev.filter((item) => item !== chosenItem)\r
        })\r
  }, [])\r
\r
  const contextValues = useMemo(() => {\r
        return {\r
            activeIndex,\r
            setActiveIndex,\r
            registerItem,\r
            deregisterItem,\r
            itemWidth,\r
            itemIds,\r
        }\r
  }, [activeIndex, setActiveIndex, registerItem, deregisterItem, itemWidth, itemIds,])\r
\r
  useEffect(() => {\r
        const observer = new ResizeObserver((entries) => {      \r
        const newWidth = entries[0].contentRect.width;\r
        if (newWidth > 0 && newWidth < 5000) {\r
            setItemWidth(newWidth);\r
            }\r
        })\r
        if(widthRef.current){\r
            observer.observe(widthRef.current)\r
        }\r
        return () => observer.disconnect()\r
  },[])\r
\r
  return (\r
    <CarouselContext value = {contextValues}>\r
        <div className = "grid grid-cols-[auto_1fr_auto] gap-2 justify-center items-center w-full h-full relative overflow-hidden"\r
        >\r
        <Button\r
        variant = {buttonVariant.Icon}\r
        onClick={handleLeftArrow}\r
        >\r
            <ArrowLeft className = "w-4 h-4 text-gray-600"></ArrowLeft>\r
        </Button>\r
             <div ref = {widthRef} className = "h-full self-stretch overflow-hidden ">\r
            <CarouselContent\r
            >\r
            {children}\r
        </CarouselContent>\r
        </div>\r
        <Button\r
        variant = {buttonVariant.Icon}\r
        onClick={handleRightArrow}\r
        >\r
            <ArrowRight className = "w-4 h-4 text-gray-600"></ArrowRight>\r
        </Button>\r
    </div>\r
    </CarouselContext>\r
  )\r
}\r
\r
export default Carousel`,Ae=`import React from 'react'\r
import { useContext } from 'react';\r
import { CarouselContext } from './CarouselContext';\r
import { motion } from 'motion/react';\r
\r
interface CarouselContentProps {\r
    children: React.ReactNode\r
}\r
\r
const CarouselContent = ({children}: CarouselContentProps) => {\r
\r
  const context = useContext(CarouselContext)\r
  if(!context) return null;\r
\r
  return (\r
    <div \r
    className = "h-full min-w-0 overflow-hidden">\r
        <motion.div \r
        animate = {{x: -(context.activeIndex * context.itemWidth)}}\r
        transition = {context.itemWidth === 0 ? { duration: 0 } : { ease: 'easeOut', duration: 0.3 }}\r
        className = "flex flex-row h-full">\r
            {children}\r
        </motion.div>\r
    </div>\r
  )\r
}\r
\r
export default CarouselContent`,je=`import { useContext, useId, useEffect } from 'react';\r
import type { ReactNode } from 'react';\r
import { CarouselContext } from './CarouselContext';\r
import { motion } from 'motion/react';\r
\r
interface CarouselItemProps {\r
    item: ReactNode,\r
    id: string;\r
}\r
\r
const CarouselItem = ({item, id}: CarouselItemProps) => {\r
\r
  const context = useContext(CarouselContext);\r
  if(!context) return null;\r
\r
  const generatedId = useId();\r
  const itemId = id || generatedId\r
\r
  const myIndex = context.itemIds.indexOf(itemId)\r
\r
  useEffect(() => {\r
    context.registerItem(itemId)\r
    return(() => context.deregisterItem(itemId))\r
  }, [])\r
\r
  return (\r
    <motion.div \r
    id = {itemId}\r
    animate = {myIndex === context.activeIndex ? {scale: 1 ,filter: 'blur(0px)'} : {scale: 0.95,filter: 'blur(10px)'}}\r
    transition = {{ease: 'easeInOut', duration: 0.2}}\r
    style={{width: context.itemWidth, minWidth: context.itemWidth}}\r
    className = "flex items-center justify-center h-full p-6 border border-gray-300 rounded-md sm:p-12 ">\r
            {item}\r
        </motion.div>\r
  )\r
}\r
\r
export default CarouselItem`,Ee=`import React from 'react'\r
import { PaginationProvider } from './PaginationContext'\r
\r
interface PaginationProps {\r
    activePage: number\r
    totalPages: number\r
    maxButtons?: number\r
    onPageChange: (page:number) => void\r
    children: React.ReactNode\r
}\r
\r
const Pagination = ({activePage, totalPages, maxButtons = 5, onPageChange, children}: PaginationProps) => {\r
  return (\r
    <nav role="navigation" aria-label="pagination" className="flex flex-row items-center justify-center w-full">\r
      <PaginationProvider\r
        activePage={activePage}\r
        totalPages={totalPages}\r
        maxButtons={maxButtons}\r
        onPageChange={onPageChange}\r
      >\r
        {children}\r
      </PaginationProvider>\r
    </nav>\r
  )\r
}\r
\r
export default Pagination`,Oe=`import { usePagination } from "./PaginationContext"\r
import { Ellipsis } from "lucide-react"\r
\r
const PaginationContent = () => {\r
\r
    const {pagesToRender, activePage, onPageChange} = usePagination()\r
\r
  return (\r
    <ul className = "flex flex-row items-center gap-1">\r
        {pagesToRender.map((item, index) => {\r
            const isActive = item === activePage;\r
            \r
            if (typeof item === 'string'){\r
                return (\r
                    <li key = {\`ellipsis-\${index}\`}><Ellipsis size={\`16px\`} className="text-gray-800"/></li>\r
                )\r
            }\r
            return (\r
                <li key = {item}>\r
                    <button\r
                    className = {\`text-sm rounded-md h-7 w-7 text-gray-800 hover:bg-gray-100 \${\r
                                isActive ? " border rounded-md font-medium border-gray-300" : ""}\`}\r
                    aria-current = {isActive ? "page" : undefined}\r
                    onClick = {() => onPageChange(item)}\r
                    >\r
                        {item}\r
                    </button>\r
                </li>\r
            )\r
        })}\r
    </ul>\r
  )\r
}\r
\r
export default PaginationContent`,He=`import React from 'react'\r
import { ChevronLeft } from 'lucide-react'\r
import { usePagination } from './PaginationContext'\r
\r
const PaginationPrevious = () => {\r
\r
  const {activePage, onPageChange} = usePagination();\r
\r
  const isDisabled = activePage === 1;\r
\r
  return (\r
    <button\r
    disabled = {isDisabled}\r
    className = {\`text-sm font-medium rounded-md h-7 w-7 mr-2 flex justify-center items-center \${\r
                isDisabled ? "text-gray-300 cursor-not-allowed" : "text-gray-500 hover:bg-gray-100"}\`}\r
    onClick = {() =>{\r
            if(isDisabled) {\r
                return\r
            }\r
            else {\r
                onPageChange(activePage - 1)\r
            }\r
        }\r
    }\r
    >\r
        <ChevronLeft size = {'16px'} className = {\`text-sm rounded-md h-4 w-4 \${\r
                isDisabled ? "text-gray-400 cursor-not-allowed" : "text-gray-500 hover:bg-gray-100"}\`}/>\r
    </button>\r
  )\r
}\r
\r
export default PaginationPrevious`,Le=`import React from 'react'\r
import { usePagination } from './PaginationContext'\r
import { ChevronRight } from 'lucide-react'\r
\r
const PaginationNext = () => {\r
\r
  const {totalPages, activePage, onPageChange} = usePagination();\r
\r
  const isDisabled = activePage === totalPages\r
\r
  return (\r
    <button\r
    disabled = {isDisabled}\r
    className = {\`text-sm font-medium rounded-md h-7 w-7 flex justify-center items-center ml-2 \${\r
                isDisabled ? "text-gray-300 cursor-not-allowed" : "text-gray-500 hover:bg-gray-100"}\`}\r
    onClick = {() =>{\r
            if(isDisabled) {\r
                return\r
            }\r
            else {\r
                onPageChange(activePage + 1)\r
            }\r
        }\r
    }\r
    >\r
        <ChevronRight size = {'16px'} className = {\`text-sm rounded-md h-4 w-4 \${\r
                isDisabled ? "text-gray-400 cursor-not-allowed" : "text-gray-500 hover:bg-gray-100"}\`}/>\r
    </button>\r
  )\r
}\r
\r
export default PaginationNext`,Ve=`import React, { useCallback, useId, useState, useMemo } from "react";\r
\r
interface RadioGroupContextValue {\r
  value?: string;\r
  hoveredIndex: number | null;\r
  direction: 'up' | 'down' | null;\r
  onValueChange: (value: string) => void;\r
  onHoverChange: (index: number | null) => void;\r
  handleRegister: (id:string) => () => void;\r
  registeredIds: string[]\r
  name: string;\r
}\r
\r
interface RadioGroupProps {\r
  children?: React.ReactNode;\r
  value?: string;\r
  defaultValue?: string;\r
  onValueChange?: (value: string) => void;\r
  name?: string;\r
}\r
\r
const RadioGroupContext = React.createContext<RadioGroupContextValue | null>(null)\r
\r
const RadioGroup = ({ value, children, name: propName, onValueChange, defaultValue }: RadioGroupProps) => {\r
  const generatedId = useId();\r
  const name = propName ?? generatedId;\r
  \r
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value ?? defaultValue);\r
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);\r
  const [movement, setMovement] = useState<'up' | 'down' | null>(null);\r
  const [registeredIds, setRegisteredIds] = useState<string[]>([]);\r
\r
  const handleValueChange = (newValue: string) => {\r
    setSelectedValue(newValue);\r
    onValueChange?.(newValue);\r
  };\r
\r
  const handleHoverChange = (nextIndex: number | null) => {\r
    if (nextIndex === null || hoveredIndex === null) {\r
      setMovement(null);\r
    } else if (nextIndex < hoveredIndex) {\r
      setMovement('up');\r
    } else if (nextIndex > hoveredIndex) {\r
      setMovement('down');\r
    }\r
    setHoveredIndex(nextIndex);\r
  };\r
\r
  const handleRegister = useCallback((id: string) => {\r
        setRegisteredIds(prev => {\r
            if(!prev.includes(id)) return ([...prev,id])\r
\r
            else {\r
                return(prev)\r
            }\r
        })\r
\r
        return () => setRegisteredIds(prev => prev.filter(item => item !== id))\r
  }, []);\r
\r
  const memoizedValues = useMemo(() => {\r
      return(\r
        {\r
            value: selectedValue,\r
            onValueChange: handleValueChange,\r
            hoveredIndex,\r
            handleRegister,\r
            registeredIds,\r
            direction: movement,\r
            onHoverChange: handleHoverChange,\r
            name\r
        }\r
      )\r
  },[selectedValue, onValueChange, hoveredIndex, handleRegister, registeredIds, movement, handleHoverChange, name ])\r
\r
  return (\r
    <RadioGroupContext.Provider value={memoizedValues}>\r
      <div \r
        role="radiogroup"\r
        onMouseLeave={() => handleHoverChange(null)}\r
      >\r
        {children}\r
      </div>\r
    </RadioGroupContext.Provider>\r
  );\r
};\r
\r
export const useRadioGroupContext = () => {\r
  const context = React.useContext(RadioGroupContext);\r
  if (!context) {\r
    throw new Error("RadioItem must be used within a RadioGroup");\r
  }\r
  return context;\r
};\r
\r
export default RadioGroup;`,ze=`import React, { useId, useEffect } from 'react';\r
import { useRadioGroupContext } from './RadioGroup';\r
import { AnimatePresence, easeOut, motion } from 'motion/react';\r
import { cn } from 'src/lib/utils';\r
\r
interface RadioItemProps extends React.InputHTMLAttributes<HTMLInputElement> {\r
  value: string;\r
  id?: string;\r
  children?: React.ReactNode;\r
  ref?: React.Ref<HTMLInputElement>;\r
}\r
\r
const bubbleVariants = {\r
  initial: (direction: 'up' | 'down' | null) => ({\r
    opacity: 0,\r
    y: direction === null ? 0 : (direction === 'up' ? 6 : -6)\r
  }),\r
  animate: { \r
    opacity: 1, \r
    y: 0,\r
    transition: { ease: easeOut, duration: 0.15 }\r
  },\r
  exit: (direction: 'up' | 'down' | null) => ({\r
    opacity: 0,\r
    y: direction === null ? 0 : (direction === 'up' ? -6 : 6),\r
    transition: { ease: easeOut, duration: 0.15 }\r
  })\r
};\r
\r
const RadioItem = ({ id, value, children, ref, ...props }: RadioItemProps) => {\r
  const context = useRadioGroupContext();\r
  const generatedLocalId = useId();\r
  const radioItemId = id ?? generatedLocalId;\r
\r
  const isSelected = context.value === value;\r
  const currentIndex = context.registeredIds.indexOf(radioItemId)\r
  const isHovered = currentIndex !== -1 && context.hoveredIndex === currentIndex;\r
\r
  useEffect(() => {\r
    return context.handleRegister(radioItemId)\r
  },[radioItemId, context.handleRegister])\r
\r
  return (\r
    <div\r
      onMouseEnter={() => context.onHoverChange(currentIndex)}\r
      onFocus={() => context.onHoverChange(currentIndex)}\r
      className="flex flex-row gap-2 p-2 rounded-md items-center relative has-[:focus-visible]:ring-2"\r
    >\r
      <input\r
        {...props}\r
        type="radio"\r
        ref={ref}\r
        id={radioItemId}\r
        name={context.name}\r
        checked={isSelected}\r
        onChange={() => context.onValueChange(value)}\r
        className="absolute inset-0 z-30 opacity-0 cursor-pointer"\r
      />\r
      <div className="relative z-20 flex items-center justify-center w-4 h-4 border border-gray-300 rounded-lg cursor-pointer">\r
        <AnimatePresence>\r
          {isSelected && (\r
            <motion.div \r
              initial={{ scale: 0.5, opacity: 0 }}\r
              animate={{ scale: 1, opacity: 1 }}\r
              exit={{ scale: 0.5, opacity: 0 }}\r
              transition={{ ease: easeOut, duration: 0.15 }}\r
              className="absolute z-20 w-2 h-2 bg-blue-500 rounded-lg"\r
            />\r
          )}\r
        </AnimatePresence>\r
        \r
        <AnimatePresence custom={context.direction}>\r
          {isHovered && (\r
            <motion.div  \r
              custom={context.direction}   \r
              variants={bubbleVariants} \r
              initial="initial" \r
              animate="animate"\r
              exit="exit"\r
              className="absolute z-10 w-2 h-2 bg-gray-300 rounded-lg"\r
            />\r
          )}\r
        </AnimatePresence>\r
      </div>\r
\r
      <label \r
        htmlFor={radioItemId}\r
        className={cn("font-regular z-20", isSelected ? "text-black" : "text-gray-500")}\r
      >\r
        {children || value}\r
      </label>\r
    </div>\r
  );\r
};\r
\r
export default RadioItem;`,We=`import { CheckCircle, Info, TriangleAlert, CircleAlert } from 'lucide-react'\r
import type { toastType } from './types'\r
import React, { useEffect } from 'react'\r
import { cn } from 'src/lib/utils'\r
\r
interface ToastProps {\r
    toastType: toastType\r
    description: string\r
    id: string\r
    header?: string\r
    onDismiss: (id:string) => void\r
    isHovered: boolean\r
    index: number\r
    isTop: boolean\r
    total: number\r
}\r
\r
interface ToastVariants {\r
    styles: string,\r
    icon?: React.ReactNode\r
    headerRequired?: boolean\r
}\r
\r
const toastMap : Record<ToastProps['toastType'], ToastVariants> = {\r
    default: {\r
        styles: "border-gray-200 text-gray-500",\r
    },\r
    description: {\r
        styles: "border-gray-200 text-gray-500",\r
        headerRequired: true\r
    } ,\r
    success: {\r
        styles: "bg-green-50 border-green-200 text-green-800",\r
        icon: <CheckCircle className="h-5 w-5" />,\r
        headerRequired: false\r
    } ,\r
    info: {\r
        styles: "border-gray-200 text-gray-500",\r
        icon: <Info className = "h-5 w-5 text-gray-700"/>\r
\r
    } ,\r
    warning: {\r
        styles: "border-gray-200 text-yellow-700",\r
        icon: <TriangleAlert className = "h-5 w-5"/>\r
    } ,\r
    error: {\r
        styles: "border-gray-200 text-red-700",\r
        icon: <CircleAlert className = "h-5 w-5"/>\r
    } ,\r
    custom: {\r
        styles: "border-gray-200 text-gray-500",\r
    } ,\r
\r
}\r
\r
\r
const Toast = ({toastType, description, id, header, onDismiss, isHovered, index, isTop, total} : ToastProps) => {\r
\r
  const variants = toastMap[toastType];\r
  const toastHeader = variants.headerRequired === true;\r
  const toastIcon = variants.icon;\r
\r
  useEffect(() => {\r
        if(isHovered){\r
            return\r
        }\r
\r
       const timer =  setTimeout((\r
            () => onDismiss(id)\r
        ), 4000)\r
\r
        return(\r
           () => clearTimeout(timer)\r
        )\r
  },[isHovered, id, onDismiss])\r
\r
  return (\r
    <div \r
      style={{ \r
        zIndex: 100 + index, \r
        transformOrigin: isTop ? "top center" : "bottom center"\r
      }}\r
      id={id}\r
      className= {cn('p-4 border rounded-lg bg-white', variants.styles)}\r
    >\r
      {toastHeader && <h3>{header}</h3>}\r
      <div className="flex flex-row gap-2 items-start">\r
        {toastIcon && toastIcon}\r
        <p>{description}</p>\r
      </div>\r
    </div>\r
  )\r
}\r
\r
export default Toast`,Fe=`import React, { createContext, useContext, useMemo, useState } from 'react'\r
import type { toastType } from './types'\r
\r
interface Toast {\r
    id:string\r
    description: string\r
    toastType: toastType\r
}\r
\r
interface ToastContextValue {\r
    toasts: Toast[]\r
    addToast: (type: toastType, description:string) => void\r
    dismissToast: (id:string) => void\r
}\r
\r
interface ToastProviderProps {\r
    children: React.ReactNode\r
}\r
\r
export const ToastProvider = ({\r
    children\r
} : ToastProviderProps) => {\r
\r
    const [toasts, setToasts] = useState<Toast[]>([]);\r
\r
    const addToast = (toastType: toastType, description: string) => {\r
        const id = crypto.randomUUID();\r
\r
        setToasts(prev => {\r
                const newToast = { id, toastType, description };\r
                \r
                if (prev.length >= 3) {\r
                  return [...prev.slice(1), newToast];\r
                }\r
                return [...prev, newToast];\r
        });\r
    }\r
\r
    const dismissToast = (toastId: string) => {\r
        setToasts(prev => prev.filter((toast) => (\r
            toast.id !== toastId\r
        )))\r
    }\r
\r
    return (\r
        <toastContext.Provider value = {{\r
            addToast,\r
            dismissToast,\r
            toasts\r
        }}>\r
            {children}\r
        </toastContext.Provider>\r
    )\r
}\r
\r
const toastContext = createContext<ToastContextValue | undefined>(undefined);\r
\r
export const useToast = () => {\r
    const context = useContext(toastContext);\r
    if (!context) {\r
        throw new Error('useToast must be used within a ToastProvider');\r
    }\r
    return context;\r
};`,Ge=`import React, {useState} from 'react'\r
import { useToast } from './ToastContext'\r
import Toast from './Toast'\r
import { motion, AnimatePresence } from 'motion/react'\r
import { cn } from 'src/lib/utils'\r
\r
interface ToasterProps {\r
    position: "top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center"\r
    expandedOnHover?: boolean\r
}\r
\r
const positionMap: Record<NonNullable<ToasterProps['position']>, string> = {\r
  "top-left": "top-20 left-0 p-4",\r
  "top-right": "top-20 right-0 p-4",\r
  "top-center": "top-20 left-1/2 -translate-x-1/2 p-4",\r
  "bottom-left": "bottom-0 left-0 p-4",\r
  "bottom-right": "bottom-0 right-0 p-4",\r
  "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 p-4"\r
}\r
\r
const Toaster = ({\r
  position = "bottom-right", \r
  expandedOnHover = true\r
}: ToasterProps) => {\r
\r
  const {toasts, dismissToast} = useToast();\r
\r
  const [isHovered, setIsHovered] = useState<boolean>(false);\r
\r
  const isTop = position.startsWith('top');\r
\r
return (\r
  <div \r
    className={cn('fixed z-50 w-full max-w-sm pointer-events-none', positionMap[position])}\r
    onMouseEnter={() => { if (expandedOnHover) setIsHovered(true) }}\r
    onMouseLeave={() => { if (expandedOnHover) setIsHovered(false) }}\r
  >\r
    <div className="relative w-full flex flex-col justify-end items-end">\r
      <AnimatePresence mode="popLayout">\r
        {toasts.map((toast, index) => {\r
          const distanceFromNewest = (toasts.length - 1) - index;\r
\r
          return(\r
                  <motion.div\r
                  key={toast.id}\r
                  layout\r
                  initial={{ opacity: 0, y: isTop ? -20 : 20, scale: 0.9 }}\r
                  animate={{\r
                    scale: isHovered ? 1 : 1 - distanceFromNewest * 0.05,\r
                    y: isHovered \r
                      ? distanceFromNewest * (isTop ? 64 : -64) \r
                      : distanceFromNewest * (isTop ? 10 : -10),\r
                    opacity: 1\r
                  }}\r
                  exit={{ \r
                    opacity: 0, \r
                    scale: 0.85,\r
                    y: isTop ? -40 : 40 \r
                  }}\r
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}\r
                  className="w-full absolute left-0 right-0 bottom-0 pointer-events-auto p-2"\r
                >\r
                  <Toast\r
                    id={toast.id}\r
                    toastType={toast.toastType}\r
                    description={toast.description}\r
                    onDismiss={dismissToast}\r
                    index={index}\r
                    isHovered={isHovered}\r
                    isTop={isTop}\r
                    total={toasts.length}\r
                  />\r
                </motion.div>\r
          )\r
        })}\r
      </AnimatePresence>\r
    </div>\r
  </div>\r
)\r
}\r
\r
export default Toaster`,t=r=>Object.fromEntries(Object.entries(r).map(([o,a])=>[o,a.trim()])),qe=[{slug:"accordion",name:"Accordion",description:"I thought the accordion would’ve been a bit more challenging and at first I was having trouble until I mapped it all out in my head of linking the animation of the chevron to the appearance of the content. I’m still iterating and deciding whether I want borders on each of the items but I’m leaning towards taking them out. The reason I’m leaning towards taking these out is because as the accordion content populates, the line is pushed creating this awkward state in the UI that I’m not the biggest fan of. I think the border bottom looks great when it’s just the accordion headers but not great when content is exposed. So therefore, it will be eliminated.",Demo:z,code:t({"Accordion.tsx":be}),docs:ae},{slug:"badge",name:"Badge",description:"3 variants of this component were created in order to address most scenarios I’ve seen badges used: pill, mono-pilled, and flat. Badges are either already included in the element or dynamically deleted / added (filters, tags, etc.) The badge component is a case where no interaction or animation is necessary. An animation would cause the element to stick out too much for its intended purpose and an interaction would cause the adding / deleting of badges to feel sluggish. ",Demo:W,code:t({"Badge.tsx":ve}),docs:ie,variants:F},{slug:"breadcrumb",name:"Breadcrumb",description:"This component can be configured based on the max items, icons, items, and render item props. The only animations present are hover animations and the opening of the collapsed menu through the ellipsis since this component primarily serves as navigation, animations are at a minimum here. Given the nature of the ellipsis button opening a menu, that component is only rendered if the length of items is greater than the enforced max items coupled with an ease out animation that feels on par to the feeling of opening something on your phone.",Demo:G,code:t({"Breadcrumb.tsx":Ce,"BreadcrumbStart.tsx":Pe,"BreadcrumbStandard.tsx":Re,"BreadcrumbEnd.tsx":Te}),docs:se,variants:$},{slug:"card",name:"Card",description:"The card was one of the more interesting cases when I was architecting this component. Originally, I was going to make a record and have defined styles for the card. After further analysis, there could be a case where thousands of cards could be used either for a eCommerece page or blog page or if a user wanted to create a full image card or partial image card. I concluded that component having flexible styling and content would be a better approach given those use cases.",Demo:X,code:t({"Card.tsx":ke,"CardHeader.tsx":Ne,"CardTitle.tsx":Se,"CardDescription.tsx":De,"CardFooter.tsx":Me}),docs:de,variants:_},{slug:"carousel",name:"Carousel",description:"The carousel was one of the initial components I started on. As I went through the journey of creating this design system, I found it was better for the items to have a react node typing so that the carousel items can take in either content or images depending on the developer’s preference. In future versions, I plan to have variations for the current version and a version that takes up the full width and height of the parent container.",Demo:Y,code:t({"Carousel.tsx":Be,"CarouselContent.tsx":Ae,"CarouselItem.tsx":je}),docs:le},{slug:"input",name:"Input",description:"Inputs are fairly simple and minimal but when it came to scaling this for production/scalability, it became apparent that there was a huge gap between the components I made previously versus what went into this one. There were so many states and factors to consider such as a developer jumping in and adding in any native html props without prop bombing my component. Another factor that I thought was important that I neglected in the past was accessibility through keyboard navigation. I have to go back and implement those features in the previous components and check if any other components need refs. Lastly, I thought it was really cool to dig into state management and understanding how to manually sort out styling priority depending on state versus utilizing twmerge and clsx like I have in the past without really knowing why it worked in the first place.",Demo:K,code:t({"Input.tsx":we}),docs:ce},{slug:"modal",name:"Modal",description:"Because a modal is a result of a decisive user decision, I opted to include a subtle opacity animation with an ease out curve. A spring or ease in out curve would feel like the component is jumping out at the user instead of smoothly transitioning into its reveal. I believe there’s possibility for a small scale shift when the element enters and leaves but the scale should not be less than 0.95 to prevent the component from jumping at you. I chose to build a custom hook to ensure the component remains headless utility allowing for users to assign refs by themselves or decide what triggers the opening of the dialog.",Demo:J,code:t({"Modal.tsx":Ie}),docs:me},{slug:"pagination",name:"Pagination",description:"The most challenging aspect was deciding whether or not the double ellipsis was necessaary. I concluded on making this conditional if the items needed exceeded a certain number. I think this approach makes the component versatile for anyone to use which is why I stuck with this approach.",Demo:Q,code:t({"Pagination.tsx":Ee,"PaginationContent.tsx":Oe,"PaginationPrevious.tsx":He,"PaginationNext.tsx":Le}),docs:ue},{slug:"radio-group",name:"Radio Group",description:"Not the flashiest of components, but this is where my love for functional interaction design comes into play. I created a hover interaction where a user can start the animation by hovering any of the bubbles. Whether you go up or down, the bubble seems to follow you to the next one displaying interactivity and a sense of direction since the hover bubble follows mouse movement.",Demo:Z,code:t({"RadioGroup.tsx":Ve,"RadioItem.tsx":ze}),docs:pe},{slug:"switch",name:"Switch",description:"The Switch component prioritizes instantaneous state reflection. I opted for a calibrated `ease-out` curve rather than a physics-based `spring`. While springs offer a delightful 'bounce,' they introduce perceived latency in a binary toggle where the user expects immediate confirmation. Since this component is triggered by a click rather than a gesture-based drag, the 'bounce' felt disconnected from the user's physical input. Technically, I omitted internal symbols (like 'on/off' icons) to favor component composability. By keeping the 'thumb' and 'track' as clean primitives, the library remains unopinionated. This shifts the responsibility of branding to the implementation layer, ensuring the component doesn't become 'prop-heavy' as users request different icon sets or labels.",Demo:ee,code:t({"Switch.tsx":xe}),docs:he},{slug:"tabs",name:"Tabs",description:"The tab component prioritizes content switching at a users click. I opted for the animation to be emphasized in the tab headers and a simpler animation in the body. The user can feel the responsiveness of the click and see the results aka the content easily. There is a more fun approach of creating a jelly like selected tab indicator using a spring animation but it didn’t feel associated with the user’s input to interact with the element. I omitted any images for this version this time around to focus on the core of what tabs achieve in a UI. I think going forward, there’s possibility to add an image but I would have to explore making the image an optional prompt in the case that the user only has text content to offer within the tabs. Side note, this component is where I learned about utilizing layoutId, layout, key, mode, and Animate Presence from motion.dev. I think the biggest thing that I wasn’t understanding at first was the pill ui that I have when selecting the tab and having it move to the next selected item. It was a nice combination of utilizing state and an animation library to make a fleshed-out component.",Demo:re,code:t({"Tabs.tsx":ye}),docs:ge,variants:te},{slug:"toast",name:"Toast",description:"Heavily inspired by sonner and I wanted to recreate this component to understand why it is structured the way it is and what goes into the interaction design here since Emil is an amazing interaction designer.",Demo:oe,code:t({"Toast.tsx":We,"ToastContext.tsx":Fe,"Toaster.tsx":Ge}),docs:fe}],Je=[...qe].sort((r,o)=>r.name.localeCompare(o.name));export{Ye as M,Ke as X,Je as d};
