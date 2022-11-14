CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(25) NOT NULL,
  password TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL
    CHECK (position('@' IN email) > 1),
  is_admin BOOLEAN NOT NULL DEFAULT FALSE,
  sign_up_date DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE movements (
  movement_id SERIAL PRIMARY KEY,
  movement_name TEXT NOT NULL,
  difficulty INTEGER
);

CREATE TABLE intervals (
  interval_id SERIAL PRIMARY KEY,
  workout_id INTEGER NOT NULL,
    REFERENCES user_workouts ON DELETE CASCADE,
  sequence_id INTEGER NOT NULL,
  movement_id INTEGER NOT NULL
    REFERENCES movements ON DELETE CASCADE,
  work INTEGER,
  rest INTEGER,
  rounds INTEGER,
  difficulty INTEGER,
  is_rest BOOLEAN NOT NULL DEFAULT FALSE,
  is_continuous BOOLEAN NOT NULL DEFAULT FALSE,
);


CREATE TABLE user_workouts (
  user_id INTEGER NOT NULL
    REFERENCES users ON DELETE CASCADE,
  workout_id INTEGER NOT NULL
    REFERENCES intervals ON DELETE CASCADE,
  difficulty INTEGER,
  PRIMARY KEY (user_id, workout_id)
);



CREATE TABLE workouts_completed (
	user_id INTEGER NOT NULL
		REFERENCES users ON DELETE CASCADE,
	workout_id INTEGER NOT NULL
		REFERENCES user_workouts ON DELETE CASCADE,
	completed_date DATE DEFAULT CURRENT_DATE
);

