import { Link, useLocation } from "react-router-dom";
import { Route } from "../../model/header.model";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, MenuItem, Menu } from "@mui/material";
import "./navigation.scss";

const Navigation = (props: NavigationProps) => {
    const { routes } = props;
    const location = useLocation();

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    let renderMenuButtons = () => {
        return routes.map((route: any, index: any) => (
            <Link
                key={`${route.name}-${index}`}
                to={`${route.slug}`}
                className={route.slug === location.pathname ? "selected" : undefined}
            >
                <MenuItem key={index} onClick={handleCloseNavMenu} disableRipple disableTouchRipple>
                    {route.name}
                </MenuItem>
            </Link>
        ));
    };

    return (
        <Box className="Navigation">
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: "block", md: "none" },
                    }}
                >
                    {renderMenuButtons()}
                </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "flex-end" }}>
                {renderMenuButtons()}
            </Box>
        </Box>
    );
};

export interface NavigationProps {
    routes: Route[];
}

export default Navigation;
