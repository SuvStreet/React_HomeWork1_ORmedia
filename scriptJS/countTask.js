class CountTask{
    constructor(){
        this.printCount();
    }

    printCount(variable){
        let divprintCount = document.querySelector('.wrapperAplication');
        let span = document.createElement('span');;
        if(document.querySelector('.wrapperPrintCount') === null){
            let div = document.createElement('div');
            div.setAttribute('class', 'wrapperPrintCount');

            let p = document.createElement('p');
            

            div.appendChild(p);
            p.innerText = `Количество выполненых задач: `;
            p.appendChild(span);

            span.innerText = `${variable}`;

            divprintCount.appendChild(div);
        }else{
            console.log(span);
            span.innerText = ``;
            span.innerText = `${variable}`;
        }
        
        

        
        
        

        


       /*  divprintCount.innerHTML +=
        `<div class="wrapperPrintCount">
            <p>Количество выполненых задач: <span>${variable}</span></p>
            <p>Количество избранных задач: <span>${variable}</span></p>
        </div>`; */
    }
}