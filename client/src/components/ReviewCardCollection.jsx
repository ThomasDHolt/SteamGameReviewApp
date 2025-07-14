import { ReviewCard } from "./ReviewCard";

export function GamesCardCollection({reviews}) {
    return (
        <div>
            {reviews.map((review) => (
                <ReviewCard key={review.id}

                />
            ))}
        </div>
    );
}