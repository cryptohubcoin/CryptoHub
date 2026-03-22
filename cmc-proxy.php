<?php
// CMC Pro API Proxy v2 — works on any PHP hosting
// Put this file at: cryptohubcoin.com/cmc-proxy.php
// Test: https://www.cryptohubcoin.com/cmc-proxy.php?start=1&limit=2

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Cache-Control: public, max-age=120');

$key = '3eace7af-382d-4470-b27c-7337f06dcae3';
$start = isset($_GET['start']) ? intval($_GET['start']) : 1;
$limit = isset($_GET['limit']) ? min(intval($_GET['limit']), 5000) : 5000;

$url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start={$start}&limit={$limit}&convert=USD&sort=market_cap&sort_dir=desc";

// Method 1: Try curl first
if (function_exists('curl_init')) {
    $ch = curl_init();
    curl_setopt_array($ch, array(
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 15,
        CURLOPT_SSL_VERIFYPEER => false,
        CURLOPT_HTTPHEADER => array(
            'X-CMC_PRO_API_KEY: ' . $key,
            'Accept: application/json'
        )
    ));
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    curl_close($ch);
    
    if ($httpCode === 200 && $response) {
        echo $response;
        exit;
    }
}

// Method 2: Try file_get_contents with header
$opts = array(
    'http' => array(
        'method' => 'GET',
        'header' => "X-CMC_PRO_API_KEY: {$key}\r\nAccept: application/json\r\n",
        'timeout' => 15,
        'ignore_errors' => true
    ),
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false
    )
);
$context = stream_context_create($opts);
$response = @file_get_contents($url, false, $context);

if ($response) {
    echo $response;
    exit;
}

// Method 3: Try with key as query parameter
$url2 = $url . '&CMC_PRO_API_KEY=' . $key;
$response2 = @file_get_contents($url2, false, stream_context_create(array(
    'http' => array('timeout' => 15, 'ignore_errors' => true),
    'ssl' => array('verify_peer' => false, 'verify_peer_name' => false)
)));

if ($response2) {
    echo $response2;
    exit;
}

// All failed - return diagnostic info
http_response_code(502);
echo json_encode(array(
    'error' => 'All methods failed',
    'curl_available' => function_exists('curl_init'),
    'allow_url_fopen' => ini_get('allow_url_fopen'),
    'php_version' => phpversion(),
    'curl_error' => isset($error) ? $error : 'N/A'
));
