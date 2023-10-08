import { pool } from "../db.js";
import { getLink } from "../webscrapping/getLink.js";
import { validateSongName } from "../util/util.js";

export const getSongs = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM songs");
    return res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getsong = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM songs where songID=?", [req.params.id]);
      return res.json(rows[0]);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

export const postSong = async (req, res) => {
  try {
    const { songName, artistName, songGenre } = req.body;
    const {link, image} = await getLink(songName + " " + artistName);
    await pool.query("INSERT INTO songs (songName, artistName, songGenre, songImage, songLink) VALUES (?,?,?,?,?)", [songName, artistName, songGenre, image, link]);
    return res.status(201).json({ message: "Song created" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const putSong = async (req, res) => {
  try {
    const { songName, artistName, songGenre } = req.body;
    const {link, image} = await getLink(songName + " " + artistName);
    await pool.query("UPDATE songs SET songName=?, artistName=?, songGenre=?, SongLink=?, songImage=? WHERE songID=?", [songName, artistName, songGenre, link, image, req.params.id]);
    return res.status(201).json({ message: "Song updated" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteSong = async (req, res) => {
  try {
    await pool.query("DELETE FROM songs WHERE songID=?", [req.params.id]);
    return res.send("DELETE");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getSongsByName = async (req, res) => {
  try {
    if(!validateSongName(req.params.name)){return res.status(500).json({ message: "Please check the string" });}
    const name = `%${req.params.name.replace(/&/g, '%')}%`;
    const [rows] = await pool.query("SELECT * FROM songs WHERE songName LIKE ? or artistName LIKE ? or songGenre LIKE ?", [name, name, name]);
    return res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}