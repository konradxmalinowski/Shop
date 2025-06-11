<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

define('DB_HOST', 'mysql.ct8.pl');
define('DB_NAME', 'm42958_shop');
define('DB_USER', 'm42958_admin');
define('DB_PASSWORD', 'Adminadminadmin123');



$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

if (!$conn) {
    http_response_code(500);
    echo json_encode(["error" => "Failed connecting to the database" . mysqli_error($conn)]);
    exit;
}

?>