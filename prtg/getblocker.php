<?php
    include 'connection.php';
    $data = [];
    $result = $conn->query('SELECT * FROM `blocker` ORDER BY created_at DESC');
    if ($result->num_rows < 1){
        echo json_encode($data);
        return;
    }
    
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    while($row = $result->fetch_assoc()) {
        array_push($data, [
            'id' => $row['id'],
            'url' => $row['url']
        ]);
    }

    echo json_encode($data);
?>