import { useEffect } from "react";

export default function GamesPage() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://steamgamereviewapp-server.onrender.com/games");
            console.log(response);
        }
    });

    return (
        <>
            
        </>
    );
}