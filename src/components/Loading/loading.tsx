import { CircularProgress } from "@mui/material";

export default function Loading() {
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
            }}
        >
            <CircularProgress />
        </div>
    );
}
