const sendForm = ()=>{
    const server = "https://jsonplaceholder.typicode.com/posts";

    const sendData = (data, callback, falsecallback)=>{
        const request = new XMLHttpRequest();
        request.open("POST", server);

        request.addEventListener("readystatechange", ()=>{
            if(request.readyState !== 4) return;
            if(request.status === 200 || request.status === 201){
                const responce = JSON.parse(request.responseText);
                callback(responce.id);
            } else{
                falsecallback(request.responseText)
                throw new Error(request.statusText)
            }
        });

        request.send(data);
    };

    const formElems = document.querySelectorAll(".form");

    const formHandler = (form)=>{

        const smallElement = document.createElement("small");
        form.append(smallElement);

        form.addEventListener("submit", (event)=>{

            const data = {};
            const buttonSubmit = form.querySelector('.button[type="submit"]');

            for(const {name, value} of form.elements){
                if(name){
                    data[name] = value;
                }
            }

            if(!data.name.trim()){

                smallElement.textContent ="Заполните поля для отправки";
                smallElement.style.color = "white";
                
            } else {
                sendData(JSON.stringify(data), 

                (id)=>{
                    smallElement.textContent = "Ваша заявка №" + id + "была отправленна.";
                    smallElement.style.color = "green";
                    buttonSubmit.disabled = true;

                    setTimeout(()=>{
                        smallElement.textContent = "";
                        buttonSubmit.disabled = false;
                    }, 5000);
                }, 
                (err)=>{
                    smallElement.textContent = "Ошибка: " + err;
                    smallElement.style.color = "red";
                    buttonSubmit.disabled = true;

                    setTimeout(()=>{
                        smallElement.textContent = "";
                        buttonSubmit.disabled = false;
                    }, 5000);
                });
            }

            event.preventDefault();

            form.reset();
        })
    }

    formElems.forEach(formHandler);
};

export default sendForm;

