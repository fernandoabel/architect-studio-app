import { Box } from "@mui/material";
import Slider from "../../components/Slider/slider.component";

function Home() {
    const images = Array.from(new Array(5)).map((x, i) => `/img/home/background${i + 1}.jpg`);
    return (
        <>
            <Box sx={{ maxHeight: "calc(100% - 90px)", height: "100%" }}>
                <Slider images={images} />
            </Box>
        </>
    );
}

export default Home;
