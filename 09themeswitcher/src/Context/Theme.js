import React from "react";
import { createContext, useContext } from "react";

export const ThemeContext = React.createContext(
    {
        themeMode : 'light',
        darkTheme : () => {},
        lightTheme : () => {}
    }
);

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext)
}  


// import React, { createContext, useContext, useState, useEffect } from "react";

// // 1. Create the context
// export const ThemeContext = createContext({
//   themeMode: "light",
//   darkTheme: () => {},
//   lightTheme: () => {}
// });

// // 2. Create a provider component
// export const ThemeProvider = ({ children }) => {
//   const [themeMode, setThemeMode] = useState("light");

//   useEffect(() => {
//     if (themeMode === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [themeMode]);

//   const darkTheme = () => setThemeMode("dark");
//   const lightTheme = () => setThemeMode("light");

//   return (
//     <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// // 3. Custom hook for easy access
// export const useTheme = () => useContext(ThemeContext);
