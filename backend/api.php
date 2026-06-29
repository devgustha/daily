<?php
header("Content-Type: application/json");
require_once __DIR__ . "/database/connection.php";
$action = $_GET["action"] ?? null;
$data   = json_decode(file_get_contents("php://input"), true);
if (! $action) {
    echo json_encode(["error" => "No action provided"]);
    exit;
}

switch ($action) {
    case "diary.create":
        require_once __DIR__ . "/modules/diary/create.php";
        break;
    case "diary.read":
        require_once __DIR__ . "/modules/diary/read.php";
        break;
    case "diary.update":
        require_once __DIR__ . "/modules/diary/update.php";
        break;
    case "diary.delete":
        require_once __DIR__ . "/modules/diary/delete.php";
        break;

    case "users.create":
        require_once __DIR__ . "/modules/users/create.php";
        break;
    case "users.read":
        require_once __DIR__ . "/modules/users/read.php";
        break;
    case "users.update":
        require_once __DIR__ . "/modules/users/update.php";
        break;
    case "users.delete":
        require_once __DIR__ . "/modules/users/delete.php";
        break;

    default:
        echo json_encode(["error" => "Invalid action"]);
}