const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

/**
 * 동적으로 요소 추가 함수
 * */
function onAdd() {
    const text = input.value;
    if (text === '') {
        input.focus();
        return;
    }
    const item = createItem(text);
    items.appendChild(item);
    item.scrollIntoView({
        block:'center',
        behavior:'smooth'
    });
    input.value = '';
    input.focus();
}

function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');

    const item = document.createElement('div');
    item.setAttribute('class','item');

    const span = document.createElement('span');
    span.setAttribute('class','item__name');
    span.innerText = text;

    const delBtn = document.createElement('button');
    delBtn.setAttribute('class','item__delete');
    delBtn.innerHTML=`<i class="fa fa-trash-o" aria-hidden="true"></i>`;

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider');

    item.appendChild(span);
    item.appendChild(delBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);
    return itemRow;
}
items.addEventListener('click',event=>{
    if (event.target.parentNode.tagName === 'BUTTON') {
        items.removeChild(event.target.parentNode.parentNode.parentNode);
    }
});

addBtn.addEventListener('click', () => {
    onAdd();
});

input.addEventListener('keypress',(event)=>{
    if (event.key === 'Enter') {
        onAdd();
    }
});