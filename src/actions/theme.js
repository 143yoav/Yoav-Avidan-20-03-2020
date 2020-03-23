export const updateTheme = theme => ({
  type: 'UPDATE_THEME',
  theme: theme ? 'light' : 'dark'
});
