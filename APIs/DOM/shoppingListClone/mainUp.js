const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');
const form = document.querySelector('.new-form');

/**
 * 동적으로 요소 추가 함수
 * */

form.addEventListener('submit',event=>{
    event.preventDefault();
   onAdd();
   // 버튼 클릭과 enter를 치면 값이 추가되었다가 사라진다
    // 이때 버튼 태그에 타입을 명시해줘서 이 버튼을 클릭했을때 sumit이 발생할 수 있게해준다.
    // why?? submit 이벤트가 발생화면 자동으로 브라우저가 페이지를 다시 로딩한다.
    // 그래서 그런 자동적인 해동을 막아줄 필요가 있다.
});
//참고
// 튜토리얼: https://developer.mozilla.org/en-US/docs/Learn/Forms
// form 태그: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
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

/*addBtn.addEventListener('click', () => {
    onAdd();
});
// keypress Deprecated됨
input.addEventListener('keydown', (event) => {
    if (event.isComposing) {
        return;
    }
    // 글자가 만들어지는 과정이라면 무시
    if (event.key === 'Enter') {
        onAdd();
    }
});*/
/*
*   keyDown 과 keyUp의 차이점
*   keyDown 은 사용자가 키보드를 눌렀을때 바로 발생하는 이벤트
*       -> 눌렀을때 바로 처리하고 싶을때
*   keyUp 은 키보드를 눌렀다가 땠을때 발생
*       -> 키보드가 눌린후에 어떤 작업을 처리하고 싶을때 사용
* */

// 지금 우리가 input text에 enter 키 또는 버튼을 클릭해서 리스트에 등록했다. 이를 하나로 합쳐보자 form  태그를 활용하자
// form 태그 안에 있으면 클릭과 키다운을 별도로 처리하지 않아도
// 사용자가 enter를 치거나 form안에 있는 버튼을 누르면 자동으로 submit이벤트가 발생한다