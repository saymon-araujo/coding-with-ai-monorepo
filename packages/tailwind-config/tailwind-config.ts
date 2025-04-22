// tailwind-config.ts
import type { Config } from 'tailwindcss'
export default {
  content: [
    '../../packages/ui/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx,md,mdx}',
  ],
  theme: { extend: {} },
  plugins: [],
} satisfies Config
