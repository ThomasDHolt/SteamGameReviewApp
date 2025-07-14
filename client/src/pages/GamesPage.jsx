import { useState, useEffect } from "react";

export default function GamesPage() {
    const [games, setGames] = useState([]);
    const [thumbnails, setThumbnails] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://steamgamereviewapp-server.onrender.com/games");
            const data = await response.json();
            setGames(data);
        }
        fetchData();
        fetchThumbnailData();
    }, []);

    return (
        <>
            
        </>
    );
}