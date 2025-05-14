import type { Variant } from 'unocss'

export const variants: Variant[] = [
  (m) => {
    if (m.startsWith('|')) {
      return {
        // Remove the `|` prefix for processing, and specify to place it in the 'overrides' layer
        matcher: m.slice(1), // Remove the `|` from the beginning
        layer: 'overrides', // Use the 'overrides' layer
      }
    }
  },
]
