<?php

require_once 'database.php';

$data = json_decode(file_get_contents('php://input'), true);

$products = $data['products'] ?? [];

if (empty($products)) {
    http_response_code(400);
    echo json_encode(["error" => "No products provided"]);
    exit;
}

$result = mysqli_query($conn, 'TRUNCATE TABLE products;');
$result = null;


foreach ($products as $product) {
    $result = mysqli_query($conn, "INSERT INTO products (name, amount, category, price) VALUES ('{$product['name']}', '{$product['amount']}', '{$product['category']}', '{$product['price']}');");

    if (!$result) {
        http_response_code(500);
        echo json_encode(["error" => 'Filed adding product']);
        exit;
    }
}

http_response_code(201);
echo json_encode(["success" => 'Inserted users']);


mysqli_close($conn);
?>