INSERT INTO outcomes (value) VALUES ('Admitted');
INSERT INTO outcomes (value) VALUES ('No show');
INSERT INTO outcomes (value) VALUES ('User Cancelled');
INSERT INTO outcomes (value) VALUES ('Admin Cancelled');
INSERT INTO outcomes (value) VALUES ('Waiting');

INSERT INTO settings (name, url, capacity) VALUES ('Passport Service', 'https://localhost:3001', 35 );

INSERT INTO users (first_name, last_name, contact_number, group_size) VALUES ('Artem', 'Iefymenko', '+1416-696-5576', 3);
INSERT INTO users (first_name, last_name, contact_number, group_size) VALUES ('Joe', 'Tang', '+1437-222-333', 4);
INSERT INTO users (first_name, last_name, contact_number, group_size) VALUES ('Michael', 'Buffone', '+1514-532-9354', 5);
INSERT INTO users (first_name, last_name, contact_number, group_size) VALUES ('Jane', 'Doe', '+1274-030-1290', 1);

INSERT INTO waitlists (setting_id) VALUES (1);

INSERT INTO sessions (waitlist_id, user_id, outcome_id, date_start, date_end, position) VALUES (1, 1, 5, '2022-07-26 09:06:14', null, 1);
INSERT INTO sessions (waitlist_id, user_id, outcome_id, date_start, date_end, position) VALUES (1, 4, 5, '2022-07-26 09:25:33', null, 2);
INSERT INTO sessions (waitlist_id, user_id, outcome_id, date_start, date_end, position) VALUES (1, 2, 5, '2022-07-26 09:28:10', null, 3);
INSERT INTO sessions (waitlist_id, user_id, outcome_id, date_start, date_end, position) VALUES (1, 3, 5, '2022-07-26 10:03:01', null, 4);


