## Props

Switch currently takes **no props** — `isOn` is internal (`useState(true)`), so this ships as a fixed, uncontrolled demo primitive rather than a controllable form component. To use it in a real form, add `checked`/`defaultChecked`/`onCheckedChange` props and apply the same controlled-with-fallback pattern used by `RadioGroup` and `Modal` (`external ?? internal` state).

## Styling

The track's background color cross-fades directly (`animate={{ backgroundColor }}`), while the thumb's `translateX` uses a `spring` (`stiffness: 300, damping: 30`) — the one place in the library a spring drives a click-triggered toggle rather than a hover/drag gesture. It's intentional here because the motion represents a physical slide from one side to the other, not a decision being confirmed; contrast with Modal or Accordion, which use `easeOut` specifically because a spring's bounce would read as latency on a binary state change.
