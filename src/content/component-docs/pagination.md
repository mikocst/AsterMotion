## Props

**`Pagination`**

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `activePage` | `number` | — (required) | Current page (1-indexed). |
| `totalPages` | `number` | — (required) | Total number of pages. |
| `maxButtons` | `number` | `5` | Maximum number of page buttons shown before collapsing into ellipses. |
| `onPageChange` | `(page: number) => void` | — (required) | Called with the target page whenever a page button, or Previous/Next, is activated. |
| `children` | `ReactNode` | — | Composed of `PaginationContent`, `PaginationPrevious`, `PaginationNext`. |

**`PaginationContent` / `PaginationPrevious` / `PaginationNext`** — no props. Each reads `activePage`, `totalPages`, and `onPageChange` from context, so they must be rendered inside `<Pagination>`.

## Styling

The page-number logic lives in `generatePaginationRange()` (exported from `PaginationContext.tsx`), decoupled from rendering — it decides between showing no ellipsis, one ellipsis (near either end), or two ellipses (in the middle of a long range) based purely on how close `activePage` is to `1` and `totalPages`. `PaginationPrevious`/`PaginationNext` disable themselves automatically at the first/last page, switching to a muted gray and `cursor-not-allowed` rather than hiding — keeping the control's position stable as the user pages through.
