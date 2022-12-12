class FilterTask {
  constructor() {
    this.printButton()

    this.pressAll()
    this.pressFavorite()
    this.pressDone()
    this.addClassActive()
  }

  printButton() {
    let divFilter = document.querySelector('.wrapperApplication')

    divFilter.innerHTML += `<div class="filterButton">
                <button class="allFilterBtn active" id="allFilterBtn" autofocus>Все</button>
                <button class="favoriteFilterBtn" id="favoriteFilterBtn">Избранные</button>
                <button class="doneFilterBtn" id="doneFilterBtn">Выполненые</button>
            </div>`
  }

  addClassActive(button) {
    let filterButton = document.querySelector('.filterButton')
    let buttonList = filterButton.querySelectorAll('button')
    let totalButtonList = buttonList.length

    for (let i = 0; i < totalButtonList; i++) {
      if (button === buttonList[i]) {
        for (let j = 0; j < totalButtonList; j++) {
          buttonList[j].classList.remove('active')
        }
        buttonList[i].classList.add('active')
      }
    }
  }

  pressAll() {
    let allFilterBtn = document.getElementById('allFilterBtn')
    allFilterBtn.addEventListener('click', () => {
      this.addClassActive(allFilterBtn)
      document.querySelector('#aliveSearch').value = ''
      let wrapper = document.querySelector('#slot')
      wrapper.innerHTML = ''
      for (let i = 0; i < arrTasks.length; i++) {
        printTask.createPrintTask(i, wrapper)
      }
      taskDone.strike()
      task.remove()
      task.favorites()
    })
  }

  pressFavorite() {
    let favoriteFilterBtn = document.getElementById('favoriteFilterBtn')

    favoriteFilterBtn.addEventListener('click', () => {
      this.addClassActive(favoriteFilterBtn)
      document.querySelector('#aliveSearch').value = ''
      let wrapper = document.querySelector('#slot')
      wrapper.innerHTML = ''
      this.eventBtnFavoriteInFilter(wrapper)
    })
  }

  eventBtnFavoriteInFilter(wrapper) {
    for (let i = 0; i < arrTasks.length; i++) {
      if (arrTasks[i].favorite === true) {
        printTask.createPrintTask(i, wrapper)
      }
      if (i === arrTasks.length - 1) {
        this.deleteBtnFavoriteInFilter()
        for (let j = 0; j < arrTasks.length; j++) {
          if (arrTasks[j].favorite === true) {
            taskDone.printStrike(j)
            task.printFavorites(j)
          }
          if (arrTasks[j].favorite === true) {
            document
              .querySelector(`#favBtn${j}`)
              .addEventListener('click', () => {
                wrapper.innerHTML = ''
                this.eventBtnFavoriteInFilter(wrapper)
              })
          }
        }
      }
    }
  }

  deleteBtnFavoriteInFilter() {
    for (let i = 0; i < arrTasks.length; i++) {
      if (arrTasks[i].favorite === true) {
        document.querySelector(`#delBtn${i}`).addEventListener('click', () => {
          arrTasks.splice(i, 1)
          locStor.saveLocStor(arrTasks)
          document.querySelector(`#wrapperTaskID${i}`).remove(i)
        })
      }
    }
  }

  pressDone() {
    let doneFilterBtn = document.getElementById('doneFilterBtn')
    doneFilterBtn.addEventListener('click', () => {
      this.addClassActive(doneFilterBtn)
      document.querySelector('#aliveSearch').value = ''
      let wrapper = document.querySelector('#slot')
      wrapper.innerHTML = ''
      this.eventBtnDoneInFilter(wrapper)
    })
  }

  eventBtnDoneInFilter(wrapper) {
    for (let i = 0; i < arrTasks.length; i++) {
      if (arrTasks[i].done === true) {
        printTask.createPrintTask(i, wrapper)
      }
      if (i === arrTasks.length - 1) {
        this.deleteBtnDoneInFilter()
        for (let j = 0; j < arrTasks.length; j++) {
          if (arrTasks[j].done === true) {
            taskDone.printStrike(j)
            task.printFavorites(j)
          }
          if (arrTasks[j].done === true) {
            document
              .querySelector(`#taskID${j}`)
              .addEventListener('click', () => {
                wrapper.innerHTML = ''
                this.eventBtnDoneInFilter(wrapper)
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
          arrTasks.splice(i, 1)
          locStor.saveLocStor(arrTasks)
          document.querySelector(`#wrapperTaskID${i}`).remove()
        })
      }
    }
  }
}
