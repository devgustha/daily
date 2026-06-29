<?php

$db = new PDO("sqlite:" . __DIR__ . "/app.db");

$db->exec("CREATE TABLE IF NOT EXISTS diary (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at DATE NOT NULL,
    entry_date DATE NOT NULL,
    user_email TEXT NOT NULL,
    entry_password TEXT
);

CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL,
    username TEXT NOT NULL,
    pass TEXT NOT NULL,
    created_at DATE NOT NULL
);
");