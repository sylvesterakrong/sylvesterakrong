import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/assets/banner/nav.png')",
         'footer': "url('/assets/banner/footer.png')",
      },
      backgroundColor: {
        white:{
          50:'#F4F4F4',
        },
        yellow:{
          10:'#DAB90D',
        },
      },
    },
  },
  plugins: [],
}
export default config
