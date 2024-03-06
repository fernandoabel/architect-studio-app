import { createContext, useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material";

import { THEME } from "../utils/constants";
import { LightModeTheme } from "../themes/light-theme";
import { DarkModeTheme } from "./../themes/dark-theme";

import LocalStorageService from "./../utils/local-storage.service";

export type ThemeContextType = "light" | "dark";

export const ThemeContext = createContext({
    themeName: "",
    changeThemeTo: (theme: ThemeContextType) => {},
});

export const ThemeContextProvider = (props: any) => {
    const { children } = props;
    const [themeName, setThemeName] = useState<string>(LocalStorageService.get(THEME) ?? "light");

    const mode = useMemo(() => {
        switch (themeName) {
            case "dark":
                return DarkModeTheme;
            default:
                return LightModeTheme;
        }
    }, [themeName]);

    const changeThemeTo = (theme: ThemeContextType) => {
        LocalStorageService.set(THEME, theme);
        setThemeName(theme);
    };

    return (
        <ThemeContext.Provider
            value={{
                themeName: themeName,
                changeThemeTo: changeThemeTo,
            }}
        >
            <ThemeProvider theme={mode}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};
