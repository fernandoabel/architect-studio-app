import { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { ThemeContext } from "../../context/ThemeContext";
import "./app-logo.scss";

export default function AppLogo(props: AppLogoProps) {
    const { title } = props;
    const navigate = useNavigate();
    const themeContext = useContext(ThemeContext);
    const { themeName } = themeContext;

    const goHomePage = () => {
        navigate("/", { replace: true });
    };

    const titleImage = useMemo(() => {
        return themeName === "light" ? "title-white.png" : "title-black.png";
    }, [themeName]);

    return (
        <Box className={"AppLogo"} sx={{ alignItems: "center", display: "flex" }}>
            <Box
                title={title}
                onClick={goHomePage}
                sx={{
                    backgroundImage: `url("${titleImage}")`,
                    backgroundSize: "cover",
                    cursor: "pointer",
                    width: "18rem",
                    height: "4rem",
                }}
            />
        </Box>
    );
}

export interface AppLogoProps {
    title: string;
    minimalist?: boolean;
}
