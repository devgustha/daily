<?php

require __DIR__ . "/../../database/connection.php";

$stmt = $db->prepare("INSERT INTO users (email, username, pass, created_at)
    VALUES (?, ?, ?, ?)
");

$stmt->execute([

]);