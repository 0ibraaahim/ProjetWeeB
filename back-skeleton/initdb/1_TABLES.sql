create table admin
(
    login TEXT PRIMARY KEY,
    password TEXT not null
);

create table player
(
    pseudo TEXT PRIMARY KEY,
    best_score int DEFAULT '0'
);

create table questions
(
    id SERIAL PRIMARY KEY,
    question TEXT NOT NULL,
    UNIQUE (question)
);

CREATE TABLE answer
(
    id SERIAL PRIMARY KEY,
    response VARCHAR(50) NOT NULL,
    question_id INTEGER NOT NULL,
    response_value BOOLEAN NOT NULL,
    FOREIGN KEY (question_id) REFERENCES Questions(id)
);

CREATE TABLE question_answer(
                                question_id int,
                                answer_id INT,
                                PRIMARY KEY(question_id, answer_id),
                                FOREIGN KEY(question_id) REFERENCES Questions(id),
                                FOREIGN KEY(answer_id) REFERENCES Answer(id)
);


CREATE TABLE quiz
(
    id INT PRIMARY KEY
);

CREATE TABLE quiz_question
(
    quiz_id SMALLINT,
    question_id SMALLINT,
    PRIMARY KEY(quiz_id,question_id ),
    FOREIGN KEY(question_id) REFERENCES Questions(id),
    FOREIGN KEY(quiz_id) REFERENCES Quiz(id)
);

CREATE TABLE quiz2
(
    id INT PRIMARY KEY,
    name TEXT NOT NULL
);

create table questions2
(
    id SERIAL PRIMARY KEY,
    question TEXT NOT NULL,
    quiz2_id SMALLINT,
    FOREIGN KEY(quiz2_id) REFERENCES quiz2(id) ON DELETE CASCADE,
    UNIQUE (question)
);