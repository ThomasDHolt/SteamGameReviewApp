import express, { response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const db = new pg.Pool({
    connectionString: process.env.DB_CONN
});

app.get("/", (req, res) => {
    res.json("On the Steam Game Reviews API root route");
});

app.get("/games", async (req, res) => {
    const result = await db.query('SELECT * FROM games');

    res.json(result.rows);
});

app.get("/games/getGameByid/:gameId", async (req, res) => {
    const gameId = req.params.gameId;

    const result = await db.query(
        'SELECT games.name AS game_name, games.description AS game_description, games.date_of_release, ARRAY_AGG(genres.name) AS genres FROM games JOIN games_genres ON games.id = games_genres.game_id JOIN genres ON games_genres.genre_id = genres.id WHERE games.id = $1 GROUP BY games.name, games.description, games.date_of_release',
        [gameId]);

    res.json(result.rows);
});

app.get("/games/getGameReviews", async (req, res) => {
    const result = await db.query(
        'SELECT games.name AS game_name, reviews.reviewee AS reviewee_name, reviews.content, reviews.review_date, reviews.rating FROM games JOIN games_reviews ON games.id = games_reviews.game_id JOIN reviews ON games_reviews.review_id = reviews.id'
    );

    res.json(result.rows);
});

app.get("/games/getGameReviewsByGameId/:gameId", async (req, res) => {
    const gameId = req.params.gameId;

    const result = await db.query(
        'SELECT games.name AS game_name, reviews.reviewee AS reviewee_name, reviews.content, reviews.review_date, reviews.rating FROM games JOIN games_reviews ON games.id = games_reviews.game_id JOIN reviews ON games_reviews.review_id = reviews.id WHERE games.id = $1',
        [gameId]
    );

    res.json(result.rows);
});

app.get("/reviews", async (req, res) => {
    const result = await db.query('SELECT * FROM reviews');

    res.json(result.rows);
});

app.get("/genres", async (req, res) => {
    const result = await db.query('SELECT * FROM genres');

    res.json(result.rows);
});

app.get("/thumbnails", async (req, res) => {
    const result = await db.query('SELECT * FROM thumbnails');

    res.json(result.rows);
});

app.get("/thumbnails/getByGameId/:gameId", async (req, res) => {
    const gameId = req.params.gameId;

    const result = await db.query(
        'SELECT games.name, thumbnails.src FROM games JOIN games_thumbnails ON games.id = games_thumbnails.game_id JOIN thumbnails ON games_thumbnails.thumbnail_id = thumbnails.id WHERE games.id = $1',
        [gameId]
    );

    res.json(result.rows);
});

app.listen("8080", () => {
    console.log("Server running...");
});