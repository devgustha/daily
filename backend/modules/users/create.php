<?php

$data = json_decode(file_get_contents("php://input"), true);

$email        = strtolower(trim($data["email"]));
$username     = $data["username"];
$pass         = $data["password"];
$confirm_pass = $data["confirm_password"];
$created_at   = date("Y-m-d\TH:i:s");

$stmt = $db->prepare("SELECT email FROM users WHERE email = :email");
$stmt->execute([
    "email" => $email
]);
$user_email = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user_email) {
    http_response_code(409);
    echo json_encode([
        "ok" => false,
        "status" => 409,
        "message" => "Já existe um usuário com este email."
    ]);
    exit;
}

if (!str_contains($email, "@")) {
    http_response_code(400);
    echo json_encode([
        "ok" => false,
        "status" => 400,
        "message" => "Email precisa ser válido!"
    ]);
    exit;
}

if ($pass !== $confirm_pass) {
    http_response_code(400);
    echo json_encode([
        "ok" => false,
        "status" => 400,
        "message" => "As senhas precisam ser iguais."
    ]);
    exit;
}

$pass_hash = password_hash($pass, PASSWORD_DEFAULT);

$stmt = $db->prepare("INSERT INTO users (email, username, pass, created_at)
    VALUES (?, ?, ?, ?)
");

$stmt->execute([
    $email, $username, $pass_hash, $created_at,
]);

$user = [
    "email" => $email,
    "username" => $username,
    "created_at" => $created_at
];

http_response_code(201);
echo json_encode([
    "ok" => true,
    "status" => 201,
    "message" => "Usuário registrado!",
    "user" => $user
]);