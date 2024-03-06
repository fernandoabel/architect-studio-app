import "./social-pane.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function SocialPane(props: SocialProps) {
    const { data } = props;
    if (!(data && data.length > 0)) return <></>;

    const renderIcon = (element: any) => {
        switch (element.name) {
            case "Facebook":
                return <FacebookIcon />;
            case "Instagram":
                return <InstagramIcon />;
            case "Twitter":
                return <TwitterIcon />;
            case "Linkedin":
                return <LinkedInIcon />;
            case "Email":
                return <EmailIcon />;
            default:
                break;
        }
    };

    return (
        <ul className="social">
            {data.map((element, index) => {
                return (
                    <li key={index}>
                        <a href={element.url} target="_blank" rel="noreferrer">
                            {renderIcon(element)}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}

export interface SocialProps {
    data: {
        name: string;
        url: string;
    }[];
}
