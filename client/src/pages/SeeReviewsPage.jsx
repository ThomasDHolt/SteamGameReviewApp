import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function SeeReviewsPage () {
    const { gameName } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function fetchData() {
            console.log(gameName);
            const response = await fetch(`https://steamgamereviewapp-server.onrender.com/games/getGameReviewsByGameName/${gameName}`);
            const data = await response.json();
            console.log(data);
            setReviews(data);
        }
        fetchData();
    }, [gameName]);

    return (
        <>
            
        </>
    );
}