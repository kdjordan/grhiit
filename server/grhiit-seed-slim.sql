-- both test users have the password "password"

INSERT INTO users (username, password, first_name, last_name, email, is_admin)
VALUES ('testuser',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'Test',
        'User',
        'joel@joelburton.com',
        FALSE),
       ('testadmin',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'Test',
        'Admin!',
        'joel@joelburton.com',
        TRUE);

--scale 1-10 : 10 most difficult
INSERT INTO user_workouts (user_id, difficulty)
VALUES (1, 10);

INSERT INTO intervals (workout_id, sequence_id, movement_name, work, rest, rounds)
VALUES (1, 1, 'squat', 6, 3, 10),
        (1, 2, 'Eight Count BB', 0, 30, 1),
        (1, 3, 'REST', 0, 30, 10),
        (1 , 4, 'Burpee', 20, 10, 4)