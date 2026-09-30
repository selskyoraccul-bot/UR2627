<?php
require_once 'config.php';

try {
    $pdo = getDB();
    
    $stmt = $pdo->query("
        SELECT day, time, title, teacher, room, homework, note, sort_order
        FROM schedule
        ORDER BY day, sort_order
    ");
    
    $rows = $stmt->fetchAll();
    
    // Группируем по дням
    $schedule = [
        'monday' => ['items' => [], 'note' => ''],
        'tuesday' => ['items' => [], 'note' => ''],
        'wednesday' => ['items' => [], 'note' => ''],
        'thursday' => ['items' => [], 'note' => ''],
        'friday' => ['items' => [], 'note' => ''],
    ];
    
    foreach ($rows as $row) {
        $day = $row['day'];
        if (!isset($schedule[$day])) {
            $schedule[$day] = ['items' => [], 'note' => ''];
        }
        
        $schedule[$day]['items'][] = [
            'time' => $row['time'],
            'title' => $row['title'],
            'teacher' => $row['teacher'],
            'room' => $row['room'],
            'homework' => $row['homework'],
        ];
        
        if ($row['note']) {
            $schedule[$day]['note'] = $row['note'];
        }
    }
    
    jsonResponse(['success' => true, 'data' => $schedule]);
    
} catch (Exception $e) {
    jsonResponse(['error' => $e->getMessage()], 500);
}
