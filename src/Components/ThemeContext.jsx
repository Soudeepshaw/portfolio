import React from "react";


export const ColorModeContext = React.createContext({ toggleColorMode: () => {},
mode: 'light'
 });

export function ThemeContextProvider({ children }) {
  const [mode, setMode] = React.useState('light');

  const toggleColorMode = (newMode) => {
    setMode(newMode || (prevMode => prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
      {children}
    </ColorModeContext.Provider>
  );
}
