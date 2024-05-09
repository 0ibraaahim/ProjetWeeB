INSERT INTO admin (login, password) VALUES ('HIB', 'HIB');
-- Maths
INSERT INTO questions (id, question) VALUES
                                         (1, 'Quelle est la racine carrée de 16 ?'),
                                         (2, 'Combien de degrés a un angle droit ?'),
                                         (3, 'Quelle est la valeur de pi (π) ?'),
                                         (4, 'Quelle est la formule pour calculer l''aire d''un rectangle ?'),
                                         (5, 'Quel est le résultat de 2+2 ?');

-- Histoire-Géo
INSERT INTO questions (id, question) VALUES
                                         (6, 'En quelle année a eu lieu la Révolution française ?'),
                                         (7, 'Qui a écrit "Le Petit Prince" ?'),
                                         (8, 'Quel est le plus grand désert du monde ?'),
                                         (9, 'Quel est le plus grand océan du monde ?'),
                                         (10, 'Quel est le plus grand fleuve du monde ?');

-- Physique chimie
INSERT INTO questions (id, question) VALUES
                                         (11, 'Quel est le symbole chimique du fer ?'),
                                         (12, 'Quelle est la formule de l''eau ?'),
                                         (13, 'Quelle est la force qui maintient les planètes en orbite autour du soleil ?'),
                                         (14, 'Quelle est la formule de la vitesse ?'),
                                         (15, 'Quelle est la formule de la masse volumique ?');

-- Réponses pour Maths
INSERT INTO answer (id, name, question_id, response_value) VALUES
                                                               (1, '4', 1, true),
                                                               (2, '8', 1, false),
                                                               (3, '2', 1, false),
                                                               (4, '6', 1, false),
                                                               (5, '90°', 2, true),
                                                               (6, '180°', 2, false),
                                                               (7, '45°', 2, false),
                                                               (8, '360°', 2, false),
                                                               (9, '3.14', 3, true),
                                                               (10, '2.71', 3, false),
                                                               (11, '1.61', 3, false),
                                                               (12, '4.56', 3, false),
                                                               (13, 'Longueur x Largeur', 4, true),
                                                               (14, 'Longueur x Largeur x Hauteur', 4, false),
                                                               (15, 'Longueur + Largeur', 4, false),
                                                               (16, 'Côté x Côté', 4, false),
                                                               (17, '4', 5, true),
                                                               (18, '3', 5, false),
                                                               (19, '5', 5, false),
                                                               (20, '6', 5, false);

-- Réponses pour Histoire-Géo
INSERT INTO answer (id, name, question_id, response_value) VALUES
                                                               (21, '1789', 6, true),
                                                               (22, '1848', 6, false),
                                                               (23, '1914', 6, false),
                                                               (24, '1799', 6, false),
                                                               (25, 'Antoine de Saint-Exupéry', 7, true),
                                                               (26, 'Victor Hugo', 7, false),
                                                               (27, 'Jules Verne', 7, false),
                                                               (28, 'Gustave Flaubert', 7, false),
                                                               (29, 'Le Sahara', 8, true),
                                                               (30, 'Le Gobi', 8, false),
                                                               (31, 'Le Kalahari', 8, false),
                                                               (32, 'L''Antarctique', 8, false),
                                                               (33, 'L''océan Pacifique', 9, true),
                                                               (34, 'L''océan Atlantique', 9, false),
                                                               (35, 'L''océan Indien', 9, false),
                                                               (36, 'La mer Méditerranée', 9, false),
                                                               (37, 'L''Amazone', 10, true),
                                                               (38, 'Le Nil', 10, false),
                                                               (39, 'Le Mississippi', 10, false),
                                                               (40, 'Le Yangtsé', 10, false);

-- Réponses pour Physique chimie
INSERT INTO answer (id, name, question_id, response_value) VALUES
                                                               (41, 'Fe', 11, true),
                                                               (42, 'F', 11, false),
                                                               (43, 'Fr', 11, false),
                                                               (44, 'Fer', 11, false),
                                                               (45, 'H2O', 12, true),
                                                               (46, 'HO', 12, false),
                                                               (47, 'O2H', 12, false),
                                                               (48, 'H3O', 12, false),
                                                               (49, 'Gravité', 13, true),
                                                               (50, 'Électromagnétisme', 13, false),
                                                               (51, 'Force centrifuge', 13, false),
                                                               (52, 'Force de frottement', 13, false),
                                                               (53, 'V = d/t', 14, true),
                                                               (54, 'V = t/d', 14, false),
                                                               (55, 'V = d x t', 14, false),
                                                               (56, 'V = d + t', 14, false),
                                                               (57, 'ρ = m/V', 15, true),
                                                               (58, 'ρ = V/m', 15, false),
                                                               (59, 'ρ = m x V', 15, false),
                                                               (60, 'ρ = m - V', 15, false);


-- Insérer les associations entre les questions et les réponses pour chaque question
INSERT INTO question_answer (question_id, answer_id) VALUES
-- Pour les questions de Maths
(1, 1), (1, 2), (1, 3), (1, 4),
(2, 5), (2, 6), (2, 7), (2, 8),
(3, 9), (3, 10), (3, 11), (3, 12),
(4, 13), (4, 14), (4, 15), (4, 16),
(5, 17), (5, 18), (5, 19), (5, 20),
-- Pour les questions de Histoire-Géo
(6, 21), (6, 22), (6, 23), (6, 24),
(7, 25), (7, 26), (7, 27), (7, 28),
(8, 29), (8, 30), (8, 31), (8, 32),
(9, 33), (9, 34), (9, 35), (9, 36),
(10, 37), (10, 38), (10, 39), (10, 40),
-- Pour les questions de Physique chimie
(11, 41), (11, 42), (11, 43), (11, 44),
(12, 45), (12, 46), (12, 47), (12, 48),
(13, 49), (13, 50), (13, 51), (13, 52),
(14, 53), (14, 54), (14, 55), (14, 56),
(15, 57), (15, 58), (15, 59), (15, 60);

-- Insérer les quiz
INSERT INTO quiz (id) VALUES(1), (2), (3);
