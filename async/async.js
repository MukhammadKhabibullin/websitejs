const statusEl = document.getElementById('status');
const cardsContainer = document.getElementById('cards-container');
const STORAGE_KEY = 'usersData';

function showStatus(message, isError = false) {
    statusEl.textContent = message;
    statusEl.style.background = isError ? '#fee' : '#e8f8e8';
    statusEl.style.color = isError ? '#c33' : '#2e8b2e';
}

function saveUsers(users) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

function getUsersFromStorage() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
}

function renderCards(users) {
    cardsContainer.innerHTML = '';

    if (!users || users.length === 0) {
        cardsContainer.innerHTML = `
            <p style="grid-column: 1/-1; text-align:center; font-size:1.2rem; color:#666;">
                Список пользователей пуст
            </p>`;
        return;
    }

    users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <h3>${user.name} ${user.surname}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Возраст:</strong> ${user.age}</p>
            <button class="btn btn-delete" data-id="${user.id}">Удалить</button>
        `;

        const deleteBtn = card.querySelector('.btn-delete');
        deleteBtn.addEventListener('click', () => {
            deleteUser(user.id);
        });

        cardsContainer.appendChild(card);
    });
}

function deleteUser(userId) {
    const users = getUsersFromStorage();
    if (!users) return;

    const filteredUsers = users.filter(user => user.id !== userId);
    
    saveUsers(filteredUsers);
    renderCards(filteredUsers);
    showStatus(`Пользователь удалён`, false);
}

function deleteAllUsers() {
    if (confirm('Удалить всех пользователей?')) {
        localStorage.removeItem(STORAGE_KEY);
        renderCards([]);
        showStatus('Все пользователи удалены', false);
    }
}

async function loadUsers() {
    const usersFromStorage = getUsersFromStorage();

    if (usersFromStorage) {
        showStatus('Данные загружены из памяти', false);
        renderCards(usersFromStorage);
        return;
    }

    showStatus('Данные загружаются...');

    try {
        await new Promise(resolve => setTimeout(resolve, 1500));

        const response = await fetch('users.json'); 

        if (!response.ok) {
            throw new Error(`Файл не найден (статус ${response.status})`);
        }

        const data = await response.json();
        const users = data.users || [];

        if (users.length === 0) throw new Error('Нет пользователей');

        saveUsers(users);
        showStatus(`Загружено ${users.length} пользователей`, false);
        renderCards(users);

    } catch (error) {
        console.error(error);
        showStatus('Ошибка: файл users.json не найден.<br>Проверьте, лежит ли он в той же папке.', true);
    }
}

async function fetchAllUsers() {
    showStatus('Загрузка пользователей с сервера...');
    
    try {
        await new Promise(resolve => setTimeout(resolve, 800));

        const response = await fetch('users.json', { 
            cache: 'no-store' 
        });

        if (!response.ok) {
            throw new Error(`HTTP ошибка! Статус: ${response.status}`);
        }

        const data = await response.json();
        const users = data.users || data;   

        if (!users || users.length === 0) {
            throw new Error('В файле нет пользователей');
        }

        saveUsers(users);
        renderCards(users);
        showStatus(`Успешно загружено ${users.length} пользователей`, false);

    } catch (error) {
        console.error(error);
        showStatus(`Ошибка загрузки: ${error.message}<br>Убедитесь, что файл <b>users.json</b> находится в той же папке.`, true);
    }
}

function init() {
    loadUsers();  

    document.getElementById('load-btn').addEventListener('click', loadUsers);
    
    document.getElementById('delete-all-btn').addEventListener('click', deleteAllUsers);
    
    document.getElementById('get-all-btn').addEventListener('click', fetchAllUsers);
}

init();
