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
                <button class="allFilterBtn" id="allFilterBtn" autofocus>Все</button>
                <button class="favoritFilterBtn" id="favoritFilterBtn">Избранные</button>
                <button class="doneFilterBtn" id="doneFilterBtn">Выполненые</button>
            </div>`;
    }

    pressAll() {
        document.getElementById("allFilterBtn").addEventListener("click", () => {
            document.querySelector('#aliveSearch').value = "";
            let wrapper = document.querySelector("#slot");
            wrapper.innerHTML = "";
            for (let i = 0; i < arrTasks.length; i++) {
                printTask.createPrintTask(i, wrapper);
            }
            taskDone.strike();
            task.remove();
            task.favorites();
        })
    }

    pressFavorit() {
        document.getElementById("favoritFilterBtn").addEventListener("click", () => {
            document.querySelector('#aliveSearch').value = "";
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
            document.querySelector('#aliveSearch').value = "";
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