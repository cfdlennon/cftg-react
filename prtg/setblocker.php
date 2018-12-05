<?php
    include 'connection.php';
    header('Access-Control-Allow-Origin: *');
    $params = [
        'url' => $_GET['url'],
        'status' => $_GET['status'],
    ];
    
    // validate request
    if ($params['url'] == '' || ($params['status'] == 'insert' && $params['status'] == 'delete')) {
        echo 'Invalid request';
        return;    
    }

    $cmd = [
        sprintf("iptables -A INPUT -p tcp -m string --string '%s' -algo bm -j DROP", $params['url']),
        sprintf("iptables -A FORWARD -p tcp -m string --string '%s' -algo bm -j DROP", $params['url']),
        sprintf("iptables -A OUTPUT -p tcp -m string --string '%s' -algo bm -j DROP", $params['url']),
    ];
    if ($args['status'] === 'delete') {    
        $cmd = [
            sprintf("iptables -D INPUT -p tcp -m string --string '%s' -algo bm -j DROP", $params['url']),
            sprintf("iptables -D FORWARD -p tcp -m string --string '%s' -algo bm -j DROP", $params['url']),
            sprintf("iptables -D OUTPUT -p tcp -m string --string '%s' -algo bm -j DROP", $params['url']),
        ];
    }
    
    foreach ($cmd as $c) {
        exec($c);
    }
    
    $query_check = sprintf("SELECT 'x' FROM `blocker` WHERE url = '%s'", $params['url']);
    $result = mysqli_query($conn, $query_check);
    $is_exist = !empty(mysqli_fetch_assoc($result));
    if ($params['status'] === 'delete') {
        if ($is_exist) {
            $query = sprintf("DELETE FROM `blocker` WHERE url = '%s'", $params['url']);
            if ($conn->query($query) === FALSE) {
                echo 'Error saving to database';
                return;
            }
        }
    } else if ($params['status'] === 'insert') {
        if (!$is_exist) {
            $query = sprintf("INSERT INTO `blocker`(url, created_at) VALUES ('%s', NOW());", $params['url']);
            if ($conn->query($query) === FALSE) {
                echo 'Error saving to database';
                return;
            }
        }
    }
    
    echo 'success';
?>