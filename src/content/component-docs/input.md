## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | — (required) | Rendered as a `<label htmlFor>` above the field. |
| `error` | `string \| boolean` | — (required) | Truthy switches to the red error style. A `string` value is also rendered as helper text below the input; `true` shows only the red border with no message. |
| `ref` | `Ref<HTMLInputElement>` | — | React 19 ref-as-prop — no `forwardRef` wrapper needed. |
| `...rest` | native `input` props | — | Spread directly onto the `<input>` (`type`, `placeholder`, `disabled`, `onChange`, etc.). |

## Styling

State styling is resolved with a fixed priority, not combined: `disabled` is checked first, then `error`, then the `normal` style (see `getInputStyles()`). A disabled+error input will always render as disabled — the red error border never shows through.

`aria-invalid` and `aria-describedby` are derived automatically from `error`, and the field's `id` falls back to a generated `useId()` when you don't pass one — the error message's `id` (`${inputId}-error`) is wired to `aria-describedby` for you, so screen readers announce it without any extra props.
