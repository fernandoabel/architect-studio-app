import { ImageList, ImageListItem, ImageListItemBar, useMediaQuery, useTheme } from "@mui/material";
import OptionalLink from "../OptionalLink/optional-link.component";
import "./image-list.scss";

export default function CustomImageList(props: ImageListProps) {
    const theme = useTheme();
    let { gap, variant, rowHeight, images } = props;

    const matchesSM = useMediaQuery(theme.breakpoints.down("md"));
    const matchesMD = useMediaQuery(theme.breakpoints.only("md"));
    const matchesLG = useMediaQuery(theme.breakpoints.down("xl"));

    if (!gap) gap = 2;

    let cols = matchesSM ? 1 : matchesMD ? 2 : matchesLG ? 3 : 4;

    return (
        <ImageList
            className="ImageList"
            variant={variant}
            cols={cols}
            gap={gap}
            rowHeight={rowHeight}
            sx={{
                height: "auto",
                transform: "translateZ(0)",
                overflow: "visible",
            }}
        >
            {images.map((item, index) => {
                return (
                    <OptionalLink key={index} to={item.url}>
                        <ImageListItem key={index}>
                            <img className="img" src={item.img} alt={item.title} />

                            {item.title && (
                                <ImageListItemBar
                                    className="ImageListItemBar"
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    position="top"
                                />
                            )}
                        </ImageListItem>
                    </OptionalLink>
                );
            })}
        </ImageList>
    );
}

export interface ImageListProps {
    variant?: "masonry" | "quilted" | "standard" | "woven";
    gap?: number;
    rowHeight?: number;
    images: ImageProps[];
}

export interface ImageProps {
    img: string;
    title?: string;
    subtitle?: string;
    url?: string;
}
