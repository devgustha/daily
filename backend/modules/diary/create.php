<?php

require __DIR__ . "/../../database/connection.php";

$data = json_decode(file_get_contents("php://input"), true);

$title = $data["title"];
$content = $data["content"];
$created_at = $data["created_at"];
$entry_date = $data["entry_date"];
$entry_password = $data["entry_password"];

$stmt = $db->prepare("INSERT INTO diary(title, content, created_at, entry_date, entry_password)
    VALUES (?, ?, ?, ?, ?)
");

$stmt->execute([
    $title, $content, $created_at, $entry_date, $entry_password
]);