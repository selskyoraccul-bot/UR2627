<?php
require_once 'config.php';

try {
    $pdo = getDB();
    $stmt = $pdo->query("SELECT 1");
    echo "✅ Подключение к базе данных работает!";
} catch (Exception $e) {
    echo "❌ Ошибка: " . $e->getMessage();
}
