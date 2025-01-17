module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
  extend: {
  height: (theme) => ({
  screen80: '80vh',
  }),
  
  spacing: {
  18: '4.5rem',
  18.5: '4.625rem',
  19: '4.75rem',
  19.5: '4.875rem',
  22: '5.5rem',
  25: '6.25rem',
  25.5: '6.375rem',
  },
  
  colors: {
  sun: '#ffffff',
  sky: '#6eb4d2',
  grass: '#009182',
  dirt: '#624c43',
  cobblestone: '#75737d',
  gold: '#ffd801',
  lava: '#f26827',
  obsidian: '#46325c',
  void: '#000000',
  },
  
  fontFamily: {
  neue_haas_grotesk_ds: ["NeueHaasGroteskDisplay"],
  neue_haas_grotesk_tx: ["NeueHaasGroteskText"],
  },
  
  fontSize: {
  '5.5xl': ['3.375rem', { lineHeight: '1' }],
  }
  },
  },
  variants: {
  extend: {},
  },
  plugins: [],
  }