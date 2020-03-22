const themeReducerDefaultState = 'light';

export default (state = themeReducerDefaultState, action) => {
  switch (action.type) {
    case 'UPDATE_THEME':
      return action.theme;
    default:
      return state;
  }
};
