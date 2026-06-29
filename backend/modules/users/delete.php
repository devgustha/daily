<?php

$data = json_decode(file_get_contents("php://input"), true);
$id = $data["id"];

$stmt = $db->prepare("DELETE FROM users WHERE id = :id");
$stmt->execute([
    ":id" => $id
]);