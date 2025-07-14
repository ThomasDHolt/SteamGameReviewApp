export function ReviewCard({game}) {
    

    return (
        <div className="bg-gray-200 dark:bg-gray-900 m-[12px] rounded-md">
            <h2 className='text-4xl font-bold text-black dark:text-gray-200'>{game.name}</h2>
            <p className='text-black dark:text-gray-200'>{game.description}</p>
            <img className="w-[30vw]" src={game.thumbnailSrc} />
            <div className="flex flex-row justify-center">
                <Link to={`/games/seeReviews/${game.name}`}>
                    <div className="flex flex-row justify-center bg-amber-600 text-gray-200 w-[40vw] font-bold m-[10px] p-[5px] rounded-2xl hover:bg-gray-200 hover:text-gray-950">
                        See Reviews
                    </div>
                </Link>
                <Link to={`/games/leaveReview/${game.name}`}>
                    <div className="flex flex-row justify-center bg-amber-600 text-gray-200 w-[40vw] font-bold m-[10px] p-[5px] rounded-2xl hover:bg-gray-200 hover:text-gray-950">
                        Leave a Review
                    </div>
                </Link>
            </div>
        </div>
    );
}