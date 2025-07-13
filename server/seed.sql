CREATE TABLE IF NOT EXISTS games (
  id                INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name              VARCHAR(255) NOT NULL,
  description       TEXT NOT NULL,
  date_of_release   DATE NOT NUll
);

CREATE TABLE IF NOT EXISTS thumbnails (
  id    INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  src   VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS games_thumbnails (
  game_id       INT REFERENCES games(id) NOT NULL,
  thumbnail_id  INT REFERENCES thumbnails(id) NOT NULL
);

CREATE TABLE IF NOT EXISTS genres (
  id    INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name  VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS games_genres (
  game_id   INT REFERENCES games(id) NOT NULL,
  genre_id  INT REFERENCES genres(id) NOT NULL
);

CREATE TABLE IF NOT EXISTS reviews (
  id            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  reviewee      VARCHAR(255) NOT NULL,
  content       TEXT NOT NULL,
  review_date   DATE NOT NULL,
  rating        INT NOT NULL
);

CREATE TABLE IF NOT EXISTS games_reviews (
  game_id     INT REFERENCES games(id) NOT NULL,
  review_id   INT REFERENCES reviews(id) NOT NULL
);

INSERT INTO games (name, description, date_of_release)
VALUES 
('Factorio', 'Factorio is a game about building and creating automated factories to produce items of increasing complexity, within an infinite 2D world. Use your imagination to design your factory, combine simple elements into ingenious structures, and finally protect it from the creatures who don''t really like you.', '2020-08-14'),
('Holdfast: Nations at War', 'Fight on multiple fronts in Holdfast: Nations At War - A multiplayer first and third-person shooter set during the great Napoleonic Era and WW1. Charge into battle with over 150 players per server!', '2020-03-05'),
('RimWorld', 'A sci-fi colony sim driven by an intelligent AI storyteller. Generates stories by simulating psychology, ecology, gunplay, melee combat, climate, biomes, diplomacy, interpersonal relationships, art, medicine, trade, and more.', '2018-10-17'),
('Kenshi', 'A free-roaming squad based RPG. Focusing on open-ended sandbox gameplay features rather than a linear story. Be a trader, a thief, a rebel, a warlord, an adventurer, a farmer, a slave, or just food for the cannibals. Train your men up from puny victims to master warriors.', '2018-12-06');

INSERT INTO genres (name)
VALUES
('Sandbox'),
('RPG'),
('Survival'),
('Strategy'),
('Shooter'),
('FPS'),
('Action'),
('Colony Sim'),
('Base Building'),
('Automation');

INSERT INTO games_genres (game_id, genre_id)
VALUES
(3, 10),
(3, 9),
(4, 5),
(4, 6),
(4, 7),
(5, 8),
(5, 9),
(5, 3),
(5, 4),
(6, 1),
(6, 2),
(6, 3),
(6, 4);

INSERT INTO thumbnails (src)
VALUES
('https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/427520/header.jpg'),
('https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/589290/4437a04c6e6bf367d90e9b64ae3eebd781ed5f78/capsule_616x353.jpg?t=1752072808'),
('https://shared.steamstatic.com/store_item_assets/steam/apps/294100/header.jpg?t=1752247312'),
('https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/233860/header.jpg?t=1721059338');

INSERT INTO games_thumbnails (game_id, thumbnail_id)
VALUES
(3, 1),
(4, 2),
(5, 3),
(6, 4);

INSERT INTO reviews (reviewee, content, review_date, rating)
VALUES
('Alex Mercer', 'Factorio is a masterclass in automation, strategy, and player agency. From the first ore mined to the final rocket launch, it delivers an addictive loop of building, optimizing, and expanding. The learning curve is steep, but every moment feels rewarding. Its blend of problem-solving, resource management, and open-ended design makes it a standout in its genre—an essential experience for any fan of simulation or strategy games.', '2022-05-21', 5),
('Jamie Lin', 'Factorio is a brilliantly crafted game that turns factory building into an art form. The satisfaction of creating intricate production lines and seeing them run flawlessly is unmatched. Its depth and complexity are both its greatest strengths and potential barriers for newcomers. While the graphics are functional rather than flashy, the gameplay is endlessly engaging. A must-play for anyone who enjoys logic, planning, and the thrill of optimization.', '2023-10-5', 4),
('Samuel Drake', 'Holdfast: Nations At War is a unique and chaotic blend of historical warfare and community-driven multiplayer mayhem. Set during the Napoleonic era, the game excels at immersing players in massive battles with muskets, cannons, and roleplay elements that range from serious line infantry tactics to hilarious musician duels. While the combat mechanics can feel clunky at times and the learning curve is steep, the sheer unpredictability and charm of its player interactions make it a one-of-a-kind experience. A true gem for fans of historical multiplayer warfare and emergent gameplay.', '2024-1-15', 4),
('Clara Bennett', 'Holdfast: Nations At War has an ambitious concept, aiming to recreate large-scale Napoleonic warfare with community-driven multiplayer. Unfortunately, it often stumbles in execution. Combat feels unresponsive and clunky, especially in melee, and frequent bugs or performance issues can break immersion. The game relies heavily on its community for fun—when it''s active and organized, the experience can be entertaining, but when it''s not, matches can quickly become frustrating or dull. There''s potential here, but without more polish and modern gameplay improvements, Holdfast struggles to rise beyond niche appeal.', '2025-3-12', 2),
('Elena Voss', 'RimWorld is a storytelling powerhouse disguised as a colony management sim. Every playthrough is a unique, emergent narrative driven by complex AI, unpredictable events, and deep simulation mechanics. From managing colonists’ moods and relationships to surviving pirate raids and psychic storms, the game constantly challenges you in fascinating ways. Its modding community only adds to the depth and replayability. With endless variety, dark humor, and emotionally gripping moments, RimWorld is one of the most compelling and addictive strategy games ever made.', '2020-04-6', 5),
('Marcus Hale', 'RimWorld is a masterfully crafted colony simulator that thrives on chaos, creativity, and player-driven stories. The beauty of the game lies in how it turns random events—like a mad squirrel attack or a plague outbreak—into unforgettable, often hilarious or tragic moments. The gameplay is deep yet accessible, with intricate systems for base-building, character psychology, and survival. Whether you’re building a utopia or barely scraping by in a desert wasteland, every choice matters. It''s one of the rare games where failure is just as fun as success.', '2022-12-25', 4),
('Riley Chen', 'Kenshi is an unforgiving, sandbox RPG that thrives on freedom and emergent storytelling. Dropped into a brutal, lawless world with nothing but rags and a dream, you’re given no hand-holding—just infinite possibility. Build a faction, train a one-armed warrior monk, or become a limbless cyborg warlord; the game never tells you how to play. Its visuals are dated and the interface clunky, but the depth, scale, and sheer unpredictability make it one of the most immersive and rewarding RPGs out there. A cult classic for those who love challenge and creative freedom.', '2023-10-2', 4),
('Jordan Reyes', 'Kenshi is a rare gem—a brutal, sprawling sandbox that fully embraces player freedom and consequence. Its world is harsh and indifferent, filled with warring factions, slavers, and bizarre creatures, yet it’s this very hostility that makes every small victory feel earned. The lack of direction may frustrate some, and the dated visuals or steep learning curve can be off-putting, but once you’re immersed, Kenshi becomes a storytelling machine. Whether you''re scavenging to survive or leading an army, no two playthroughs are the same. It’s not for everyone, but it’s unforgettable for those who stick with it.', '2022-04-27', 4);

INSERT INTO games_reviews (game_id, review_id)
VALUES
(3, 1),
(3, 2),
(4, 3),
(4, 4),
(5, 5),
(5, 6),
(6, 7),
(6, 8);