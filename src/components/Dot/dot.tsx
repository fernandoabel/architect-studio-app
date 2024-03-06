import Api from "../../utils/api";

export default function Dot() {
    const { theme } = Api.Data;

    return (
        <div
            style={{
                display: "inline-block",
                width: "12px",
                height: "12px",
                backgroundColor: theme.colors.primary,
                borderRadius: "50%",
            }}
        ></div>
    );
}
