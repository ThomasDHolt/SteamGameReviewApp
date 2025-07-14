import { useState, useEffect } from "react";
import { GamesCardCollection } from "../components/GameCardCollection";

export default function GamesPage() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://steamgamereviewapp-server.onrender.com/games");
            const data = await response.json();
            setGames(data);
        }
        fetchData();
    }, []);

    return (
        <>
            <GamesCardCollection games={games} />
        </>
    );
}