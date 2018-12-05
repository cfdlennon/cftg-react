<?php
    include 'connection.php';
    $query = 'SELECT * FROM `limit` ORDER BY created_at DESC LIMIT 1';
    $result = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($result);
    $response = [
        'upload' => (int)$row['upload'],
        'download' => (int)$row['download'],
    ];

    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    echo json_encode($response);
?>