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

        div.innerHTML +=
            `<input class="inputTask" type="text" placeholder="Добавить задачу..." />
            <button class="addBtn" id="addBtn"><span>Добавить</span></button>`;
        wrapper.appendChild(div);

        //countTask = new CountTask();
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
            document.querySelector('#aliveSearch').value = "";
            search.workSerch();
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

    favorites() {
        for (let i = 0; i < arrTasks.length; i++) {
            this.printFavorites(i);
        }
    }

    printFavorites(i) {
        document.querySelector(`#favBtn${i}`).addEventListener('click', (event) => {
            document.querySelector('#aliveSearch').value = "";
            let nameTask = document.getElementById(`nameTask${i}`);
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