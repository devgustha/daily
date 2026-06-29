<?php

$data = json_decode(file_get_contents("php://input"), true);
$email = $data["email"];
$pass = $data["password"];

$stmt = $db->prepare("SELECT * FROM users WHERE email = :email");

$stmt->execute([
    "email" => $email
]);

$user = $stmt->fetch(PDO::FETCH_ASSOC);

if (!password_verify($pass, $user["pass"])) {
    http_response_code(400);
    echo json_encode([
        "ok" => false,
        "status" => 400,
        "message" => "Email ou senha inválido(s)"
    ]);
    exit;
};

echo json_encode([
    "ok" => true,
    "status" => 200,
    "message" => "Logado com sucesso",
    "user" => $user
]);