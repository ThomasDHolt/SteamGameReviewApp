import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ReviewsCardCollection } from "../components/ReviewCardCollection";

export default function SeeReviewsPage () {
    const { gameName } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://steamgamereviewapp-server.onrender.com/games/getGameReviewsByGameName/${gameName}`);
            const data = await response.json();
            setReviews(data);
        }
        fetchData();

        const intervalId = setInterval(fetchData, 5000);

        return () => clearInterval(intervalId);

    }, [gameName]);

    return (
        <>
            <ReviewsCardCollection reviews={reviews} />
        </>
    );
}