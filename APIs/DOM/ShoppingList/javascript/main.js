'use strict';

const input  = document.querySelector('.text__add');
const list = document.querySelector('.shopping__list');
const addBtn = document.querySelector('#add_btn');

function addList() {
    const enterValue = input.value;
    if (!enterValue) {
        input.focus();
        return;
    }
    const div = document.createElement("div");
    div.classList.add('list__text');
    div.innerHTML = `${enterValue} 
        <i class="fa fa-trash" aria-hidden="true" id="del_btn" ></i>
        `;
    list.appendChild(div);
    div.scrollIntoView({block: "center"});
    input.value='';
    input.focus();
}




input.addEventListener('keypress',(event)=>{
    if (event.keyCode === 13) {
        addList();
    }
});
list.addEventListener('click',(event)=>{
    const targetId = event.target.id;
    if (targetId === 'del_btn') {
        list.removeChild(event.target.parentNode);
    }
});
addBtn.addEventListener('click',()=> addList());