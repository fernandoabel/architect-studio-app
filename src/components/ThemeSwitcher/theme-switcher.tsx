/* React */
import { useContext } from "react";
/* MUI */
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
/* ThemeContext */
import { ThemeContext } from "../../context/ThemeContext";

export default function ThemeSwitcher() {
    const themeContext = useContext(ThemeContext);
    const { themeName, changeThemeTo } = themeContext;

    const onLabelClicked = () => {
        const newTheme = themeName === "light" ? "dark" : "light";
        changeThemeTo(newTheme);
    };

    return (
        <IconButton color="inherit" size="large" edge="end" onClick={onLabelClicked}>
            {themeName === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
    );
}
