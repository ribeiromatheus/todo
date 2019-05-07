function newTask() {
	var taskDescription = document.getElementById('newTask').value;
	createTask(taskDescription);
	updateScreen();
}

function removeTask(element) {
	console.log(element);

	var id = element.getAttribute('id');

	deleteTask(id);
	updateScreen();
}

function deleteTask(id) {
	console.log(id);

	tasks = tasks.filter(task=>task.id != id);

	updateScreen();
}