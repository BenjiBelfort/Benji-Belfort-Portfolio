import { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; // Chemin vers ThemeContext

export const useTheme = () => useContext(ThemeContext);