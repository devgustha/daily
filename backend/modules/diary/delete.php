<?php

$data = json_decode(file_get_contents("php://input"), true);
$id = $data["id"];

$stmt = $db->prepare("DELETE FROM diary WHERE id = :id");
$stmt->execute([
    ":id" => $id
]);

http_response_code(200);
echo json_encode([
    "ok" => true,
    "status" => 200,
    "message" => "Entrada deletada com sucesso."
]);