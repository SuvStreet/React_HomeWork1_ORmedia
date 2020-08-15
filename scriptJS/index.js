let allTasks;
let arrTasks = [];

function tasks(task, favorit, done) {
    this.task = task;
    this.favorit = favorit;
    this.done = done;
}

let locStor;
let nameApp;
let search;
let filterTask;
let taskDone;
let printTask;
let task;
let countTask;

document.addEventListener("DOMContentLoaded", () => {
    locStor = new LocStor("saveTask");
    nameApp = new NameApp();
    search = new Search();
    filterTask = new FilterTask();
    printTask = new PrintTask(".wrapperAplication");
    taskDone = new TaskDone();
    task = new Task(".wrapperAplication");
    countTask = new CountTask();
});










