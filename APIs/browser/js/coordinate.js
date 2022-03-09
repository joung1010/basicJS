'use strict';
// 브라우저 좌표 (coordinate)
/*
*
* JS 에서 x 축 과 y축은 브라우저 가장 좌측 상단 을 기준으로(0,0)
* 밑으로 또 우측으로 갈수록 값이 증가한다. 즉 브라우저 대각선으로 갈수록 값이 증가한다.
*
* Element.getBoundingClientRect() -> Element Object 안에 듷어 있는 API
* Element 란 DOM 에 들어있는 모든 요소들, 즉 이미지, 텍스트 테그들, 다양한 테그, 모두 Element
* -> 즉 모든 요소들은 getBoundingClientRect() API를 사용할 수 있다
*
*   EX) imgTag.getBoundingClientRect() 하면 위치 정보를 가져올 수 있다.
*
*     요기 가 기준으로 값을 가져올때는 (left , top)
*      😉-----------------------------------------------
*     |                                             |
*     |                                             |
* *   |---------------------------------------------😉
*                                                   요기 기준으로 값을 가져오면 (right 과 bottom)
*      여기서 CSS position의 top left right bottom과 햇갈릴 수 있다
*       CSS의 기준은 항상 이름그대로 top은(브라우저 상단), right(우측) left(좌측) bottom(하단)
*
* */

// client x y 와 page x y
// client x y는 브라우저를 기준으로 해당 좌표값을 가져온다
// page x y 는 페이지의 시작점에서부터 해당위치가 얼마나 떨어져있는지를 계산한다.

// css: overflow : 문서의 내용이 window보다 벗어나게 되면 그에 관련된 조작을함
// overflow: hidden; <- 스크롤이 안됨

const special = document.querySelector('.special');

//1. 내꺼
/*
special.addEventListener('click',(event) =>{
    special.innerHTML=`
    clientXy :X ${event.clientX} ,Y ${event.clientY} <br>
     pageXy : X  ${event.pageX} ,Y ${event.pageY}
    `;
   console.log(`clientXy : ${event.clientX} , ${event.clientY}
   pageXy :  ${event.pageX} , ${event.pageY}`);
});
*/

special.addEventListener('click',(event)=>{
    const rect = special.getBoundingClientRect();
    console.log(rect);
    console.log(`clientXy : ${event.clientX} , ${event.clientY}`);
    console.log(`pageXy :  ${event.pageX} , ${event.pageY}`);
});

// ++ scroll
// 1. 100px 씩 y축으로 이동
const scrollBy = document.querySelector('#scrollBy');

scrollBy.addEventListener('click',(event)=>{
    const currentY = window.scrollY;
    window.scrollTo(0, currentY + 100);
});

//2. 위에서 100px만 이동
const scrollTo = document.querySelector('#scrollTo');

scrollTo.addEventListener('click',(event)=>{
    const currentY = event.clientY;
   window.scrollTo(0,currentY+100);
});

//3. special 위치로 이동

const scrollInto = document.querySelector('#scrollInto');
const moveSpecial = document.querySelector('.special').getBoundingClientRect();
scrollInto.addEventListener('click',()=>{
    window.scrollTo(moveSpecial.x,moveSpecial.y);
});