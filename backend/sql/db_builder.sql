CREATE DATABASE lets_workout_db;
USE lets_workout_db;
CREATE TABLE workout_user(id INT AUTO_INCREMENT NOT_NULL PRIMARY_KEY, display_name VARCHAR(400), first_name VARCHAR(400), last_name VARCHAR(400), email VARCHAR(400), profile_pic_url VARCHAR(1024));
CREATE TABLE user_weight (user_id INT, weight DECIMAL(5,2), date DATE, PRIMARY KEY(date, user_id), FOREIGN KEY (user_id) REFERENCES workout_user(id) ON DELETE CASCADE);
