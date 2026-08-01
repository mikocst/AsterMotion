## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `'blue' \| 'mono' \| 'red' \| 'green' \| 'yellow'` | — (required) | Selects the text/background/border token set from `badgeColors`. |
| `variant` | `'pill' \| 'monoPill' \| 'flat'` | — (required) | Selects the corner radius from `variantBadgeStyles` — `pill`/`monoPill` are `rounded-md`, `flat` is `rounded-sm`. |
| `children` | `ReactNode` | — | Badge label content. |
| `...rest` | native `div` props | — | Spread onto the root element (e.g. `onClick`, `id`). |

## Styling

The root `className` is built with `cn('inline-flex items-center px-2 text-sm font-medium', badgeColors[color], variantBadgeStyles[variant])`.

**Caveat:** `{...rest}` is spread *after* `className` on the JSX element, not merged into it. If you pass your own `className` through `...rest`, it will fully replace the computed color/shape classes rather than combine with them — fork the component and route an extra `className` prop through `cn()` if you need to add utility classes alongside the built-in styling.

No motion is applied to Badge on purpose: it's meant to be glanced at (a status label) or added/removed in bulk (filters, tags), and animating it would make routine list updates feel sluggish.
