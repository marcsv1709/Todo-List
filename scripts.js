function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    if (taskInput.value === '') {
        alert('Por favor, insira uma tarefa.');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskInput.value}</span>
        <div>
            <button onclick="toggleComplete(this)">✔</button>
            <button onclick="removeTask(this)">✖</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
}

function toggleComplete(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.classList.toggle('completed');
}

function removeTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}