<?php

$data = json_decode(file_get_contents("php://input"), true);

$title = $data["title"];
$content = $data["content"];
$created_at = date("Y-m-d\TH:i:s");
$entry_date = $data["entry_date"];
$user_email = $data["user_email"];
$entry_password = $data["entry_password"];

if (!$user_email) {
    http_response_code(401);
    echo json_encode([
        "ok" => false,
        "status" => 401,
        "message" => "Você precisa estar logado para criar uma entrada."
    ]);
    exit;
}

$entry_password_hash = password_hash($entry_password, PASSWORD_DEFAULT);

$stmt = $db->prepare("INSERT INTO diary(title, content, created_at, entry_date, user_email, entry_password)
    VALUES (?, ?, ?, ?, ?, ?)
");

$stmt->execute([
    $title, $content, $created_at, $entry_date, $user_email, $entry_password_hash
]);

http_response_code(201);
echo json_encode([
    "ok" => true,
    "status" => 201,
    "message" => "Entrada criada com sucesso!"
]);