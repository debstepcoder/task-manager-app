import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../actions/themeAction';
import Switch from 'react-switch';

const Headers = () => {
  const [checked, setChecked] = useState(false);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <header className={darkMode ? 'dark-header' : 'light-header'}>
      <h2>Task Manager</h2>
      <Switch
          onChange={() =>{ 
            dispatch(toggleTheme());
            setChecked(!checked);
        }}
          checked={checked}
          className="react-switch"
        />
    </header>
  );
};

//   return (
//     <header className={darkMode ? 'dark-header' : 'light-header'}>
//       <h1>Task Manager</h1>
//       <button onClick={() => dispatch(toggleTheme())}>
//         Toggle Theme
//       </button>
//     </header>
//   );
// };

export default Headers;