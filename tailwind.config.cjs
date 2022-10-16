/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.tsx'],
    theme: {
      
      fontSize: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        '2xl': 32,
      },

      colors: {
        
        transparent: 'transparent',
        black: '#000',
        white: '#FFF',
        bgcolor: '#375055',

        safron: {
         500: '#DDC69B',
         400: '#F8CACA',
        },

        gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        100: '#e1e1e6',
        200: '#c4c4cc',
        },
        
        cyan: {
        500: '#81D8F7',
        300: '#b0dff0',
        }
      },

        extend: {
            fontFamily: {
                sans: 'Inter, sans-serif',
            },
        },
    },
    plugins: [],
};
