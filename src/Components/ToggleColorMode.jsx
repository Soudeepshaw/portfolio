import * as React from 'react';
import { ColorModeContext } from '../Components/ThemeContext';

function ToggleColorMode() {
  const { toggleColorMode, mode } = React.useContext(ColorModeContext);


  const handleToggle = () => {
    toggleColorMode();
    localStorage.setItem('themeMode', mode === 'light' ? 'dark' : 'light');
  };
  return (
    <label className="ui-switch">
      <input
        type="checkbox"
        checked={mode === 'dark'}
        onChange={handleToggle}
      />
      <div className="slider">
        <div className="circle"></div>
      </div>
    </label>
  );
}

export default ToggleColorMode;
