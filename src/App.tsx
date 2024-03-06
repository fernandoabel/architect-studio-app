import { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

/** Context */
import { ThemeContext, ThemeContextProvider } from "./context/ThemeContext";
import { GeneralContextProvider } from "./context/GeneralContext";

/** Pages */
import ErrorPage from "./pages/ErrorPage/error-page";
import Contact from "./pages/Contact/contact";
import PageLayout from "./pages/Root/page-layout";
import Home from "./pages/Home/home";
import Projects from "./pages/Projects/projects";
import Project from "./pages/Projects/project";

import Api from "./utils/api";
import "./App.scss";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/projects",
                element: <Projects />,
            },
            {
                path: "/projects/:projectId",
                element: <Project />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ],
    },
]);

const App = () => {
    const themeContext = useContext(ThemeContext);
    const { Data } = Api;

    return (
        <ThemeContextProvider value={themeContext}>
            <GeneralContextProvider value={Data}>
                <CssBaseline />
                <RouterProvider router={router} />
            </GeneralContextProvider>
        </ThemeContextProvider>
    );
};

export default App;
