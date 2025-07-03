<?php

require_once 'database.php';

$data = json_decode(file_get_contents('php://input'), true);

$products = $data['products'] ?? [];

if (empty($products)) {
    http_response_code(400);
    echo json_encode(["error" => "No products provided"]);
    exit;
}

$stmt = $pdo->prepare("INSERT INTO orders() VALUES()");
$result = $stmt->execute();

if (!$result) {
    http_response_code(500);
    echo json_encode(["error" => 'Failed to create new row']);
    exit;
}

$currentOrderNumber = $pdo->lastInsertId();

foreach ($products as $product) {
    $query = "INSERT INTO products (name, amount, category, price, Id_o) VALUES (:name, :amount, :category, :price, :Id_o)";
    $stmt = $pdo->prepare($query);
    $result = $stmt->execute(["name" => $product['name'], "amount" => $product['amount'], "category" => $product['category'], "price" => $product['price'], "Id_o" => $currentOrderNumber]);
    ;

    if (!$result) {
        http_response_code(500);
        echo json_encode(["error" => 'Failed adding product']);
        exit;
    }
}

http_response_code(201);
echo json_encode(["success" => 'Inserted users']);


mysqli_close($conn);
?>