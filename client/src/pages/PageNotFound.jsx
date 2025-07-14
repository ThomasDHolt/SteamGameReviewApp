import { Link } from "react-router";

export default function PageNotFound() {
    return (
        <>
            <h2>Page not found!</h2>
            <Link to="/">Return to Home</Link>
        </>
    )
}