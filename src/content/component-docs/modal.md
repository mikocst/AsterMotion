## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `content` | `string` | — (required) | Body copy shown in the confirmation dialog. |
| `isOpen` | `boolean` | uncontrolled internal state | Optional external control — falls back to internal state when omitted (`externalOpen ?? dialogOpen`). |
| `ref` | `Ref<HTMLDialogElement>` | — | Merged with the component's own internal ref via `useMergedRefs`, so you still get a handle on the native `<dialog>`. |
| `...props` | `HTMLMotionProps<'dialog'>` | — | Spread onto the underlying `motion.dialog`. |

## Styling

Modal is built on a real `<dialog>` element (`showModal()` / `close()`), not a positioned `div` overlay, so it gets native focus trapping and top-layer stacking for free. Closing is sequenced deliberately: the exit animation (`opacity: 1 → 0`, `0.2s easeOut`) plays first, and only once it finishes (`onAnimationComplete`) does the code call `dialog.close()` — closing the native element immediately would cut the fade short. Clicking outside the dialog's content closes it by comparing the click coordinates to `getBoundingClientRect()`, since a `<dialog>`'s backdrop click target isn't otherwise easy to distinguish from its content.

The scale/opacity entrance never dips below `0.95` — smaller reads as the dialog "lunging" at the user, which is exactly wrong for a decisive confirmation. The component currently ships its own trigger button and fixed "Confirm Changes" copy/actions — treat it as a template to fork for app-specific confirmation flows rather than a fully generic primitive.
