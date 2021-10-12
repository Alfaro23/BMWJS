//мобильное меню

const burgerMenu = ()=>{
    const menuElem = document.querySelector(".menu");       //получение меню
    const humburgerMenu = document.querySelector(".humburger-menu");        //получение кнопки меню
    const menuList = document.querySelectorAll(".menu-list__item");         //получение элементов меню

    const toggleMenu = ()=>{
        menuList.forEach((elem)=>{
            elem.addEventListener("click", ()=>{
                menuElem.classList.remove("menu-active");           //скрытие меню при нажатии на элемент меню
                humburgerMenu.classList.remove("humburger-menu-active");    //скрытие кнопки при нажатии на элемент меню
            });
        });
        menuElem.classList.toggle("menu-active");      //открытия меню
        humburgerMenu.classList.toggle("humburger-menu-active");    //смена кнопки
    };

    humburgerMenu.addEventListener("click", toggleMenu)
}

export default burgerMenu;