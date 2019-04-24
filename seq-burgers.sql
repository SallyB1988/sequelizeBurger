SELECT * FROM seq_burgers_db.burgers;

INSERT INTO burgers (name, burger_type, bun, cheese, eaten, createdAt, updatedAt) VALUES
('Sharmilla', 'ground beef', 'white', 'cheddar', false, curdate(), curdate()),
('Matt', 'salmon', 'wheat', 'none', false, curdate(), curdate()),
('Bryan', 'mushroom', 'gluten free', 'provolone', false, curdate(), curdate())
;

SELECT * FROM burgers;