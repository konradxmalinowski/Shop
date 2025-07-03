<?php

require_once 'database.php';

$data = [];

$query = 'SELECT products.name, products.amount, products.price, products.category, orders.Id_o as ID, orders.date FROM products join orders on products.Id_o = orders.Id_o;';
$stmt = $pdo->prepare($query);
$result = $stmt->execute();

if (!$result) {
    http_response_code(400);
    echo json_encode(["error" => 'Failed to get history']);
    exit();
}

if ($stmt->rowCount() > 0) {
    while ($row = $stmt->fetchAll(PDO::FETCH_ASSOC)) {
        $data[] = [
            'name' => $row['name'],
            'amount' => $row['amount'],
            'price' => $row['price'],
            'category' => $row['category'],
            'date' => $row['date'],
            'ID' => $row['ID']
        ];
    }

    echo json_encode($data);
}

?>