/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['40px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      keyframes:{
        fade: {
          '0%': {backgroundColor: 'rgba(0,0,0,0)'},
          '100%': {backgroundColor: 'rgba(0,0,0,0.37)'}
        },
        displace: {
          '0%':{transform: 'translate(100%)'},
          '100%':{transform: 'translate(0px)'}
        },
        return:{
          '0%':{transform: 'translate(0px)'},
          '100%':{transform:'translate(100%)'}
        },
        appearRTL:{
          '0%': {marginRight: '-300px'},
          '100%':{marginRight: '0px'}
        },
        appearLTR:{
          '0%': {marginLeft: '-300px'},
          '100%':{marginLeft: '0px'}
        },
        appearTTB:{
          '0%': {marginTop: '-900px'},
          '100%':{marginTop: '0px'}
        },
        expand:{
          '0%': {padding: '12px'},
          '100%': {padding: '15px'}
        },
        search:{
          '0%': {background: 'rgba(217,217,217,0.3)'},
          '50%': {background: 'linear-gradient(to left, rgba(217,217,217,0.3), rgb(255,255,255))'},
          '100%': {backgroundColor: 'white'}
        },
        flapOpen:{
          '0%':{transform: 'rotateX(0deg)'},
          '50%':{transform: 'rotateX(-90deg)'},
          '100%':{transform: 'rotateX(0deg)'}
        },
        slideOut:{
          '0%': {transform: 'translateY(20px)'},
          '50%':{opacity: 1},
          '100%': {transform: 'translateY(-30deg)'} 
        }
      },
      animation: {
        fade:'fade .3s linear 1',
        displace:'displace .5s ease-in-out',
        return:'return .5s ease-in-out',
        appearRTL: 'appearRTL .2s linear',
        appearLTR: 'appearLTR .4s linear',
        appearTTB: 'appearTTB .3s linear',
        expand: 'expand .2s linear',
        search: 'search .1s ease-in-out',
        flapOpen: 'flapOpen 2s ease-in-out forwards',
        slideOut: 'slideOut 2s ease-in-out forwards'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans'],
        poppins: ['Poppins', 'sans'],
        playfair: ['Playfair', 'serif']
      },
      colors: {
        'primary': "#E4AC07",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "tint": "#101010",
        "tesla-red":"#E82127",
        "white-400": "rgba(255, 255, 255, 0.80)",
        "darkTransparent":"rgba(0, 0, 0, 0.6)",
        "announcementGreen": "rgb(2, 81, 40)",
        "light-gray":"#E5E7EB",
        "dark-gray": "#6B7280"
      },
      backgroundImage: {
        'hero': "url('assets/images/Ellech_bg.png')",
      },
    },
  },
  plugins: [],
}

