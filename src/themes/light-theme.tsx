import { createTheme, ThemeOptions } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import { TypographyTheme } from "./typography";

export const LightModeTheme: ThemeOptions = createTheme(
    deepmerge(TypographyTheme, {
        palette: {
            mode: "light",
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
