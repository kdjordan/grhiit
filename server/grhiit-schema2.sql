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

CREATE TABLE workouts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL
    REFERENCES users(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT NOW(),
  data jsonb
);

