## Props

**`Card`**

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | — (required) | Sets the `--card-px`/`--card-py` CSS custom properties consumed by `CardHeader` and `CardFooter`. |
| `variant` | `'bordered' \| 'flat' \| 'elevated'` | `'bordered'` | Background/border treatment. |
| `behavior` | `'static' \| 'interactive'` | `'static'` | `'interactive'` adds a hover lift, shadow, and pointer cursor. |
| `className`, `style` | native `div` props | — | Merged via `cn()` / spread; `style` is merged on top of the generated `--card-*` variables, so you can still override them per-instance. |

**`CardHeader` / `CardFooter` / `CardTitle` / `CardDescription`**

Plain content wrappers (`div`, `div`, `h3`, `p`) — no props beyond native HTML attributes plus `className`. `CardHeader`/`CardFooter` read the `--card-px`/`--card-py` variables set by the parent `Card`, so their padding always stays in sync with `size` without needing a `size` prop of their own.

## Styling

`size` doesn't set padding directly on `Card` — it sets CSS custom properties that `CardHeader` (`pt-[var(--card-py)] px-[var(--card-px)]`) and `CardFooter` (`pb-[var(--card-py)] px-[var(--card-px)]`) read. This is why padding stays consistent even though the card's own body content sits between header and footer with no padding utility of its own — compose your card content between `CardHeader` and `CardFooter` rather than adding raw padding to `Card` itself.
