## Props

**`RadioGroup`**

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | — | Controlled selected value. |
| `defaultValue` | `string` | — | Initial value when uncontrolled. |
| `onValueChange` | `(value: string) => void` | — | Called when the selection changes. |
| `name` | `string` | generated via `useId()` | Native `name` shared by all `RadioItem`s so browser radio grouping works without manual wiring. |

**`RadioItem`** (extends `InputHTMLAttributes<HTMLInputElement>`)

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | — (required) | This item's value, compared against the group's selected value. |
| `id` | `string` | generated via `useId()` | Native `id`, also used as the item's registration key. |
| `children` | `ReactNode` | falls back to `value` | Label content. |

## Styling

A real `<input type="radio">` sits invisibly (`opacity-0`) on top of the visual circle, so keyboard navigation, form submission, and screen readers all work exactly as they would for native radios — the visible dot/ring is purely decorative motion layered on top (`scale`/`opacity`, `0.15s easeOut`).

The hover "bubble" that appears behind whichever item you're pointing at travels *toward* your mouse: each item registers its index on mount, and when the hovered index changes, the group compares it to the previous one to derive a direction (`'up'`/`'down'`), which flips the bubble's enter/exit offset accordingly — the bubble always animates from the direction you're moving, not from a fixed origin.
