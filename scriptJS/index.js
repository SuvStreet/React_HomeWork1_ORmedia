let allTasks;
let arrTasks = [];

function tasks(task, favorite, done) {
    this.task = task;
    this.favorite = favorite;
    this.done = done;
}

let locStor;
let nameApp;
let search;
let filterTask;
let printTask;
let task;
let countTask;
let taskDone;

document.addEventListener("DOMContentLoaded", () => {
    locStor = new LocStor("saveTask");
    nameApp = new NameApp();
    search = new Search();
    filterTask = new FilterTask();
    printTask = new PrintTask(".wrapperApplication");
    task = new Task(".wrapperApplication");
    countTask = new CountTask();
    taskDone = new TaskDone();
});










