import { useState } from "react";

export function ReviewForm({game}) {
    const [formValues, setFormValues] = useState({
        name: "",
        content: "",
        rating: 0
    });

    async function handleSubmit(event) {
        event.preventDefault();
        await handleReview();
    }

    async function handleReview() {
        const currentDate = new Date();
        const dateString = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`;

        await fetch("https://steamgamereviewapp-server.onrender.com/reviews/postGameReview", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formValues)
        });
    }

    function handleInputChange(event) {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        });
    }

    return (
        <form id="reviewForm" onSubmit={handleSubmit}>
            <label className="text-black dark:text-gray-200" htmlFor="name">Name</label>
            <input
                className="bg-gray-50"
                type="text"
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
            />
            <label className="text-black dark:text-gray-200" htmlFor="content">Content</label>
            <input
                className="bg-gray-50"
                type="text"
                id="content"
                name="content"
                value={formValues.content}
                onChange={handleInputChange}
            />
            <label className="text-black dark:text-gray-200" htmlFor="rating">Rating</label>
            <input
                className="bg-gray-50"
                type="number"
                id="rating"
                name="rating"
                min="1"
                max="5"
                value={formValues.rating}
                onChange={handleInputChange}
            />
            <button className="text-black dark:text-gray-200" type="submit">Submit</button>
        </form>
    );
}