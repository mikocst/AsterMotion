## Props

**`Carousel`** — `children?: ReactNode` (composed of one or more `CarouselItem` elements).

**`CarouselItem`**

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `ReactNode` | — (required) | Content or image rendered inside the slide. |
| `id` | `string` | — (required) | Stable identifier used to register the item with the parent `Carousel`. |

## Styling

`CarouselItem`s register themselves with the parent via context (`registerItem`/`deregisterItem` in a mount/unmount `useEffect`), so `Carousel` derives the total item count from whoever is actually rendered rather than a prop you have to keep in sync. A `ResizeObserver` on the track measures `itemWidth` once, and every item is rendered at that fixed width so the track can slide by simple multiples of it (`x: -(activeIndex * itemWidth)`, `0.3s easeOut`).

The non-active items are visually pushed back with `scale: 0.95` and a `blur(10px)` filter (`0.2s easeInOut`) — this is what communicates "not the current slide" instead of a dimmed overlay or opacity change, and doubles as a subtle depth cue during the slide transition. The prev/next arrows are the shared `Button` component in its `Icon` variant, so they inherit the same hover/tap feedback as icon buttons elsewhere in the library.
