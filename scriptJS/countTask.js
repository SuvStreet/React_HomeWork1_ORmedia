class CountTask {
  constructor() {
    this.printCount()
  }

  valueDoneTask() {
    let countDone = 0
    for (let i = 0; i < arrTasks.length; i++) {
      if (arrTasks[i].done === true) {
        countDone++
      }
    }
    return countDone
  }

  valueFavoriteTask() {
    let countFavorite = 0
    for (let i = 0; i < arrTasks.length; i++) {
      if (arrTasks[i].favorite === true) {
        countFavorite++
      }
    }
    return countFavorite
  }

  printCount() {
    let done = this.valueDoneTask()
    let favorite = this.valueFavoriteTask()

    let divPrintCount = document.querySelector('.wrapperApplication')

    if (document.querySelector('.wrapperPrintCount') === null) {
      let div = document.createElement('div')
      div.setAttribute('class', 'wrapperPrintCount')

      let p1 = document.createElement('p')
      div.appendChild(p1)
      p1.innerText = `Количество выполненых задач: `

      let span1 = document.createElement('span')
      span1.setAttribute('id', 'taskDone')
      p1.appendChild(span1)

      span1.innerText = `${done}`

      let p2 = document.createElement('p')
      div.appendChild(p2)
      p2.innerText = `Количество избранных задач: `

      let span2 = document.createElement('span')
      span2.setAttribute('id', 'taskFavorite')
      p2.appendChild(span2)

      span2.innerText = `${favorite}`

      divPrintCount.appendChild(div)
    } else {
      document.querySelector('#taskDone').innerText = `${done}`
      document.querySelector('#taskFavorite').innerText = `${favorite}`
    }
  }
}
