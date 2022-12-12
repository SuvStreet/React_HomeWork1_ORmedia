class NameApp{
    constructor(){
        this.printLogoNameApp();
    }

    printLogoNameApp(){
        let divLogoNameApp = document.querySelector('.wrapperApplication');

        divLogoNameApp.innerHTML +=
            `<div class="wrapperLogoNameApp">
                <h1>
                    <i class="fas fa-th-list"></i> 
                    <span>ToDoApp</span>
                </h1>
            </div>`;
    }
}