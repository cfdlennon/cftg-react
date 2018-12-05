<?php
    include 'connection.php';
    header('Access-Control-Allow-Origin: *');
    $params = [
        'upload_limit' => $_GET['upload'],
        'download_limit' => $_GET['download'],
    ];
    
    if ($params['upload_limit'] == '' || $params['upload_limit'] == '') {
        echo 'Invalid request';
        return;
    }

    $args = [
        'upload_limit' => (int)$params['upload_limit'],
        'download_limit' => (int)$params['download_limit'],
    ];

    if (!is_int($args['upload_limit']) || !is_int($args['upload_limit'])) {
        echo 'Invalid request';
        return;
    }

    $cmd = 'sudo wondershaper remove enp1s0';
    if ($args['upload_limit'] != 0 && $args['download_limit'] != 0) {
        $cmd = sprintf('sudo wondershaper enp1s0 %d %d', $params['download_limit'], $params['upload_limit']);
    }
    
    $query = sprintf('INSERT INTO `limit`(download, upload, created_at) VALUES (%d, %d, NOW());', $args['download_limit'], $args['upload_limit']);
    if ($conn->query($query) !== TRUE) {
        echo 'Error saving to database';
        return;
    }
    echo $cmd;
    // exec($cmd);
?>