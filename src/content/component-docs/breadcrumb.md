## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `BreadcrumbItem[]` (`{ id, title, link }`) | — (required) | Full path, from the root to the current page. |
| `maxItems` | `number` | `5` (clamped to a minimum of `3`) | Once `items.length` exceeds this, the middle items collapse behind an ellipsis menu. |
| `separator` | `ReactNode` | `<ChevronRight />` | Custom divider rendered between crumbs. |
| `renderItem` | `(item: BreadcrumbItem) => ReactNode` | plain `<a href={item.link}>` | Override how each crumb renders — the demo on this page uses it to render static `<span>`s instead of real links. |

## Styling

When collapsing, the first item and the last `maxItems - 2` items stay visible; everything between them collapses into the ellipsis button. Clicking the ellipsis opens `CollapsedMenu` in an absolutely-positioned dropdown, animated with `opacity`/`scale: 0.95 → 1`/`y: -2 → 0` at `0.2s easeOut` — deliberately kept subtle since a breadcrumb is a navigation aid, not a focal interaction. The dropdown closes on any click outside it, tracked via a `window` click listener rather than a blur handler, so it also closes when focus moves outside the DOM entirely.
