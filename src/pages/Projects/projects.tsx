import { Box } from "@mui/material";
import CustomImageList, { ImageProps } from "../../components/ImageList/image-list.component";
import Api from "../../utils/api";

export default function Projects() {
    const projects: ImageProps[] = Api.Projects.map((item) => {
        return {
            img: item.images[0],
            title: item.title,
            subtitle: item.description,
            url: `/projects/${item.slug ?? item.id}`,
        };
    });

    return (
        <Box>
            <CustomImageList variant={"quilted"} gap={2} rowHeight={400} images={projects} />
        </Box>
    );
}
