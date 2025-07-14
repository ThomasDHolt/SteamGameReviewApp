export function GameCard({game}) {
    return (
        <div>
            <p>{game.name}</p>
            <p>{game.description}</p>
            <p>{game.thumbnailSrc}</p>
        </div>
    );
}