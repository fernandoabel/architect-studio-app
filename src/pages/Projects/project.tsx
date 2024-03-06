import { useParams } from "react-router-dom";
import { Breadcrumbs, Container, Link, Stack, Typography, useTheme } from "@mui/material";
import Dot from "../../components/Dot/dot";
import "./project.scss";
import Api from "../../utils/api";

export default function Project(props: any) {
    const params = useParams();
    const theme = useTheme();
    const { Projects } = Api;

    const project = Projects.find((x) => params.projectId === `${x.id}` || params.projectId === `${x.slug}`);

    if (!project) {
        return <h1>Project not found</h1>;
    }

    const images = project.images.map((item) => {
        return { img: item };
    });

    return (
        <Container disableGutters maxWidth={false} fixed className="project">
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/projects/">
                    Projects
                </Link>
                <Typography color="text.primary"></Typography>
            </Breadcrumbs>

            <h3>
                <Dot /> {project?.title}
            </h3>
            <span>{project?.description}</span>

            <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="center"
                alignItems="center"
                spacing={0}
                flexWrap="wrap"
                gap={10}
                sx={{ padding: `${theme.spacing(4)} 0` }}
            >
                {images.map((x, i) => {
                    return <img key={i} className="img" src={x.img} alt={project.title} />;
                })}
            </Stack>
        </Container>
    );
}
