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
        block: 'center',
        behavior: 'smooth'
    });
    input.value = '';
    input.focus();
}
let id =0 // UUID
function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute("data-id",id);
    itemRow.innerHTML = `
            <div class="item">
                <span class="item__name">${text}</span>
                <button class="item__delete">
                    <i class="fa fa-trash-o" aria-hidden="true" data-id=${id}></i>
                </button>
            </div>
            <div class="item__divider"></div>
    `;
    id++;
    return itemRow;
}

items.addEventListener('click', event => {
    const dataId = event.target.dataset.id;
    if (dataId) {
       const toBeDel = document.querySelector(`.item__row[data-id="${dataId}"]`);
        toBeDel.remove();
    }
});

addBtn.addEventListener('click', () => {
    onAdd();
});

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        onAdd();
    }
});