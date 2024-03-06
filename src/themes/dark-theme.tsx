import { createTheme, ThemeOptions } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import { TypographyTheme } from "./typography";

export const DarkModeTheme: ThemeOptions = createTheme(
    deepmerge(TypographyTheme, {
        palette: {
            mode: "dark",
            primary: {
                main: "#f8f8f8",
                dark: "#333333",
            },
            secondary: {
                main: "#fafafa",
            },
        },
    })
);
