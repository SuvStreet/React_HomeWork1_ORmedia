class Task {
    constructor(wrapperApplication) {
        this.wrapperApplication = document.querySelector(wrapperApplication);
        this.pictureInput();
        this.add();
        this.remove();
        this.favorites();
    }

    pictureInput() {
        let wrapper = this.wrapperApplication;

        let div = document.createElement("div");
        div.setAttribute("class", "wrapperInputTask");

        div.innerHTML +=
            `<input class="inputTask" type="text" placeholder="Добавить задачу..." />
            <button class="addBtn" id="addBtn"><span>Добавить</span></button>`;
        wrapper.appendChild(div);
    }

    add() {
        document.querySelector(".inputTask").addEventListener('keypress', function (keyPressed) {
            if (keyPressed.which === 13) {
                print();
            }
        })

        document.getElementById("addBtn").addEventListener('click', function () {
            print();
        })

        function print() {
            document.querySelector('#aliveSearch').value = "";
            search.workSearch();
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
                countTask.valueDoneTask();
                countTask.valueFavoriteTask();
                countTask.printCount();
            })
        }
    }

    favorites() {
        for (let i = 0; i < arrTasks.length; i++) {
            this.printFavorites(i);
        }
    }

    printFavorites(i) {
        document.querySelector(`#favBtn${i}`).addEventListener('click', () => {
            document.querySelector('#aliveSearch').value = "";
            let nameTask = document.getElementById(`nameTask${i}`);
            if (arrTasks[i].favorite === true) {
                arrTasks[i].favorite = false;
                locStor.saveLocStor(arrTasks);
                nameTask.style.fontWeight = "400";
                nameTask.style.color = "black";
            }
            else {
                arrTasks[i].favorite = true;
                locStor.saveLocStor(arrTasks);
                nameTask.style.fontWeight = "700";
                nameTask.style.color = "blue";
            }
            countTask.valueFavoriteTask()
            countTask.printCount()
        })
    }
}