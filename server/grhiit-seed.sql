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

--scale 1-5 : 5 most difficult
-- INSERT INTO movements (name, acronym, difficulty)
-- VALUES ('Flying Squat', 'FLSQ', 3),
--         ('Burpee', 'BRP', 5),
--         ('Jump Squat', 'JSQ', 4),
--         ('Eight Count Body Builder', '8CBB', 4),
--         ('Rest', 'REST', 0);

--scale 1-10 : 10 most difficult
-- INSERT INTO user_workouts (user_id, difficulty)
-- VALUES (1, 10);

-- INSERT INTO intervals (workout_id, sequence_id, movement_id, work, rest, rounds, difficulty, is_rest, is_continuous)
-- VALUES (1, 1, 4, 6, 3, 10, 6, FALSE, FALSE),
--         (1, 2, 5, 0, 30, 1, 0, TRUE, FALSE),
--         (1, 3, 3, 6, 3, 10, 6, FALSE, FALSE),
--         (1 , 4, 5, 0, 30, 1, 0, TRUE, FALSE),
--         (1 , 5, 1, 20, 10, 2, 6, FALSE, FALSE),
--         (1 , 6, 2, 20, 10, 2, 6, FALSE, FALSE),
--         (1 , 7, 1, 20, 10, 2, 6, FALSE, FALSE),
--         (1 , 8, 2, 20, 10, 2, 6, FALSE, FALSE);