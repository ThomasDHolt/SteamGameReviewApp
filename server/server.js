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
    const result = await db.query(
        'SELECT games.id, games.name AS game_name, games.description AS game_description, games.date_of_release, ARRAY_AGG(genres.name) AS genres, thumbnails.src AS thumbnail_src FROM games JOIN games_genres ON games.id = games_genres.game_id JOIN genres ON games_genres.genre_id = genres.id JOIN games_thumbnails ON games.id = games_thumbnails.game_id JOIN thumbnails ON games_thumbnails.thumbnail_id = thumbnails.id GROUP BY games.id, games.name, games.description, games.date_of_release, thumbnails.src');

    res.json(result.rows);
});

app.get("/games/getGameByid/:gameId", async (req, res) => {
    const gameId = req.params.gameId;

    const result = await db.query(
        'SELECT games.name AS game_name, games.description AS game_description, games.date_of_release, ARRAY_AGG(genres.name) AS genres FROM games JOIN games_genres ON games.id = games_genres.game_id JOIN genres ON games_genres.genre_id = genres.id WHERE games.id = $1 GROUP BY games.name, games.description, games.date_of_release',
        [gameId]);

    res.json(result.rows);
});

app.get("/games/getGameByName/:gameName", async (req, res) => {
    const gameName = req.params.gameName;

    const result = await db.query(
        'SELECT games.name AS game_name, games.description AS game_description, games.date_of_release, ARRAY_AGG(genres.name) AS genres FROM games JOIN games_genres ON games.id = games_genres.game_id JOIN genres ON games_genres.genre_id = genres.id WHERE games.name = $1 GROUP BY games.name, games.description, games.date_of_release',
        [gameName]);

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

app.get("/games/getGameReviewsByGameName/:gameName", async (req, res) => {
    const gameName = req.params.gameName;

    const result = await db.query(
        'SELECT games.name AS game_name, reviews.reviewee AS reviewee_name, reviews.content, reviews.review_date, reviews.rating FROM games JOIN games_reviews ON games.id = games_reviews.game_id JOIN reviews ON games_reviews.review_id = reviews.id WHERE games.name = $1',
        [gameName]
    );

    res.json(result.rows);
});

app.post("/reviews/postGameReviewByGameId/:gameId", async (req, res) => {
    const gameId = req.params.gameId;
    const body = req.body;

    const reviewNameFromClient = body.reviewee;
    const reviewContentFromClient = body.content;
    const reviewDateFromClient = body.date;
    const reviewRatingFromClient = body.rating;

    const data = await db.query(
        'INSERT INTO reviews (reviewee, content, review_date, rating) VALUES ($1, $2, $3, $4)',
        [reviewNameFromClient, reviewContentFromClient, reviewDateFromClient, reviewRatingFromClient]
    );

    res.send(data);
});

app.post("/games/postGameIdAndReviewId", async (req, res) => {
    const gameId = body.gameId;
    const reviewId = body.reviewId;

    const data = await db.query(
        'INSERT INTO games_reviews (game_id, review_id) VALUES ($1, $2)',
        [gameId, reviewId]
    );

    res.send(data);
});

app.get("/reviews", async (req, res) => {
    const result = await db.query('SELECT * FROM reviews');

    res.json(result.rows);
});

app.get("/reviews/getReviewId", async (req, res) => {
    const reviewName = req.body.reviewee;
    const reviewContent = req.body.content;

    const result = await db.query(
        'SELECT id FROM reviews WHERE reviews.reviewee = $1 AND reviews.content = $2',
        [reviewName, reviewContent]
    );

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