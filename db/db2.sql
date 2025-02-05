CREATE TABLE Medications (
    medication_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    dosage VARCHAR(50),
    frequency VARCHAR(50),
    start_date DATE,
    end_date DATE,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
