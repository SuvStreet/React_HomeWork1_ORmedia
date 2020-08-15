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
        let countDone = 0;
        for (let i = 0; i < arrTasks.length; i++) {
            if (arrTasks[i].done === true){
                //countDone += 1;
                countDone++;
            }
        }
        console.log(countDone);
        document.getElementById(`taskID${i}`).addEventListener('click', () => {
            document.querySelector('#aliveSearch').value = "";
            if (arrTasks[i].done === true) {
                document.getElementById(`nameTask${i}`).style.textDecoration = 'none';
                arrTasks[i].done = false;
                locStor.saveLocStor(arrTasks);
                countTask.printCount(countDone);
            }
            else {
                document.getElementById(`nameTask${i}`).style.textDecoration = 'line-through';
                arrTasks[i].done = true;
                locStor.saveLocStor(arrTasks);
                countTask.printCount(countDone--);
            }
        })
    }
}