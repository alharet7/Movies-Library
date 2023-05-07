DROP TABLE IF EXISTS addMovie;


CREATE TABLE IF NOT EXISTS addMovie (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    overView VARCHAR(255),
    mins VARCHAR(255),
    releaseDate VARCHAR(255),
    posterPath VARCHAR(255)
);