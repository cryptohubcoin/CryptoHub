<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Content-Type: application/json; charset=utf-8');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }

$key = '3eace7af-382d-4470-b27c-7337f06dcae3';

// Test mode: /cmc-proxy.php?test=1
if (isset($_GET['test'])) {
    echo json_encode(['status'=>'ok','php'=>phpversion(),'curl'=>function_exists('curl_init')?'yes':'no','fopen'=>ini_get('allow_url_fopen')?'yes':'no','time'=>date('c')]);
    exit;
}

$start = max(1, intval($_GET['start'] ?? 1));
$limit = min(5000, max(1, intval($_GET['limit'] ?? 5000)));
$url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start={$start}&limit={$limit}&convert=USD&sort=market_cap&sort_dir=desc";

// cURL
if (function_exists('curl_init')) {
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 20);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['X-CMC_PRO_API_KEY: '.$key, 'Accept: application/json', 'Accept-Encoding: gzip']);
    curl_setopt($ch, CURLOPT_ENCODING, '');
    $res = curl_exec($ch);
    $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $err = curl_error($ch);
    curl_close($ch);
    if ($code == 200 && $res && strpos($res, '"data"') !== false) {
        header('Cache-Control: public, max-age=120');
        echo $res;
        exit;
    }
}

// file_get_contents
if (ini_get('allow_url_fopen')) {
    $ctx = stream_context_create(['http'=>['header'=>"X-CMC_PRO_API_KEY: {$key}\r\nAccept: application/json\r\n",'timeout'=>20,'ignore_errors'=>true],'ssl'=>['verify_peer'=>false,'verify_peer_name'=>false]]);
    $res = @file_get_contents($url, false, $ctx);
    if ($res && strpos($res, '"data"') !== false) {
        header('Cache-Control: public, max-age=120');
        echo $res;
        exit;
    }
}

http_response_code(502);
echo json_encode(['error'=>true,'debug'=>isset($err)?$err:'no curl','code'=>isset($code)?$code:0]);
