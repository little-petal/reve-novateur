import type { Config } from "tailwindcss";
import withMT from '@material-tailwind/react/utils/withMT';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing-page': "url('/assets/images/landing-page.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'inter': ['Inter'], //Fin
        'bebas': ['"Bebas Neue"'],
        'bellaza': ['Belleza'], //Fin
        'bevan': ['Bevan'],
        'cantata': ['"Cantata One"'],
        'caudex': ['Caudex'],
        'league': ['"League Gothic"'],
        'oswald': ['Oswald']
      },
      colors: {
        'grayblue' : '#666699',
        'bluegray' : '#336699',
      },
      textColor: {
        'grayblue' : '#666699',
        'bluegray' : '#336699',
      },
      zIndex: {
        '1': '1',
      }
    },
  },
  plugins: [],
};

export default withMT(config);
