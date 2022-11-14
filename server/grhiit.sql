\echo 'Delete and recreate grhiit db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE grhiit;
CREATE DATABASE grhiit;
\connect grhiit

\i grhiit-schema.sql
-- \i grhiit-seed.sql

\echo 'Delete and recreate grhiit_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE grhiit_test;
CREATE DATABASE grhiit_test;
\connect grhiit_test

\i grhiit-schema.sql
