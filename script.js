// К сожалению пришлось сделать всё это в одной функции, поскольку прошлые попытки сделать более менее читабельнее, провалились. Но я обязательно вернусь к этому коду позже и завершу его.

function addElementTask(){
    let toDoList = document.querySelector(".to-do-list__task");
    let elementTask = document.createElement("div");
    let textTask = document.createElement("div");
    let containerTask = document.createElement("div");
    let executionTask = document.createElement("img");
    let deliteTask = document.createElement("img");
    let valueTask = document.querySelector("#valueTask");
    textTask.innerText = valueTask.value;
    deliteTask.src='icon/icons8-удалить.svg';
    executionTask.src='icon/iconsKrestik.svg';
    elementTask.className = ("task__element");
    textTask.className = ("task__text");
    containerTask.className = ("task__container");
    executionTask.className = ("task__execution");
    deliteTask.className = ("task__delite");
    toDoList.prepend(elementTask);
    elementTask.append(textTask);
    elementTask.append(containerTask);
    containerTask.append(executionTask);
    containerTask.append(deliteTask);
    deliteTask.addEventListener('click', function () {
        elementTask.remove();     
    });
    executionTask.addEventListener('click', function () {
       if(executionTask.src.indexOf('icon/iconsKrestik.svg')>0){
        executionTask.src = "icon/iconsGalka.svg";
        textTask.style.opacity = "0.5";
        textTask.style.textDecoration = "line-through";
       }
       else{
        executionTask.src = "icon/iconsKrestik.svg";
        textTask.style.opacity = "1";
       }
    });
}



