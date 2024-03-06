import { Route } from "../../model/header.model";
import AppLogo from "../AppLogo/app-logo";
import Navigation from "../Navigation/navigation.component";
import ThemeSwitcher from "../ThemeSwitcher/theme-switcher";

import { AppBar, Toolbar, Box } from "@mui/material";

export default function Header(props: HeaderProps) {
    const { title, routes } = props;

    return (
        <AppBar
            color="inherit"
            position="sticky"
            elevation={0}
            sx={{ height: "90px", display: "flex", justifyContent: "space-around", alignItems: "center" }}
        >
            <Toolbar
                sx={{
                    width: {
                        xs: "100%",
                        md: "70%",
                    },
                    height: "100%",
                }}
            >
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                    <AppLogo title={title} />
                </Box>

                <Box className="filler" sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1, flex: "auto" }}></Box>

                <Navigation routes={routes} />

                <Box sx={{ display: { xs: "block", md: "none" }, margin: "0 auto" }}>
                    <AppLogo title={title} />
                </Box>

                <ThemeSwitcher />
            </Toolbar>
        </AppBar>
    );
}

export interface HeaderProps {
    title: string;
    routes: Route[];
}
