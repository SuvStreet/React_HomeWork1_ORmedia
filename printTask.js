let allTasks;
let arrTasks = [];

function tasks(task, favorit, done) {
    this.task = task;
    this.favorit = favorit;
    this.done = done;
}

let locStor;
//let search;
let filterTask;
let taskDone;
let printTask;
let task;

document.addEventListener("DOMContentLoaded", () => {
    locStor = new LocStor("saveTask");
    //search = new Search();
    filterTask = new FilterTask();
    printTask = new PrintTask(".wrapperAplication");
    taskDone = new TaskDone();
    task = new Task(".wrapperAplication");
});

class LocStor {
    constructor(nameKeyLS) {
        this.nameKeyLS = nameKeyLS;
        this.ceateLocStor();
    }

    ceateLocStor() {
        if (localStorage.getItem(this.nameKeyLS) !== null) {
            let temp = JSON.parse(localStorage.getItem(this.nameKeyLS));
            for (let i = 0; i < temp.length; i++) {
                allTasks = new tasks(temp[i].task, temp[i].favorit, temp[i].done);
                arrTasks.push(allTasks);
            }
        }
        else {
            /* for (let i = 0; i <= 5; i++) {
                allTasks = new tasks(i, false, false);
                arrTasks.push(allTasks);
            } */
            localStorage.setItem(
                this.nameKeyLS,
                JSON.stringify(arrTasks)
            );
        }
    }

    saveLocStor(arr) {
        localStorage.setItem(
            this.nameKeyLS,
            JSON.stringify(arr)
        );
    }
}

class PrintTask {
    constructor(containerTasks) {
        this.containerTasks = document.querySelector(containerTasks);
        this.createTask();
    }

    createTask() {
        let containerTasks = this.containerTasks //document.querySelector('.wrapperAplication');
        //console.log(containerTasks);
        let wrapper = document.querySelector("#slot");

        if (wrapper !== null) {
            wrapper.innerHTML = "";
        }
        else {
            wrapper = document.createElement("slot");
            wrapper.setAttribute("class", "slot");
            wrapper.setAttribute("id", "slot");
            containerTasks.appendChild(wrapper);
        }

        for (let i = 0; i < arrTasks.length; i++) {
            this.createPrintTask(i, wrapper);
            /*  //console.log(1);
             wrapper.innerHTML +=
                 `<div class="wrapperTask">
                     <div class="task" id="taskID${i}"><span id="nameTask${i}"
                         style="text-decoration: ${arrTasks[i].done === true ? "line-through" : "none"}; font-weight: ${arrTasks[i].favorit === true ? "700" : "400"}; color: ${arrTasks[i].favorit === true ? "blue" : "black"};">${arrTasks[i].task}</span></div>
                     <div class="wrapperRemoveFavorites">
                         <button class="buttonRemove" id="delBtn${i}">
                             <i class="fas fa-trash-alt"></i>
                         </button>
                         <button class="buttonFavorites" id="favBtn${i}">
                             <i class="fas fa-star"></i>
                         </button>
                     </div>
                 </div>`; */
        }
    }

    createPrintTask(i, wrapper) {
        wrapper.innerHTML +=
            `<div class="wrapperTask" id="wrapperTaskID${i}">
                    <div class="task" id="taskID${i}"><span id="nameTask${i}"
                        style="text-decoration: ${arrTasks[i].done === true ? "line-through" : "none"}; font-weight: ${arrTasks[i].favorit === true ? "700" : "400"}; color: ${arrTasks[i].favorit === true ? "blue" : "black"};">${arrTasks[i].task}</span></div>
                    <div class="wrapperRemoveFavorites">
                        <button class="buttonRemove" id="delBtn${i}">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                        <button class="buttonFavorites" id="favBtn${i}">
                            <i class="fas fa-star"></i>
                        </button>
                    </div>
                </div>`;
    }
}

class TaskDone {
    constructor() {
        this.strike();
    }

    strike() {
        for (let i = 0; i < arrTasks.length; i++) {
            //console.log(1);
            this.printStrike(i);
        }
    }

