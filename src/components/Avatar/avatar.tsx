import "./avatar.scss";

export default function Avatar(props: AvatarProps) {
    const { imageUrl } = props;

    return (
        <div className={"avatar"}>
            <div className={"image"} style={{ backgroundImage: `url(${imageUrl})` }}></div>
        </div>
    );
}

export interface AvatarProps {
    imageUrl: string;
}
