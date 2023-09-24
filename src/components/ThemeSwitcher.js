// ThemeSwitcher.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../actions/themeAction';

const ThemeSwitcher = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <div className="theme-switcher">
      <p>Toggle Theme:</p>
      <label className="switch">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => dispatch(toggleTheme())}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;