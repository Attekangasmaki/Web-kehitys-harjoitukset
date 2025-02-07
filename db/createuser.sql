CREATE USER 'user'@'localhost' IDENTIFIED BY 'mypassword';
GRANT ALL PRIVILEGES ON `database`.* TO 'user'@'localhost';
FLUSH PRIVILEGES;
