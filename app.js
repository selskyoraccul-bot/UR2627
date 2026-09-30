// ===== КОНФИГУРАЦИЯ =====
const ADMIN_CODE = '812412njfjKjUERN1UDJ8QDiNDUHEUI1NDJKwhduiqh2ruienjkfhuiQWRH2JK1NFIUO2Q3FH23UHIFNIOGHJ32UI1H';
const API_URL = 'api/';

// Стандартное время уроков
const LESSON_TIMES = [
    '12:45-13:25', // 1 урок
    '13:40-14:20', // 2 урок
    '14:35-15:15', // 3 урок
    '15:20-16:00', // 4 урок
    '16:00-16:45', // 5 урок
    '16:50-17:30', // 7 урок
    '17:35-18:15', // 8 урок
];

// ===== ДАННЫЕ ПО УМОЛЧАНИЮ (используются если сервер недоступен) =====
const defaultSchedule = {
    monday: {
        items: [
            { time: LESSON_TIMES[0], title: 'РоВ', teacher: 'Храмцова А. А.', room: 'Каб 38', homework: 'НЕ ЗАДАНО' },
            { time: LESSON_TIMES[1], title: 'Музыка', teacher: 'Фоминых О. В.', room: 'Каб 29', homework: 'НЕ ЗАДАНО' },
            { time: LESSON_TIMES[2], title: 'Русский Язык', teacher: 'Храмцова А. А.', room: 'Каб 38', homework: 'НЕ ЗАДАНО' },
            { time: LESSON_TIMES[3], title: 'Математика', teacher: 'Ложкина И. В.', room: 'Каб 39', homework: 'НЕ ЗАДАНО' },
            { time: LESSON_TIMES[4], title: 'Английский', teacher: 'Гонцова Ю. Ю., Хардина И. В.', room: 'Каб 32/13', homework: 'НЕ ЗАДАНО' },
            { time: LESSON_TIMES[5], title: 'Русский Язык', teacher: 'Храмцова А. А.', room: 'Каб 38', homework: 'НЕ ЗАДАНО' },
            { time: LESSON_TIMES[6], title: 'История', teacher: 'Кротов Д. В.', room: 'Каб 37', homework: 'НЕ ЗАДАНО' },
        ],
        note: 'По базе изменений нет'
    },
    tuesday: {
        items: [
            { time: LESSON_TIMES[0], title: 'История', teacher: 'Кротов Д. В.', room: 'Каб 37', homework: 'НЕ ЗАДАНО' },
            { time: LESSON_TIMES[1], title: 'География', teacher: 'Эргашева С. М.', room: 'Каб 28', homework: 'НЕ ЗАДАНО' },
            { time: LESSON_TIMES[2], title: 'Русский Язык', teacher: 'Храмцова А. А.', room: 'Каб 38', homework: 'НЕ ЗАДАНО' },
            { time: LESSON_TIMES[3], title: 'Литература', teacher: 'Храмцова А. А.', room: 'Каб 38', homework: 'НЕ ЗАДАНО' },
            { time: LESSON_TIMES[4], title: 'Английский', teacher: 'Гонцова Ю. Ю., Хардина И. В.', room: 'Каб 32/13', homework: 'НЕ ЗАДАНО' },
            { time: LESSON_TIMES[5], title: 'Математика', teacher: 'Ложкина И. В.', room: 'Каб 39', homework: 'НЕ ЗАДАНО' },
        ],
        note: 'По базе изменений нет'
    },
    wednesday: {
        items: [
            { time: LESSON_TIMES[0], title: 'Математика', teacher: 'Ложкина И. В.', room: 'Каб 39', homework: 'НЕ ЗАДАНО' },
            { time: LESSON_TIMES[1], title: 'Физкультура', teacher: 'Кузнецова Т. И.', room: 'Каб СЗ', homework: 'НЕ ЗАДАНО' },
            { time: LESSON_TIMES[2], title: 'Биология', teacher: 'Акулинкина Д. В.', room: 'Каб 36', homework: 'НЕ ЗАДАНО' },
            { time: LESSON_TIMES[3], title: 'История', teacher: 'Кротов Д. В.', room: 'Каб 37', homework: 'НЕ ЗАДАНО' },
            { time: LESSON_TIMES[4], title: 'Русский Язык', teacher: 'Храмцова А. А.', room: 'Каб 38', homework: 'НЕ ЗАДАНО' },
            { time: LESSON_TIMES[5], title: 'Литература', teacher: 'Храмцова А. А.', room: 'Каб 38', homework: 'НЕ ЗАДАНО' },
        ],
        note: 'По базе изменений нет'
    },
    thursday: {
        items: [
            { time: LESSON_TIMES[0], title: 'Математика', teacher: 'Ложкина И. В.', room: 'Каб 39', homework: 'НЕ ЗАДАНО' },
            { time: LESSON_TIMES[1], title: 'Русский Язык', teacher: 'Храмцова А. А.', room: 'Каб 38', homework: 'НЕ ЗАДАНО' },
            { time: LESSON_TIMES[2], title: 'Биологическое Краеведение', teacher: 'Эргашев Э. А.', room: 'Каб 28', homework: 'НЕ ЗАДАНО' },
            { time: LESSON_TIMES[3], title: 'Физкультура', teacher: 'Кузнецова Т. И.', room: 'Каб СЗ', homework: 'НЕ ЗАДАНО' },
            { time: LESSON_TIMES[4], title: 'Математика', teacher: 'Ложкина И. В.', room: 'Каб 39', homework: 'НЕ ЗАДАНО' },
            { time: LESSON_TIMES[5], title: 'Труд', teacher: 'Дудченко О. О. / Владимиров Е. А.', room: 'Каб 26/10', homework: 'НЕ ЗАДАНО' },
            { time: LESSON_TIMES[6], title: 'Труд', teacher: 'Дудченко О. О. / Владимиров Е. А.', room: 'Каб 26/10', homework: 'НЕ ЗАДАНО' },
        ],
        note: 'По базе изменений нет'
    },
    friday: {
        items: [
            { time: LESSON_TIMES[0], title: 'ИЗО', teacher: 'Дудченко О. О.', room: 'Каб 26', homework: 'НЕ ЗАДАНО' },
            { time: LESSON_TIMES[1], title: 'Английский', teacher: 'Гонцова Ю. Ю., Хардина И. В.', room: 'Каб 32/13', homework: 'НЕ ЗАДАНО' },
            { time: LESSON_TIMES[2], title: 'Русский Язык', teacher: 'Храмцова А. А.', room: 'Каб 38', homework: 'НЕ ЗАДАНО' },
            { time: LESSON_TIMES[3], title: 'Литература', teacher: 'Храмцова А. А.', room: 'Каб 38', homework: 'НЕ ЗАДАНО' },
            { time: LESSON_TIMES[4], title: 'Биологическое Краеведение', teacher: 'Эргашев Э. А.', room: 'Каб 28', homework: 'НЕ ЗАДАНО' },
        ],
        note: 'По базе изменений нет'
    },
};

