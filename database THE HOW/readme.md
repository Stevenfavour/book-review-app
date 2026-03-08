From EC2, connect to RDS:

mysql -h <RDS_ENDPOINT> -u <MASTER_USER> -p
Create DB (if not already created):

CREATE DATABASE epicbook;
Import SQL dump (example):

mysql -h <RDS_ENDPOINT> -u <MASTER_USER> -p bookreviewapp < path/to/dump.sql
Verify tables exist:

mysql -h <RDS_ENDPOINT> -u <MASTER_USER> -p -e "USE bookreviewapp; SHOW TABLES;"

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE users;
