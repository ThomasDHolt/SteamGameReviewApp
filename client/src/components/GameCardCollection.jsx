import { GameCard } from "./GameCard";

export function GamesCardCollection({games}) {
    return (
        <div>
            {games.map((game) => (
                <GameCard key={game.id}
                    game={{
                        name: game.game_name,
                        description: game.game_description,
                        releaseDate: game.date_of_release,
                        genres: game.genres,
                        thumbnailSrc: game.thumbnail_src
                    }}
                />
            ))}
        </div>
    );
}