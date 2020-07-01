let $input;
let $btnAdd;
let $btnOk;
let $btnDelete;
let $alert;
let $li;
let $ul;

const main = () =>{
prepareDOMElements()
prepareDOMEvents()

};

const   prepareDOMElements = () =>{
    $input =document.querySelector(`.input`);
    $alert = document.querySelector(`.alert`);
    $btnAdd = document.querySelector(`.btnAdd`);
    $ul = document.querySelector(`.ul`);
    $li = document.querySelector(`li`)
}

    const    prepareDOMEvents = () =>{
        $btnAdd.addEventListener(`click`, addTask );
        $ul.addEventListener(`click`, checkClick);
        $input.addEventListener(`keyup`, addTaskEnter)
    }

    const addTask = () => {
        if($input.value !== ''){
            $li = document.createElement(`li`)
            $ul.appendChild($li);
            $li.textContent = $input.value;
            $alert.textContent = ``;
            $input.value = ``;
            addTools();
        }else{
            $alert.textContent = `Musisz wpisac jakas treść!`
        }
    }
const addTaskEnter = () =>{
if(event.keyCode === 13)
addTask()

}
const checkClick = (e) =>{
    if (e.target.closest(`button`).classList.contains(`btnOk`))
    {
        e.target.closest(`.li`).classList.toggle(`endTask`)
    } 
    else if
    
    (e.target.closest(`button`).classList.contains(`btnDelete`))
    {
        const clickDelTask = e.target.closest(`li`);
        clickDelTask.remove();
}

}

    
 const addTools = () =>{
     const toolsArea = document.createElement(`div`)
     
     $li.appendChild(toolsArea);
     $li.classList.add(`li`)
     toolsArea.classList.add(`tools`)
     
     const toolsEnd = document.createElement(`button`);
     toolsArea.appendChild(toolsEnd);
     toolsEnd.classList.add(`btn`);
     toolsEnd.classList.add(`btnOk`);
     toolsEnd.textContent= `Zakończ`;
     
     const del = document.createElement(`button`);
     toolsArea.appendChild(del)
     del.classList.add(`btn`);
     del.classList.add(`btnDelete`);
     del.textContent= `Usuń`;
    }
    
    
    



document.addEventListener(`DOMContentLoaded`, main )