import { createContext, useContext, useState } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [light, setLight] = useState(true)
    const changeTheme = () => {
        setLight(!light)
        console.log(light)
    }

    return (
        <ThemeContext.Provider value={{light, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)