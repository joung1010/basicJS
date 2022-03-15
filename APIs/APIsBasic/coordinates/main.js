'use strict';

const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');
const targetRect = target.getBoundingClientRect();
const targetHalfWidth = targetRect.width/2;
const targetHalfHeight = targetRect.height/2;

document.addEventListener('mousemove', event => {
    const x = event.clientX;
    const y = event.clientY;
    //성능 개선하기

    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    target.style.transform = `translate(${x-targetHalfWidth}px , ${y-targetHalfHeight}px)`;
    tag.style.transform = `translate(${x}px , ${y}px)`;
    tag.innerHTML = (`x:${x}px, y${y}px`);



/*    vertical.style.left = `${x}px`;
    horizontal.style.top = `${y}px`;
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
    tag.style.left = `${x}px`;
    tag.style.top = `${y}px`;
    tag.innerHTML = (`x:${x}px, y${y}px`);*/
    /*
    * 실제 성능이 개선됬는지 어떻게 확인할까???
    *  개발자 도구에 Performance를 확인하다.
    *  우리가 등록한 모든일들, 즉 이벤트들을 확인할 수 있다.
    * 그 p performance 탭에 가서 녹화 버튼 클릭후 해당 이벤트를 실행한당음 stop 버튼 클릭
    * 결과 :
    *       Frame : 해당 기간동안 어떤 프레임이 발생했는지 확인
    *       Experience :  빨간색으로 레이아웃이 변경되었다고 알려줌
    * 최종 Summary에서 loading , scripting rendering painting 등 각각 단계의 시관과 총 시가을 알 수 있다.
    *   또한 스크린샷 된부분을 마수으로 클릭한뒤 드레그하면 해당 부분의 세부내용을 확인할 수 있다.
    *   즉 layout이 발생하고 다음 layout이 발생했을때까지 시간을 확인할 수 있다.
    *   -> 사용자가 조금더 원할하고 부드럽고 완만한 그런 경험을 하기위해서는
    *       1초당 60개의 프레임임 이 계속해서 보여져야 되는데  그렇게 하려면 한 프레임이 보여질때  16.67ms 동안 이루어 져야한다.
            즉 처음부터 무언가 이벤트를 처리하고 다시 브라우저에 표기 될때 16ms 안에 끝 내야된다.
            16ms 가 넘어가는 순간 사용자 입장에서 뭔가 좀 화면에 깜빡거림을 느낀다.
            해당 세부 내용에서 60프레임동안 발상한 experience 부분을 클릭하면 해당 레이아웃의 세부 내용을 확인할 수 있다.

       * 개발자 툴에서 Control Shift p 에서 show layout을 치면 화면 layout이 어떻게 변경되는지 확인할 수 있다.
     */


})