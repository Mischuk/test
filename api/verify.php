<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Set the HTTP status code to 201
http_response_code(201);

// Return true as the response
echo json_encode(['status' => 201, 'message' => 'Created']);
