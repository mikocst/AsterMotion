## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `tabs` | `{ title: string; content: ReactNode }[]` | 3 built-in demo tabs | Tab list. Each `content` renders in the body when its tab is active. |

## Styling

The active-tab indicator is a shared-layout pill (`layoutId="pill"`, `layout`, `0.3s easeInOut`) — Motion animates it *between* tab headers rather than fading a new one in, which is what makes it read as one element moving instead of two elements crossfading. The body content below cross-fades on `opacity` (`0.2s easeOut`) inside `AnimatePresence mode="wait"`, keyed on the active tab index, so the outgoing content fully exits before the incoming content mounts — never both visible at once.

The tab header row is `overflow-x-auto` rather than wrapping, so a long tab set scrolls horizontally instead of growing to multiple lines.
