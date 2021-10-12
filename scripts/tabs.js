const tabs = ()=>{
    const tabsHandlerElems = document.querySelectorAll("[data-tabs-handler]");  //получение табов с дата атрибутами
    const tabsFieldElems = document.querySelectorAll("[data-tabs-field]");      //получение всех элементов с дата атрибутами

    for(let tab of tabsHandlerElems){
        tab.addEventListener("click", ()=>{
            tabsHandlerElems.forEach(item=>{
                if(tab === item){
                    item.classList.add("design-list__item_active");         //делаю таб активным с нужнім дата атрибутом
                }else{
                    item.classList.remove("design-list__item_active");         //скрываю таб
                }
            })
            tabsFieldElems.forEach(item=>{
                if(item.dataset.tabsField === tab.dataset.tabsHandler){
                    item.classList.remove("hidden");                        //отображаю все элементы с нужным дата атрибутом
                }else{
                    item.classList.add("hidden");                           //скрываю их
                }
            })
        });
    };
};

export default tabs;