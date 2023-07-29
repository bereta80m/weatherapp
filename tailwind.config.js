/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xxs': '360px',
      // => @media (min-width: 360px) { ... }

      'xs': '480px',
      // => @media (min-width: 480px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'MyClouds':"url('../public/Cloud-background.png')",
          'yellow_rounded':"url('../public/Clear.png')",
          'SunAndCloud':"url('../public/Shower.png')",
          'Thunderstorm':"url('../public/Thunderstorm.png')",
          'fahrenheit':"url('../public/fahrenheit(1).png')",
          'Hail':"url('../public/Hail.png')",
          'Sleet':"url('../public/Sleet.png')",
          'LightCloud':"url('../public/LightCloud.png' )",
          'HeavyRain': "url('../public/HeavyRain.png')"
          
        
         
        },
    },
  },
  plugins: [],
}
