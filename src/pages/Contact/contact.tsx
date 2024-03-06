import { Box, Container, Divider, Link, Typography } from "@mui/material";
import Api from "../../utils/api";
import Avatar from "../../components/Avatar/avatar";
import SocialPane from "../../components/SocialPanel/social-panel";

export default function Contact() {
    const { Data } = Api;
    const { avatar, description, email, name, role, social } = Data;

    return (
        <Container
            maxWidth="lg"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "80%",
            }}
        >
            <Box display="flex" flexDirection={"row"} flexWrap={"wrap"} gap={"8px"}>
                <Box flexGrow={1} flexBasis={"25%"}>
                    <Avatar imageUrl={avatar} />
                </Box>

                <Box flexGrow={1} flexBasis={"70%"} sx={{ p: "2em" }}>
                    <Typography
                        variant="h2"
                        sx={{
                            textTransform: "uppercase",
                        }}
                    >
                        {name}
                    </Typography>

                    <Typography variant="h3">{role}</Typography>

                    <Link color="inherit" href={`mailto:${email}`}>
                        {email}
                    </Link>

                    <Divider sx={{ m: "1em 0" }} />

                    <Typography variant="body1" sx={{ textAlign: "justify" }}>
                        {description}
                    </Typography>

                    <Divider sx={{ m: "1em 0" }} />

                    <SocialPane data={social}></SocialPane>
                </Box>
            </Box>
        </Container>
    );
}