    printStrike(i) {
        //console.log(document.querySelector(`#taskID${i}`));
        document.getElementById(`taskID${i}`).addEventListener('click', () => {
            /* console.log(`nameTask${i}`);
            console.log(event.target.getAttribute(`id`)); */
            if (arrTasks[i].done === true) {
                document.getElementById(`nameTask${i}`).style.textDecoration = 'none';
                arrTasks[i].done = false;
                localStorage.setItem("saveTask", JSON.stringify(arrTasks));
            }
            else {
                document.getElementById(`nameTask${i}`).style.textDecoration = 'line-through';
                arrTasks[i].done = true;
                console.log(arrTasks);
                localStorage.setItem("saveTask", JSON.stringify(arrTasks));
            }
        })
    }
}

class Task {
    constructor(wrapperAplication) {
        this.wrapperAplication = document.querySelector(wrapperAplication);
        this.pictureInput();
        this.add();
        this.remove();
        this.favorites();
    }

    pictureInput() {
        let wrapper = this.wrapperAplication;

        let div = document.createElement("div");
        div.setAttribute("class", "wrapperInputTask");

        div.innerHTML =
            `<input class="inputTask" type="text" placeholder="Добавить задачу..." />
            <button class="addBtn" id="addBtn"><span>Добавить</span></button>`;
        wrapper.appendChild(div);
    }

    add() {
        document.querySelector(".inputTask").addEventListener('keypress', function (keyPressed) {
            //console.log(keyPressed.which);
            if (keyPressed.which === 13) {
                print();
            }
        })

        document.getElementById("addBtn").addEventListener('click', function () {
            print();
        })

        function print() {
            if (document.querySelector(".inputTask").value.trim() === "") {
                console.log("ну ну!");
            }
            else {
                allTasks = new tasks(document.querySelector(".inputTask").value, false, false);
                arrTasks.push(allTasks);
                locStor.saveLocStor(arrTasks);
                printTask.createTask();
                taskDone.strike();
                task.remove();
                task.favorites();
                document.querySelector(".inputTask").value = "";
            }
        }
    }

    remove() {
        for (let i = 0; i < arrTasks.length; i++) {
            document.querySelector(`#delBtn${i}`).addEventListener('click', () => {
                arrTasks.splice(i, 1);
                locStor.saveLocStor(arrTasks);
                printTask.createTask();
                taskDone.strike();
                task.remove();
                task.favorites();
            })
        }
    }

    /* printRemove(i) {
        document.querySelector(`#delBtn${i}`).addEventListener('click', () => {
            arrTasks.splice(i, 1);
            locStor.saveLocStor(arrTasks);
            //document.querySelector("#slot").wrapper.innerHTML = "";
            printTask.createPrintTask(i, document.querySelector("#slot"));
            taskDone.printStrike(i);
            task.printRemove(i);
            task.printFavorites(i);
            //console.log(arrTasks);
        })
    } */

    favorites() {
        for (let i = 0; i < arrTasks.length; i++) {
            this.printFavorites(i);
        }
    }

    printFavorites(i) {
        document.querySelector(`#favBtn${i}`).addEventListener('click', (event) => {
            let nameTask = document.getElementById(`nameTask${i}`);

            //console.log(nameTask);

            if (arrTasks[i].favorit === true) {
                arrTasks[i].favorit = false;
                locStor.saveLocStor(arrTasks);
                nameTask.style.fontWeight = "400";
                nameTask.style.color = "black";
            }
            else {
                arrTasks[i].favorit = true;
                locStor.saveLocStor(arrTasks);
                nameTask.style.fontWeight = "700";
                nameTask.style.color = "blue";
            }
        })
    }
}

class FilterTask {
    constructor() {
        this.printButton();

        this.pressAll();
        this.pressFavorit();
        this.pressDone();
    }

    printButton() {
        let divFilter = document.querySelector('.wrapperAplication');

        divFilter.innerHTML +=
            `<div class="filterButton">
                <button class="allFilterBtn" id="allFilterBtn">Все</button>
                <button class="favoritFilterBtn" id="favoritFilterBtn">Избранные</button>
                <button class="doneFilterBtn" id="doneFilterBtn">Выполненые</button>
            </div>`;
    }

    pressAll() {
        document.getElementById("allFilterBtn").addEventListener("click", () => {
            let wrapper = document.querySelector("#slot");
            wrapper.innerHTML = "";
            for (let i = 0; i < arrTasks.length; i++) {

                //console.log(wrapper);
                printTask.createPrintTask(i, wrapper);

            }
            taskDone.strike();
            task.remove();
            task.favorites();
        })
    }

