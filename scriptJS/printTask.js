class PrintTask {
    constructor(containerTasks) {
        this.containerTasks = document.querySelector(containerTasks);
        this.createTask();
    }

    createTask() {
        let containerTasks = this.containerTasks;
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
        }
    }

    createPrintTask(i, wrapper) {
        wrapper.innerHTML +=
            `<div class="wrapperTask" id="wrapperTaskID${i}">
                <div class="task" id="taskID${i}" style="font-weight: ${arrTasks[i].favorite === true ? "700" : "400"}; color: ${arrTasks[i].favorite === true ? "blue" : "black"};">
                    <span class="taskInSpan" id="nameTask${i}"style="text-decoration: ${arrTasks[i].done === true ? "line-through" : "none"};">
                        ${arrTasks[i].task}
                    </span>
                </div>
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