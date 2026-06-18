<?php
    $page = $_GET["page"] ?? "home";
    $path = __DIR__ . "/../pages/{$page}.php";
    if (!file_exists($path)) {
        http_response_code(404);
        exit("Página não encontrada");
    }

    require $path;