    pressFavorit() {
        document.getElementById("favoritFilterBtn").addEventListener("click", () => {
            let wrapper = document.querySelector("#slot");
            wrapper.innerHTML = "";
            this.eventBtnFavoritInFilter(wrapper);
        })
    }

    eventBtnFavoritInFilter(wrapper) {
        for (let i = 0; i < arrTasks.length; i++) {
            if (arrTasks[i].favorit === true) {
                printTask.createPrintTask(i, wrapper);
            }
            if (i === arrTasks.length - 1) {
                this.deleteBtnFavoritInFilter();
                for (let j = 0; j < arrTasks.length; j++) {
                    if (arrTasks[j].favorit === true) {
                        taskDone.printStrike(j);
                        task.printFavorites(j);
                    }
                    if (arrTasks[j].favorit === true) {
                        document.querySelector(`#favBtn${j}`).addEventListener('click', () => {
                            wrapper.innerHTML = "";
                            this.eventBtnFavoritInFilter(wrapper);
                        })
                    }
                }
            }
        }
    }

    deleteBtnFavoritInFilter() {
        for (let i = 0; i < arrTasks.length; i++) {
            if (arrTasks[i].favorit === true) {
                document.querySelector(`#delBtn${i}`).addEventListener('click', () => {
                    arrTasks.splice(i, 1);
                    locStor.saveLocStor(arrTasks);
                    document.querySelector(`#wrapperTaskID${i}`).remove(i);
                })
            }
        }
    }

    pressDone() {
        document.getElementById("doneFilterBtn").addEventListener("click", () => {
            let wrapper = document.querySelector("#slot");
            wrapper.innerHTML = "";
            this.eventBtnDoneInFilter(wrapper);
        })
    }

    eventBtnDoneInFilter(wrapper) {
        for (let i = 0; i < arrTasks.length; i++) {
            if (arrTasks[i].done === true) {
                console.log(arrTasks[i].done === true);
                printTask.createPrintTask(i, wrapper);
            }
            if (i === arrTasks.length - 1) {
                this.deleteBtnDoneInFilter();
                for (let j = 0; j < arrTasks.length; j++) {
                    if (arrTasks[j].done === true) {
                        taskDone.printStrike(j);
                        task.printFavorites(j);
                    }
                    if (arrTasks[j].done === true) {
                        document.querySelector(`#taskID${j}`).addEventListener('click', () => {
                            wrapper.innerHTML = "";
                            this.eventBtnDoneInFilter(wrapper);
                        })
                    }
                }
            }
        }
    }

    deleteBtnDoneInFilter() {
        for (let i = 0; i < arrTasks.length; i++) {
            if (arrTasks[i].done === true) {
                document.querySelector(`#delBtn${i}`).addEventListener('click', () => {
                    arrTasks.splice(i, 1);
                    locStor.saveLocStor(arrTasks);
                    document.querySelector(`#wrapperTaskID${i}`).remove();
                })
            }
        }
    }
}



class Search {
    constructor() {
        this.paintInputSearch();
        //this.workSerch();
    }

    paintInputSearch() {
        let divInputSearch = document.querySelector('.wrapperAplication');

        divInputSearch.innerHTML =
            `<div class="inputAliveSearch">
                <input type="text" class="aliveSearch" id="aliveSearch" />
            </div>`;

        this.workSerch();
    }

    workSerch() {
        //console.log(1);
        let temp = document.getElementById('aliveSearch');
        temp.oninput = function () {
            console.log(temp.value);
        }



        /* document.querySelector('#aliveSearch').oninput = function () {
            console.log(1);
            
            let val = this.value.trim();
            let aliveSearchItems = document.querySelectorAll('.wrapperTask');

            

            if (val !== '') {
                aliveSearchItems.forEach((elem) => {
                    if (elem.innerText.search(val) === -1) {
                        elem.classList.add('hide');
                    }
                    else {
                        elem.classList.remove('hide');
                    }
                });
            }
            else {
                aliveSearchItems.forEach((elem) => {
                    elem.classList.remove('hide');
                });
            }
        } */
    }
}

let search = new Search();
//search.workSerch();

/* let temp = document.getElementById('aliveSearch');
console.log(temp);
temp.oninput = function () {
    console.log(temp.value);
} */

