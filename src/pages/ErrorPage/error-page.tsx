import { Box, Container, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error: any = useRouteError();
    console.error(error);

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <Container id="error-page" disableGutters maxWidth={"sm"} sx={{ height: "400px", m: "auto", p: 0 }}>
                <Typography variant="h1" noWrap>
                    Oops!
                </Typography>
                <Typography variant="body1" noWrap>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p>
                        <i>{error.statusText || error.message}</i>
                    </p>
                </Typography>
            </Container>
        </Box>
    );
}
