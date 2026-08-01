## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `{ name: string; content: string }[]` | — | Ordered list of entries. Each renders a trigger button (`name`) and a collapsible panel (`content`). |

## Styling

Each row is `flex flex-col` with a `border-b border-gray-200` separator, and the trigger is `flex flex-row justify-between` so the chevron always sits flush right regardless of title length.

The chevron rotates via a plain `animate={{ rotate: ... }}` tied to `activeIndex === index` (`-90deg` when open, `0` otherwise) — no spring, so the rotation reads as a direct response to the click rather than a bounce. The panel itself animates `height: 0 → 'auto'` inside `AnimatePresence`, both at `0.2s easeOut`.

Keyboard support is wired independently of the mouse interaction: `ArrowUp`/`ArrowDown` on a focused trigger move focus to the previous/next trigger (wrapping around the ends), via refs collected in `buttonRefs`.

`content` is typed as a plain `string`. If you need rich JSX inside a panel (links, lists, nested components), you'll need to widen that field to `React.ReactNode` in your own copy of the component.
