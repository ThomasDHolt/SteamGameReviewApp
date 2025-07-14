import { useParams } from "react-router"

export default function LeaveReviewPage() {
    const { gameName } = useParams();

    return (
        <>
            <p>{gameName}</p>
        </>
    )
}