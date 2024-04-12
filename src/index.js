document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
        const taskList = document.getElementById('task-list');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const taskInput = document.getElementById('new-task-description');
            const taskDescription = taskInput.value;
            if (taskDescription === '') return; // Don't add empty tasks

            addTaskToList(taskDescription);
            taskInput.value = ''; // Clear input field after adding task
        });

        function addTaskToList(description) {
            const taskItem = document.createElement('li');
            taskItem.textContent = description;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = '❌';
            deleteButton.addEventListener('click', function() {
                taskItem.remove();
            });

            taskItem.appendChild(deleteButton);
            taskList.appendChild(taskItem);
        }
});
