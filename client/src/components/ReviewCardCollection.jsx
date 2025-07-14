import { ReviewCard } from "./ReviewCard";

export function ReviewsCardCollection({reviews}) {
    return (
        <div>
            {reviews.map((review) => (
                <ReviewCard key={review.review_id}
                    review={{
                        reviewee: review.reviewee_name,
                        content: review.content,
                        date: review.review_date,
                        rating: review.rating
                    }}
                />
            ))}
        </div>
    );
}