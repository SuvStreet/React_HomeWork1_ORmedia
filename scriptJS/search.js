class Search {
    constructor() {
        this.paintInputSearch();
    }

    paintInputSearch() {
        let divInputSearch = document.querySelector('.wrapperAplication');
        divInputSearch.innerHTML +=
            `<div class="inputAliveSearch">
                <input type="text" class="aliveSearch" id="aliveSearch" placeholder="Найти задачу..." oninput=search.workSerch() />
            </div>`;
    }

    workSerch() {
        let val = document.querySelector('#aliveSearch').value.trim();
        let aliveSearchItems = document.querySelectorAll('.taskInSpan');

        if (val !== '') {
            aliveSearchItems.forEach((elem) => {
                let parentDiv1 = elem.parentNode;
                if (elem.innerText.search(val) === -1) {
                    parentDiv1.parentNode.classList.add('hide');
                    elem.innerHTML = elem.innerText;
                }
                else {
                    parentDiv1.parentNode.classList.remove('hide');
                    let str = elem.innerText;
                    elem.innerHTML = this.searchBacklight(str, elem.innerText.search(val), val.length);
                }
            });
        }
        else {
            aliveSearchItems.forEach((elem) => {
                let parentDiv2 = elem.parentNode;
                parentDiv2.parentNode.classList.remove('hide');
                elem.innerHTML = elem.innerText;
            });
        }
    }

    searchBacklight(string, pos, len) {
        return string.slice(0, pos) + `<span class="backlight">` + string.slice(pos, pos + len) + `</span>` + string.slice(pos + len);
    }
}