const dayNames = {
    monday: 'Понедельник',
    tuesday: 'Вторник',
    wednesday: 'Среда',
    thursday: 'Четверг',
    friday: 'Пятница',
};

// ===== СОСТОЯНИЕ =====
let scheduleData = null;
let isAdmin = false;
let currentEditDay = 'monday';

// ===== ИНИЦИАЛИЗАЦИЯ =====
async function init() {
    await loadSchedule();
    renderTomorrowSchedule();
}

async function loadSchedule() {
    try {
        const response = await fetch(API_URL + 'get_schedule.php');
        const result = await response.json();
        
        if (result.success) {
            scheduleData = result.data;
        } else {
            throw new Error(result.error || 'Ошибка загрузки');
        }
    } catch (e) {
        console.warn('Сервер недоступен, используются локальные данные:', e);
        scheduleData = JSON.parse(JSON.stringify(defaultSchedule));
    }
}

// ===== УТИЛИТЫ =====
function getTomorrowDayKey() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const day = tomorrow.getDay();
    const map = { 0: 'monday', 1: 'monday', 2: 'tuesday', 3: 'wednesday', 4: 'thursday', 5: 'friday', 6: 'monday' };
    return map[day];
}

function formatDate(date) {
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('ru-RU', options);
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `${type === 'success' ? '✅' : '❌'} ${message}`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ===== РЕНДЕРИНГ =====
function renderTomorrowSchedule() {
    const grid = document.getElementById('scheduleGrid');
    const dayKey = getTomorrowDayKey();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    document.getElementById('dateTitle').textContent = 'Завтра';
    document.getElementById('dateBadge').textContent = formatDate(tomorrow);

    const dayData = scheduleData[dayKey] || { items: [], note: '' };
    const items = dayData.items || [];

    if (items.length === 0) {
        grid.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <div class="empty-state-icon">🎉</div>
                <h3>Завтра выходной!</h3>
                <p>Занятий нет, наслаждайтесь отдыхом</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = items.map((item, index) => `
        <div class="schedule-card" style="animation-delay: ${index * 0.1}s">
            <div class="card-time">🕐 ${item.time}</div>
            <div class="card-title">${item.title}</div>
            <div class="card-teacher">👨‍🏫 ${item.teacher}</div>
            <div class="card-room">📍 ${item.room}</div>
            <div class="card-homework ${item.homework === 'НЕ ЗАДАНО' ? 'homework-none' : 'homework-set'}">
                <span class="homework-icon">📝</span>
                <span class="homework-text">${item.homework}</span>
            </div>
        </div>
    `).join('') + (dayData.note ? `
        <div class="note-card" style="grid-column: 1/-1;">
            <div class="note-header">📋 Заметка</div>
            <div class="note-text">${dayData.note}</div>
        </div>
    ` : '');
}

function renderWeekSchedule() {
    const grid = document.getElementById('weekGrid');
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    const today = new Date();

    grid.innerHTML = days.map(dayKey => {
        const dayData = scheduleData[dayKey] || { items: [], note: '' };
        const items = dayData.items || [];
        const dayDate = new Date(today);
        const currentDay = today.getDay();
        const targetDay = { monday: 1, tuesday: 2, wednesday: 3, thursday: 4, friday: 5 }[dayKey];
        const diff = targetDay - currentDay;
        dayDate.setDate(today.getDate() + diff);

        return `
            <div class="day-card">
                <div class="day-header">
                    <h3>${dayNames[dayKey]}</h3>
                    <span>${dayDate.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}</span>
                </div>
                <div class="day-items">
                    ${items.length === 0 ? '<p style="color: var(--text-muted); text-align: center; padding: 20px;">Выходной</p>' : ''}
                    ${items.map(item => `
                        <div class="day-item">
                            <div class="day-item-time">${item.time}</div>
                            <div class="day-item-info">
                                <div class="day-item-title">${item.title}</div>
                                <div class="day-item-meta">${item.teacher} • ${item.room}</div>
                                <div class="day-item-homework ${item.homework === 'НЕ ЗАДАНО' ? 'homework-none' : 'homework-set'}">
                                    📝 ${item.homework}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                ${dayData.note ? `
                    <div class="day-note">
                        <span class="note-icon">📋</span>
                        <span>${dayData.note}</span>
                    </div>
                ` : ''}
            </div>
        `;
    }).join('');
}

// ===== АДМИН-ПАНЕЛЬ =====
function openAdmin() {
    document.getElementById('adminModal').classList.add('active');
    document.getElementById('adminCode').value = '';
    document.getElementById('adminError').classList.add('hidden');
    setTimeout(() => document.getElementById('adminCode').focus(), 100);
}

function closeAdmin() {
    document.getElementById('adminModal').classList.remove('active');
}

function checkAdminCode() {
    const input = document.getElementById('adminCode').value.trim();
    if (input === ADMIN_CODE) {
        isAdmin = true;
        closeAdmin();
        openEdit();
        showToast('Добро пожаловать, администратор!');
    } else {
        document.getElementById('adminError').classList.remove('hidden');
    }
}

// ===== РЕДАКТИРОВАНИЕ =====
function openEdit() {
    if (!isAdmin) {
        openAdmin();
        return;
    }
    document.getElementById('editModal').classList.add('active');
    renderEditTabs();
    renderEditDay();
}

function closeEdit() {
    document.getElementById('editModal').classList.remove('active');
}

function renderEditTabs() {
    const tabs = document.getElementById('editTabs');
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

    tabs.innerHTML = days.map(day => `
        <button class="edit-tab ${day === currentEditDay ? 'active' : ''}" onclick="switchEditDay('${day}')">
            ${dayNames[day]}
        </button>
    `).join('');
}

function switchEditDay(day) {
    currentEditDay = day;
    renderEditTabs();
    renderEditDay();
}

function renderEditDay() {
    const content = document.getElementById('editContent');
    const dayData = scheduleData[currentEditDay] || { items: [], note: '' };
    const items = dayData.items || [];

    content.innerHTML = `
        <div class="edit-day active">
            ${items.map((item, index) => renderEditItem(item, index)).join('')}
            <button class="add-item-btn" onclick="addEditItem()">+ Добавить занятие</button>
            <div class="note-editor">
                <label>📋 Заметка на день</label>
                <textarea id="dayNote" placeholder="Введите заметку...">${escapeHtml(dayData.note || '')}</textarea>
            </div>
        </div>
    `;
}

function renderEditItem(item, index) {
    return `
        <div class="edit-item">
            <input type="text" value="${escapeHtml(item.time)}" placeholder="Время" data-field="time" data-index="${index}">
            <input type="text" value="${escapeHtml(item.title)}" placeholder="Название" data-field="title" data-index="${index}">
            <input type="text" value="${escapeHtml(item.teacher)}" placeholder="Преподаватель" data-field="teacher" data-index="${index}">
            <input type="text" value="${escapeHtml(item.room)}" placeholder="Кабинет" data-field="room" data-index="${index}">
            <input type="text" value="${escapeHtml(item.homework || 'НЕ ЗАДАНО')}" placeholder="Домашнее задание" data-field="homework" data-index="${index}" class="homework-input">
            <button class="btn btn-danger btn-small" onclick="removeEditItem(${index})">✕</button>
        </div>
    `;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function addEditItem() {
    const dayData = scheduleData[currentEditDay] || { items: [], note: '' };
    if (!dayData.items) dayData.items = [];
    const nextIndex = dayData.items.length;
    const time = LESSON_TIMES[nextIndex] || LESSON_TIMES[LESSON_TIMES.length - 1];
    dayData.items.push({
        time: time,
        title: 'Новое занятие',
        teacher: 'Преподаватель',
        room: 'Каб',
        homework: 'НЕ ЗАДАНО'
    });
    scheduleData[currentEditDay] = dayData;
    renderEditDay();
}

function removeEditItem(index) {
    const dayData = scheduleData[currentEditDay] || { items: [], note: '' };
    if (dayData.items) {
        dayData.items.splice(index, 1);
    }
    renderEditDay();
}

async function saveSchedule() {
    const inputs = document.querySelectorAll('.edit-item input');
    const newItems = [];
    const itemMap = {};

    inputs.forEach(input => {
        const index = parseInt(input.dataset.index);
        const field = input.dataset.field;
        if (!itemMap[index]) itemMap[index] = {};
        itemMap[index][field] = input.value;
    });

    Object.keys(itemMap).forEach(index => {
        if (itemMap[index].title) {
            newItems.push(itemMap[index]);
        }
    });

    const noteInput = document.getElementById('dayNote');
    const note = noteInput ? noteInput.value : '';

    scheduleData[currentEditDay] = { items: newItems, note: note };

    // Сохраняем на сервер
    try {
        const response = await fetch(API_URL + 'save_schedule.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Admin-Code': ADMIN_CODE
            },
            body: JSON.stringify({
                day: currentEditDay,
                items: newItems,
                note: note
            })
        });

        const result = await response.json();

        if (result.success) {
            showToast('Расписание сохранено на сервере!');
        } else {
            throw new Error(result.error || 'Ошибка сохранения');
        }
    } catch (e) {
        console.warn('Ошибка сохранения на сервер:', e);
        showToast('Сохранено локально (сервер недоступен)', 'error');
    }

    renderTomorrowSchedule();
    renderWeekSchedule();
}

function resetSchedule() {
    if (confirm('Вы уверены, что хотите сбросить расписание к стандартному?')) {
        scheduleData = JSON.parse(JSON.stringify(defaultSchedule));
        renderTomorrowSchedule();
        renderWeekSchedule();
        renderEditDay();
        showToast('Расписание сброшено!');
    }
}

// ===== НАВИГАЦИЯ =====
function showWeekSchedule() {
    document.getElementById('tomorrowSection').classList.add('hidden');
    document.getElementById('weekSection').classList.remove('hidden');
    renderWeekSchedule();
}

function hideWeekSchedule() {
    document.getElementById('weekSection').classList.add('hidden');
    document.getElementById('tomorrowSection').classList.remove('hidden');
}

// ===== ОБРАБОТЧИКИ СОБЫТИЙ =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeAdmin();
        closeEdit();
    }
    if (e.key === 'Enter' && document.getElementById('adminModal').classList.contains('active')) {
        checkAdminCode();
    }
});

document.getElementById('adminModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeAdmin();
});

document.getElementById('editModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeEdit();
});

// ===== СТАРТ =====
init();
