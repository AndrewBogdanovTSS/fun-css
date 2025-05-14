import type { Preflight } from 'unocss'
import type { Theme } from 'unocss/preset-wind3'

export default {
  getCSS: ({ theme }: { theme: Theme }) => `
    :root {
      --un-default-border-color: ${theme.colors!.black};
    }
    body {
      margin: 0;
    }
  `,
} as Preflight
