CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(25) NOT NULL,
  password VARCHAR(25) NOT NULL,
  first_name VARCHAR(25) NOT NULL,
  last_name VARCHAR(25) NOT NULL,
  email VARCHAR(25) NOT NULL,
  is_admin BOOLEAN NOT NULL DEFAULT FALSE,
  sign_up_date DATE NOT NULL DEFAULT NOW()
);

CREATE TABLE movements (
  id SERIAL PRIMARY KEY,
  movement_name VARCHAR(25) NOT NULL,
  difficulty INTEGER
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
  movement_id INTEGER NOT NULL
    REFERENCES movements(id) ON DELETE CASCADE,
  work INTEGER,
  rest INTEGER,
  rounds INTEGER,
  difficulty INTEGER,
  is_rest BOOLEAN NOT NULL DEFAULT FALSE,
  is_continuous BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE workouts_completed (
	user_id INTEGER NOT NULL
		REFERENCES users(id) ON DELETE CASCADE,
	workout_id INTEGER NOT NULL
		REFERENCES user_workouts(id) ON DELETE CASCADE,
	completed_date DATE DEFAULT NOW()
);

