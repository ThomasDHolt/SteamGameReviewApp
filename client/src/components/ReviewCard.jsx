export function ReviewCard({review}) {
    return (
        <div className="bg-gray-200 dark:bg-gray-900 m-[12px] rounded-md">
            <h2 className='text-4xl font-bold text-black dark:text-gray-200'>{review.name}</h2>
            <p className='text-black dark:text-gray-200'>{review.content}</p>
        </div>
    );
}