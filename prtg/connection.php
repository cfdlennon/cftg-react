<?php
    $server = 'localhost';
    $username = 'meiko';
    $password = 'meiko';
    $database = 'htmm';

    $conn = new mysqli($server, $username, $password, $database);

    if($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
?>