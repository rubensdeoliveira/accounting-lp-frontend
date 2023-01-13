import { extendTheme } from '@chakra-ui/react'
import { lighten } from 'polished'

export const theme = extendTheme({
  breakpoints: {
    sm: '360px',
    md: '576px',
    lg: '768px',
    xl: '992px',
    '2xl': '1220px',
  },
  colors: {
    'gray.100': '#DDDDDD',
    'gray.400': '#2E2E30',
    'gray.500': '#343434',
    'gray.800': '#202020',
    'gray.900': '#161616',
    'red.500': '#F50D32',
    'red.500.lighten': lighten(0.2, '#F50D32'),
  },
  styles: {
    global: {
      html: {
        fontSize: '62.5%',
      },
      body: {
        bg: 'gray.800',
        color: 'white',
        fontFamily: 'Montserrat',
        fontSize: '1.6rem',
        scrollbarColor: 'red',
      },
      'body::-webkit-scrollbar': {
        width: '8px',
      },
      'body::-webkit-scrollbar-track': {
        background: 'gray.500',
      },
      'body::-webkit-scrollbar-thumb': {
        backgroundColor: 'red.500',
        borderRadius: '20px',
      },
      a: {
        _hover: {
          textDecoration: 'none !important',
        },
      },
    },
  },
})
