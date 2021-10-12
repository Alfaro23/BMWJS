//файл для открытия или закрытия модального окна

const modal = ()=>{
    const buttonMore = document.querySelectorAll(".more");
    const modalElem = document.querySelector(".modal");

    const openModal = ()=>{
        modalElem.classList.remove("hidden");
    };

    const closeModal = ()=>{
        modalElem.classList.add("hidden");
    };


    buttonMore.forEach((elem)=>{
        elem.addEventListener("click", openModal);
    });
    modalElem.addEventListener("click", (event)=>{          //скрытие меню при нажатии за границы меню
        const target = event.target;

        if(target.classList.contains("overlay") || 
        target.classList.contains("modal__close")){
            
            closeModal();
        }
    })
};

export default modal;