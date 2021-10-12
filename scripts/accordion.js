//Файл для открытия/скрития меню в технических характеристиках

const accordion = ()=>{
    const featureLinkElems = document.querySelectorAll(".feature__link"); //получение всех кнопок со стрелкой
    const feateSubElems = document.querySelectorAll(".feature-sub"); //получение блоков с информацией

    featureLinkElems.forEach((elem, index)=>{                           //перебор кнопок
        elem.addEventListener("click", ()=>{                           //навешивание события на кнопку

            if(elem.classList.contains("feature__link_active")){  //условие для проверки повторного нажатия по кнопке
                elem.classList.remove("feature__link_active");      //скрытие меню и повоторот стрелки при повторном нажатии
                feateSubElems[index].classList.add("hidden");
            }else{
                feateSubElems.forEach((feateSubElem)=>{
                    feateSubElem.classList.add("hidden");           //скрытие меню под кнопкой
                });
        
                featureLinkElems.forEach((featureLinkElem)=>{
                    featureLinkElem.classList.remove("feature__link_active");  //удаление активного типа указателя(стрелки)
                });
        
                feateSubElems[index].classList.remove("hidden");            //раскрытие меню под кнопкой
                elem.classList.add("feature__link_active");                 //добавление активного типа указателя(стрелки)      
            }

                
        })
    });
};

export default accordion;





