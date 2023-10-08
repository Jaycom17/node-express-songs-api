import { Router } from "express";
import { getSongs, getsong, postSong, putSong, deleteSong, getSongsByName } from "../controllers/songs.controller.js";
import { validateSong } from "../middlewares/songs.middleware.js";
import { songSchema } from "../schemas/song.schema.js";

const router = Router();

/**
 * @swagger
 * /api/songs:
 *   get:
 *     summary: Retrieve a list of registered songs.
 *     description: Retrieve a list of songs that are registered in the database.
 *     responses:
 *       200:
 *         description: List of songs retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   songID:
 *                     type: integer
 *                   songName:
 *                     type: string
 *                   artistName:
 *                     type: string
 *                   songGenre:
 *                     type: string
 *                   songImage:
 *                     type: string
 *                   songLink:
*                    type: string
 *       500:
 *         description: Internal server error.
 */
router.get("/songs", getSongs);

/**
 * @swagger
 * /api/songs/{songId}:
 *   get:
 *     summary: Retrieve information about a specific song.
 *     description: Retrieve detailed information about a song using its unique identifier (songId).
 *     parameters:
 *       - in: path
 *         name: songId
 *         required: true
 *         description: Unique identifier of the song to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Song information retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                   songId:
 *                     type: integer
 *                   songName:
 *                     type: string
 *                   artistName:
 *                     type: string
 *                   songGenre:
 *                     type: string
 *                   songImage:
 *                     type: string
 *                   songLink:
 *                     type: string
 *       404:
 *         description: Song not found.
 *       500:
 *         description: Internal server error.
 */
router.get("/songs/:id", getsong);

/**
 * @swagger
 * /api/songs/name/{songName}:
 *   get:
 *     summary: Retrieve a list of songs by name.
 *     description: Retrieve a list of songs whose names include the specified parameter.
 *     parameters:
 *       - in: path
 *         name: songName
 *         required: true
 *         description: The name or part of the name of the song to search for, if the name has spaces " ", you have to change it to "&".
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of songs retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   songId:
 *                     type: integer
 *                   songName:
 *                     type: string
 *                   artistName:
 *                     type: string
 *                   songGenre:
 *                     type: string
 *                   songImage:
 *                     type: string
 *                   songLink:
 *                     type: string
 *       404:
 *         description: No songs found matching the specified name.
 *       500:
 *         description: Internal server error.
 */
router.get("/songs/name/:name", getSongsByName);

/**
 * @swagger
 * /api/songs:
 *   post:
 *     summary: Create a new song.
 *     description: Create a new song in the database with the provided song name, artist name, and song genre.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               songName:
 *                 type: string
 *               artistName:
 *                 type: string
 *               songGenre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Song created successfully.
 *       400:
 *         description: Bad request error.
 *       500:
 *         description: Internal server error.
 */
router.post("/songs", validateSong(songSchema), postSong);

/**
 * @swagger
 * /api/songs/{songId}:
 *   put:
 *     summary: Update the information of a specific song.
 *     description: Update the details of a song using its unique identifier (songId) and the updated information.
 *     parameters:
 *       - in: path
 *         name: songId
 *         required: true
 *         description: Unique identifier of the song to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               songName:
 *                 type: string
 *               artistName:
 *                 type: string
 *               songGenre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Song updated successfully.
 *       404:
 *         description: Song not found.
 *       500:
 *         description: Internal server error.
 */
router.put("/songs/:id",validateSong(songSchema), putSong);

/**
 * @swagger
 * /api/songs/{songId}:
 *   delete:
 *     summary: Delete a specific song by ID.
 *     description: Delete a song from the database using its unique identifier (songId).
 *     parameters:
 *       - in: path
 *         name: songId
 *         required: true
 *         description: Unique identifier of the song to delete.
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Song deleted successfully.
 *       404:
 *         description: Song not found.
 *       500:
 *         description: Internal server error.
 */
router.delete("/songs/:id", deleteSong);

export default router;