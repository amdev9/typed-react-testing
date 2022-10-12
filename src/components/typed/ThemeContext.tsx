import React from 'react'

export interface IThemeContext {
  dark: boolean;
  toggleDark?: () => void;
}

const defaultState: IThemeContext = {
  dark: false,
};

const ThemeContext = React.createContext<IThemeContext>(defaultState);

interface IThemeProvider {
  children: JSX.Element,
  darkBoolean: boolean
}

const ThemeProvider = ({ children, darkBoolean }: IThemeProvider) => { 
  const darkObj: IThemeContext = { dark: darkBoolean }
  return <ThemeContext.Provider value={darkObj}>{children}</ThemeContext.Provider>
}

const ThemeConsumer = () => (
  <ThemeContext.Consumer>
    {(contextObj: IThemeContext) => <div>My Name Is: {contextObj.dark.toString()}</div>}
  </ThemeContext.Consumer>
)


export {ThemeContext, ThemeProvider, ThemeConsumer}