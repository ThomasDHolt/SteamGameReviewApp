import { useParams } from "react-router"
import { ReviewForm } from "../components/ReviewForm";

export default function LeaveReviewPage() {
    const { gameName } = useParams();

    return (
        <>
            <ReviewForm game={gameName} />
        </>
    )
}