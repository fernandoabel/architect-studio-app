import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Container from "@mui/material/Container";
import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab } from "@mui/material";

import { GeneralContext } from "../../context/GeneralContext";
import Header from "../../components/Header/header.component";
import ScrollTop from "../../components/ScrollToTop/scroll-to-top.component";
import Loading from "../../components/Loading/loading";
import "./page-layout.scss";

export default function PageLayout(props: any) {
    const context = useContext(GeneralContext);
    const { routes, title } = context.Data;

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (routes && title) setLoading(false);
    }, [routes, title]);

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <Container disableGutters maxWidth={false} sx={{ height: "100%", m: 0, p: 0 }}>
                    <>
                        <Header title={title} routes={routes} />

                        <div id="back-to-top-anchor" />

                        <Outlet />

                        <ScrollTop {...props}>
                            <Fab size="small" aria-label="scroll back to top">
                                <KeyboardArrowUp />
                            </Fab>
                        </ScrollTop>
                    </>
                </Container>
            )}
        </>
    );
}
