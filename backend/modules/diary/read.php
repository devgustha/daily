<?php

$data = json_decode(file_get_contents("php://input"), true);
$user_email = $data["user_email"] ?? null;
if (!$user_email) {
    http_response_code(401);
    echo json_encode([
        "ok" => false,
        "status" => 401,
        "message" => "Você precisa estar logado para ler o diário."
    ]);
}
$stmt = $db->prepare("SELECT * FROM diary WHERE user_email = :user_email ORDER BY created_at DESC");
$stmt->execute([
    "user_email" => $user_email
]);
$diary = $stmt->fetchAll(PDO::FETCH_ASSOC);

http_response_code(200);
echo json_encode([
    "ok" => true,
    "status" => 200,
    "message" => "Diário carregado com sucesso",
    "diary" => $diary
]);