//файл для реализации плавной прокрутки

const smooth = ()=>{
    const smoothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');  //получаю все элементы с нужным href

    smoothScrollElems.forEach((elem, index)=>{
        elem.addEventListener("click", (event)=>{
            event.preventDefault();                                     //прерываю скроллинг браузера

            const id = elem.getAttribute("href").substring(1);          //очищаю полученныйе href от #
            document.getElementById(id).scrollIntoView({                //реализация плавной прокрутке к нужному блоку
                behavior: "smooth",
            });
        });
    });
};

export default smooth;