import { useState } from "react";
import { GameCard } from "./GameCard";

export function GamesCardCollection({games}) {
    return (
        <div>
            {games.map((game) => {
                <GameCard
                    game={{
                        name: game.name,
                        description: game.description,
                        releaseDate: game.date_of_release,
                        genres: game.genres,
                        thumbnailSrc: game.thumbnailSrc
                    }}
                />
            })}
        </div>
    );
}