const themeReducer = (state = { darkMode: false }, action) => {
    switch (action.type) {
      case 'TOGGLE_THEME':
        return { ...state, darkMode: !state.darkMode };
      // Handle other theme-related actions here.
      default:
        return state;
    }
  };
  
  export default themeReducer;