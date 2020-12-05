module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 8px 12px -5px rgba(0, 0, 0, 0.1), 0 4px 8px -5px rgba(0, 0, 0, 0.3)',
      lg: '0 10px 15px -13px rgba(255, 255, 255, 0.3), 0 14px 16px -12px rgba(255, 255, 255, 0.5)',
      xl: '0 10px 15px -5px rgba(0, 0, 0, 0.2), 0 12px 18px -4px rgba(0, 0, 0, 0.2)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
     outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
     focus: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
