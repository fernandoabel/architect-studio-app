import { Link } from "react-router-dom";

export default function OptionalLink(props: { to?: string; children: any }) {
    const { to, children } = props;
    if (to) {
        return (
            <Link to={to} color="inherit">
                {children}
            </Link>
        );
    }
    return <>{children}</>;
}
