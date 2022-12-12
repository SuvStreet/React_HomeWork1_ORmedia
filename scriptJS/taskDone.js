class TaskDone {
    constructor() {
        this.strike();
    }

    strike() {
        for (let i = 0; i < arrTasks.length; i++) {
            this.printStrike(i);
        }
    }

    printStrike(i) {
        document.getElementById(`taskID${i}`).addEventListener('click', () => {
            document.querySelector('#aliveSearch').value = "";
            if (arrTasks[i].done === true) {
                document.getElementById(`nameTask${i}`).style.textDecoration = 'none';
                arrTasks[i].done = false;
                locStor.saveLocStor(arrTasks);
                countTask.printCount();
            }
            else {
                document.getElementById(`nameTask${i}`).style.textDecoration = 'line-through';
                arrTasks[i].done = true;
                locStor.saveLocStor(arrTasks);
                countTask.printCount();
            }
        })
    }
}