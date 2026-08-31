<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!$data) {
    $data = $_POST;
}

$to = 'info@zoyotrip.in';
$subject = isset($data['_subject']) ? $data['_subject'] : '[Zoyo Trip] New Website Lead';

$body = "<h2>New Lead / Enquiry Received - Zoyo Trip Holidays</h2><br>";
$body .= "<table border='1' cellpadding='8' cellspacing='0' style='border-collapse: collapse; font-family: Arial, sans-serif;'>";

foreach ($data as $key => $value) {
    if (strpos($key, '_') === 0) continue;
    $body .= "<tr><td style='background:#f4f4f4; font-weight:bold; width:200px;'>" . htmlspecialchars($key) . "</td>";
    $body .= "<td>" . nl2br(htmlspecialchars($value)) . "</td></tr>";
}
$body .= "</table>";

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: Zoyo Trip Holidays <info@zoyotrip.in>\r\n";
$headers .= "Reply-To: " . (isset($data['Email Address']) ? $data['Email Address'] : 'info@zoyotrip.in') . "\r\n";

$mailSent = @mail($to, $subject, $body, $headers);

echo json_encode(['success' => true, 'message' => 'Enquiry submitted successfully']);
