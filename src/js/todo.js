var tasks = [];

function idGenerator() {
	var timestamp = new Date();

	var id = timestamp.getHours().toString() +
		timestamp.getMinutes().toString() +
		timestamp.getSeconds().toString() +
		timestamp.getMilliseconds().toString();
	return id;
}

function createTask(taskDescription) {
	var task = {
		id: idGenerator(),
		data: {
			description: taskDescription
		}
	};
	
	addTask(task);
}

function updateScreen() {
	var list = '<ul>'

	tasks.forEach((task => {
		list += '<li id="' + task.id + '">' + task.data.description + '</li>';
		//list += '<button onclick="removeTask(this)" id="' + task.id + '">Apagar</button><hr>';
	}));

	list += '</ul>';


	document.getElementById('list').innerHTML = list;
	document.getElementById('newTask').value = '';
}

dataWasUpdated(function (snapshot) {
	tasks = [];

	snapshot.forEach((doc) => {
		tasks.push(doc.data());
	})

	updateScreen();
});