CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(25) NOT NULL,
  password TEXT NOT NULL,
  first_name VARCHAR(25) NOT NULL,
  last_name VARCHAR(25) NOT NULL,
  email VARCHAR(25) NOT NULL,
  is_admin BOOLEAN NOT NULL DEFAULT FALSE,
  sign_up_date DATE NOT NULL DEFAULT NOW()
);

CREATE TABLE user_workouts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL
    REFERENCES users(id) ON DELETE CASCADE,
  difficulty INTEGER,
  created_date DATE NOT NULL DEFAULT NOW()
);


CREATE TABLE intervals (
  id SERIAL PRIMARY KEY,
  workout_id INTEGER NOT NULL
    REFERENCES user_workouts(id) ON DELETE CASCADE,
  sequence_id INTEGER NOT NULL,
  movement_name VARCHAR(30),
  work INTEGER,
  rest INTEGER,
  rounds INTEGER
);


