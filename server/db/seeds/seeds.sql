INSERT INTO outcomes (value) VALUES ('Admitted');
INSERT INTO outcomes (value) VALUES ('No show');
INSERT INTO outcomes (value) VALUES ('User Cancelled');
INSERT INTO outcomes (value) VALUES ('Admin Cancelled');
INSERT INTO outcomes (value) VALUES ('Waiting');

INSERT INTO settings (name, url, capacity, location) VALUES ('Passport Service', 'https://localhost:3001/user', 35, 'Toronto' );

INSERT INTO users (first_name, last_name, contact_number, group_size) VALUES ('Jelene', 'Adel', '+14166965575', 1);
INSERT INTO users (first_name, last_name, contact_number, group_size) VALUES ('Kathryne', 'Crichmere', '+14372223334', 2);
INSERT INTO users (first_name, last_name, contact_number, group_size) VALUES ('Corty', 'Bucher', '+15145329355', 1);
INSERT INTO users (first_name, last_name, contact_number, group_size) VALUES ('Jane', 'Doe', '+13470301290', 1);
INSERT INTO users (first_name, last_name, contact_number, group_size) VALUES ('Maible', 'Doret', '+16968816743', 2);
INSERT INTO users (first_name, last_name, contact_number, group_size) VALUES ('Dasha', 'Winfield', '+15147389976', 1);
INSERT INTO users (first_name, last_name, contact_number, group_size) VALUES ('Jamaal', 'Duthy', '+16479905787', 1);
INSERT INTO users (first_name, last_name, contact_number, group_size) VALUES ('Nickolas', 'Busen', '+12740301290', 1);
INSERT INTO users (first_name, last_name, contact_number, group_size) VALUES ('Wernher', 'Boggas', '+14169777575', 2);
INSERT INTO users (first_name, last_name, contact_number, group_size) VALUES ('Haily', 'Lethardy', '+14372872334', 1);

INSERT INTO waitlists (setting_id) VALUES (1);

INSERT INTO sessions (waitlist_id, user_id, outcome_id, date_start, date_end, position) VALUES (1, 1, 5, CURRENT_TIMESTAMP - (90 * interval '1 minute'), null, 1);
INSERT INTO sessions (waitlist_id, user_id, outcome_id, date_start, date_end, position) VALUES (1, 4, 5, CURRENT_TIMESTAMP - (80 * interval '1 minute'), null, 2);
INSERT INTO sessions (waitlist_id, user_id, outcome_id, date_start, date_end, position) VALUES (1, 2, 5, CURRENT_TIMESTAMP - (70 * interval '1 minute'), null, 3);
INSERT INTO sessions (waitlist_id, user_id, outcome_id, date_start, date_end, position) VALUES (1, 3, 5, CURRENT_TIMESTAMP - (60 * interval '1 minute'), null, 4);
INSERT INTO sessions (waitlist_id, user_id, outcome_id, date_start, date_end, position) VALUES (1, 5, 5, CURRENT_TIMESTAMP - (50 * interval '1 minute'), null, 5);
INSERT INTO sessions (waitlist_id, user_id, outcome_id, date_start, date_end, position) VALUES (1, 6, 5, CURRENT_TIMESTAMP - (40 * interval '1 minute'), null, 6);
INSERT INTO sessions (waitlist_id, user_id, outcome_id, date_start, date_end, position) VALUES (1, 7, 5, CURRENT_TIMESTAMP - (30 * interval '1 minute'), null, 7);
INSERT INTO sessions (waitlist_id, user_id, outcome_id, date_start, date_end, position) VALUES (1, 8, 5, CURRENT_TIMESTAMP - (20 * interval '1 minute'), null, 8);
INSERT INTO sessions (waitlist_id, user_id, outcome_id, date_start, date_end, position) VALUES (1, 9, 5, CURRENT_TIMESTAMP - (10 * interval '1 minute'), null, 9);
INSERT INTO sessions (waitlist_id, user_id, outcome_id, date_start, date_end, position) VALUES (1, 10, 5, CURRENT_TIMESTAMP - (05 * interval '1 minute'), null, 10);
-- INSERT INTO sessions (waitlist_id, user_id, outcome_id, date_start, date_end, position) VALUES (1, 3, 1, CURRENT_TIMESTAMP - (120 * interval '1 minute'), CURRENT_TIMESTAMP - (100 * interval '1 minute'), 0);
-- INSERT INTO sessions (waitlist_id, user_id, outcome_id, date_start, date_end, position) VALUES (1, 3, 2, CURRENT_TIMESTAMP - (110 * interval '1 minute'), CURRENT_TIMESTAMP - (90 * interval '1 minute'), 0);
-- INSERT INTO sessions (waitlist_id, user_id, outcome_id, date_start, date_end, position) VALUES (1, 3, 1, CURRENT_TIMESTAMP - (100 * interval '1 minute'), CURRENT_TIMESTAMP - (80 * interval '1 minute'), 0);


