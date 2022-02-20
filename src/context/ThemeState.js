import { useState } from "react"
import themeContext from "./ThemeContext";


const ThemeState = (props) => {
    const [switchState, setSwitchState] = useState('white')

    const switchTheme = (theme) => {

        if (theme === 'white') {
            setSwitchState('dark')
            document.body.style.backgroundColor = "black"

        } else {
            setSwitchState('white')
            document.body.style.backgroundColor = "white"
        }
    }

    return (
        <themeContext.Provider value={{ switchState, switchTheme }}>
            {props.children}
        </themeContext.Provider>
    )
}

export default ThemeState;