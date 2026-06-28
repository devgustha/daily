<?php
require __DIR__ . "/../../database/connection.php";
$stmt = $db->query("SELECT * FROM diary");
echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));