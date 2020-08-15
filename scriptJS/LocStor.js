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
            this.saveLocStor(arrTasks);
        }
    }

    saveLocStor(arr) {
        localStorage.setItem(
            this.nameKeyLS,
            JSON.stringify(arr)
        );
    }
}