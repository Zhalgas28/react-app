import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = () => {
    const defaultTheme = theme == Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(defaultTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, defaultTheme);
  }

  return {
    theme: theme,
    toggleTheme: toggleTheme,
  }
}