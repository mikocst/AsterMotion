## Props

**`useToast()`** (call inside a `<ToastProvider>`) — returns `{ addToast(toastType, description), dismissToast(id) }`.

| Concept | Type | Default | Description |
| --- | --- | --- | --- |
| `toastType` | `'default' \| 'description' \| 'success' \| 'info' \| 'warning' \| 'error' \| 'custom'` | — | Selects an icon + color treatment from `toastMap`. Only `'description'` renders the optional `header` text. |

**`Toaster`**

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `position` | `'top-left' \| 'top-right' \| 'top-center' \| 'bottom-left' \| 'bottom-right' \| 'bottom-center'` | `'bottom-right'` | Corner/edge the stack anchors to. |
| `expandedOnHover` | `boolean` | `true` | Whether hovering the stack fans the toasts apart instead of leaving them collapsed. |

## Styling

The queue caps at 3 toasts — adding a 4th drops the oldest. Stacked (non-hovered) toasts are pushed back by their distance from the newest: each one scales down an extra `5%` and offsets `10px` per position back in the stack. Hovering expands that offset to `64px` so every toast becomes fully readable, using a `spring(stiffness: 300, damping: 30)` for the resulting movement. Hovering also pauses each toast's 4-second auto-dismiss timer, so you can't have a toast disappear out from under your cursor while reading it.
