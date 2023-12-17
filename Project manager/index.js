function createProject() {
    const form = document.getElementById('projectForm');
    const projectName = form.querySelector('#projectName').value;

          console.log('Project Name:', projectName);

    displayProject(projectName);
}

function displayProject(projectName) {
    const projectList = document.getElementById('projectList');
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';

    const projectTitle = document.createElement('h3');
    projectTitle.textContent = projectName;

    const taskForm = document.createElement('form');
    taskForm.id = `taskForm_${projectName}`;

    const taskLabel = document.createElement('label');
    taskLabel.for = `task_${projectName}`;
    taskLabel.textContent = 'Task:';

    const taskInput = document.createElement('input');
    taskInput.type = 'text';
    taskInput.id = `task_${projectName}`;
    taskInput.required = true;

    const deadlineLabel = document.createElement('label');
    deadlineLabel.for = `deadline_${projectName}`;
    deadlineLabel.textContent = 'Deadline:';

    const deadlineInput = document.createElement('input');
    deadlineInput.type = 'date';
    deadlineInput.id = `deadline_${projectName}`;
    deadlineInput.required = true;

    const addTaskButton = document.createElement('button');
    addTaskButton.type = 'button';
    addTaskButton.textContent = 'Add Task';
    addTaskButton.onclick = function () {
        addTask(projectName);
    };

    const taskList = document.createElement('div');
    taskList.id = `taskList_${projectName}`;

    taskForm.appendChild(taskLabel);
    taskForm.appendChild(taskInput);
    taskForm.appendChild(deadlineLabel);
    taskForm.appendChild(deadlineInput);
    taskForm.appendChild(addTaskButton);

    projectDiv.appendChild(projectTitle);
    projectDiv.appendChild(taskForm);
    projectDiv.appendChild(taskList);

    projectList.appendChild(projectDiv);
}

function addTask(projectName) {
    const form = document.getElementById(`taskForm_${projectName}`);
    const taskInput = form.querySelector(`#task_${projectName}`).value;
    const deadlineInput = form.querySelector(`#deadline_${projectName}`).value;

    console.log('Task:', taskInput);
    console.log('Deadline:', deadlineInput);

    displayTask(projectName, taskInput, deadlineInput);
}

function displayTask(projectName, task, deadline) {
    const taskList = document.getElementById(`taskList_${projectName}`);
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';

    const taskTitle = document.createElement('h4');
    taskTitle.textContent = task;

    const deadlineInfo = document.createElement('p');
    deadlineInfo.textContent = `Deadline: ${deadline}`;

    taskDiv.appendChild(taskTitle);
    taskDiv.appendChild(deadlineInfo);

    taskList.appendChild(taskDiv);
}