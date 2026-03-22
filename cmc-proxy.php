<?php
// CMC Pro API Proxy — put this file on your hosting (same domain as cryptohubcoin.com)
// Access: https://www.cryptohubcoin.com/cmc-proxy.php?start=1&limit=5000

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Cache-Control: public, max-age=120'); // Cache 2 minutes

$key = '3eace7af-382d-4470-b27c-7337f06dcae3';
$start = isset($_GET['start']) ? intval($_GET['start']) : 1;
$limit = isset($_GET['limit']) ? min(intval($_GET['limit']), 5000) : 5000;

$url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start={$start}&limit={$limit}&convert=USD&sort=market_cap&sort_dir=desc";

$ch = curl_init();
curl_setopt_array($ch, [
    CURLOPT_URL => $url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 15,
    CURLOPT_HTTPHEADER => [
        'X-CMC_PRO_API_KEY: ' . $key,
        'Accept: application/json'
    ]
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode === 200 && $response) {
    echo $response;
} else {
    http_response_code(502);
    echo json_encode(['error' => 'CMC API error', 'status' => $httpCode]);
}
