<?php
// Настройки базы данных Beget
// Замените на свои данные из панели управления Beget
define('DB_HOST', 'localhost');
define('DB_NAME', 'ваш_логин_бд');
define('DB_USER', 'ваш_логин_бд');
define('DB_PASS', 'ваш_пароль_бд');

// Код доступа администратора
define('ADMIN_CODE', '812412njfjKjUERN1UDJ8QDiNDUHEUI1NDJKwhduiqh2ruienjkfhuiQWRH2JK1NFIUO2Q3FH23UHIFNIOGHJ32UI1H');

// Подключение к базе данных
function getDB() {
    static $pdo = null;
    if ($pdo === null) {
        try {
            $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4";
            $pdo = new PDO($dsn, DB_USER, DB_PASS, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ]);
        } catch (PDOException $e) {
            http_response_code(500);
            die(json_encode(['error' => 'Ошибка подключения к базе данных']));
        }
    }
    return $pdo;
}

// Установка заголовков для JSON
function jsonResponse($data, $code = 200) {
    http_response_code($code);
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

// Проверка кода администратора
function checkAdminCode() {
    $headers = getallheaders();
    $code = isset($headers['X-Admin-Code']) ? $headers['X-Admin-Code'] : '';
    
    if ($code !== ADMIN_CODE) {
        jsonResponse(['error' => 'Неверный код доступа'], 403);
    }
}
