/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // screens: {
    //   sm: '425px',
    //   // => @media (min-width: 576px) { ... }

    //   md: '768px',
    //   // => @media (min-width: 768px) { ... }

    //   lg: '992px',
    //   // => @media (min-width: 992px) { ... }

    //   xl: '1200px',
    //   // => @media (min-width: 1200px) { ... }
    // },
    extend: {
      colors: {
        white: '#fff',
        black: '#000',
        gray: {
          100: '#fafafa',
          200: '#0f192d',
          300: '#180101',
          400: 'rgba(0, 0, 0, 0.02)',
          500: 'rgba(0, 0, 0, 0.6)',
          600: '#fefefe',
          800: '#887f7f',
        },
        red: {
          100: '#ec1b24',
          200: '#fa0c00',
          300: '#f91515',
          400: '#fa0f0f',
        },
        orange: {
          100: '#ffb800',
          200: '#fdb400',
          300: '#ffa028',
        },
        navy: {
          100: '#190885',
          200: '#010d82',
        },
        lightslategray: {
          100: '#8c93a4',
          200: '#84879e',
        },
        darkgray: '#aaa',
        slateblue: '#3641b7',
        whitesmoke: {
          100: '#efebeb',
          200: '#ebebeb',
        },
        silver: '#c4bcbc',
        gainsboro: {
          100: '#e3e3e3',
          200: '#e1e1e1',
          300: '#ddd',
          400: '#d9d9d9',
        },
        ghostwhite: '#f8f9ff',
        tomato: {
          100: '#ff3434',
          200: '#f52f2f',
        },
      },

      borderRadius: {
        '51xl': '70px',
        '100xl-5': '119.5px',
        '6xl': '25px',
      },
      fontSize: {
        '23xl': '42px',
        '5xl': '24px',
        lg: '18px',
        '6xl': '25px',
        xl: '20px',
        base: '16px',
        xs: '12px',
        '5xs': '8px',
        '9xl': '28px',
        '21xl': '36px',
        '25xl': '44px',
        '45xl': '64px',
      },
      fontFamily: {
        font: 'font',
        poppins: 'Poppins',
      },
      fontWeight: {
        semibold: '600',
        bold: '700',
        normal: '300',
      },
    },
  },
  plugins: [],
};
