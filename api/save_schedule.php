<?php
require_once 'config.php';

// Проверка метода запроса
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(['error' => 'Метод не поддерживается'], 405);
}

// Проверка кода администратора
checkAdminCode();

// Получаем данные
$input = json_decode(file_get_contents('php://input'), true);

if (!$input || !isset($input['day']) || !isset($input['items'])) {
    jsonResponse(['error' => 'Неверные данные'], 400);
}

$day = $input['day'];
$items = $input['items'];
$note = isset($input['note']) ? $input['note'] : '';

// Проверка допустимых дней
$allowedDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
if (!in_array($day, $allowedDays)) {
    jsonResponse(['error' => 'Недопустимый день'], 400);
}

try {
    $pdo = getDB();
    
    // Начинаем транзакцию
    $pdo->beginTransaction();
    
    // Удаляем старые записи для этого дня
    $stmt = $pdo->prepare("DELETE FROM schedule WHERE day = ?");
    $stmt->execute([$day]);
    
    // Вставляем новые записи
    $stmt = $pdo->prepare("
        INSERT INTO schedule (day, time, title, teacher, room, homework, note, sort_order)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    ");
    
    foreach ($items as $index => $item) {
        $stmt->execute([
            $day,
            $item['time'] ?? '',
            $item['title'] ?? '',
            $item['teacher'] ?? '',
            $item['room'] ?? '',
            $item['homework'] ?? 'НЕ ЗАДАНО',
            $note,
            $index + 1
        ]);
    }
    
    // Фиксируем транзакцию
    $pdo->commit();
    
    jsonResponse(['success' => true, 'message' => 'Расписание сохранено']);
    
} catch (Exception $e) {
    $pdo->rollBack();
    jsonResponse(['error' => $e->getMessage()], 500);
}
