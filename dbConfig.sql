create database dbMusic

use dbMusic

create table songs(
    songID INT AUTO_INCREMENT,
    songName VARCHAR(40),
    artistName VARCHAR(80),
    songGenre varchar(100),
    songImage varchar(255),
    songLink VARCHAR(255),
    PRIMARY KEY(songID)
)