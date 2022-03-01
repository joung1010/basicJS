'use strict';
// javascript 는 synchronous 하다
// -> 코드가 호이스팅 된후 우리가 작성한 순서대로 동작한다
// 호이스팅: var, function declaration 같은 것이 최상단으로 올라가는 현상

console.log(1);
console.log(2);
console.log(3);
// 1,2,3 이 순서대로 출력 (우리가 작성한 순서대로 코드가 실행 ) 동기

console.log(4);
setTimeout(() => console.log(5), 1000);
console.log(6);

// 4 6 5 출력 비동기 : 언제 코드가 실행될지 예측할 수 없다
//1. 먼저 4가 출력되고
//2.브라우저한테 1000ms 뒤에 내가 전달한 함수 실행해줘 요청
//3. 콘솔로 돌아와서 6 출력
//4. 1초뒤 다시 콘솔로 돌아와서 5출력

// -> 파라미터로 우리가 작성한 함수를 전달하면 , 내함수를 나중에 호출, call 해줘 이것이 callback 함수수
// 그럼 콜백은 비동기적으로만 사용하는가???
// 콜백도 동기적인 콜백과 비동기적인 콜백으로 나누어진다.

//1. Synchronous callback
function printImmediately(print) {
    print();
}

printImmediately(() => console.log("action immediately"))
// JS 실행 순서
/*  1. 호이스팅으로 함수 선언이 가장 상단으로 호출 된다
*    function printImmediately(print) {
    print();
    }
*  2. 코드를 순차적으로 실행
*   console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
   3. setTimeout(() => console.log(5), 1000); 브라우저에 요펑
    console.log(6);
    printImmediately(() => console.log("action immediately"))
    4. 1초후에 callback 함수 호출  console.log(5)

    * // 결과 1, 2 , 3, 4, 6, action immediately, 5
* */


//2. Asynchronous callback

function printWithDelay(print, time) {
    setTimeout(print,time);
}
printWithDelay(() => console.log('Asynchronous call'),2000);
// JS 실행 순서
/*  1. 호이스팅으로 함수 선언이 가장 상단으로 호출 된다
*    function printImmediately(print) {
    print();
    }

    function printWithDelay(print, time) {
    setTimeout(print,time);
    }


*  2. 코드를 순차적으로 실행
*   console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
   3. setTimeout(() => console.log(5), 1000); 브라우저에 요펑
    console.log(6);
   4. printImmediately(() => console.log("action immediately")) -> 동기 callback 즉시 실행
   5. printWithDelay(() => console.log('Asynchronous call'),2000); -> 비동기 callback 실행

   6.. 1초후에 callback 함수 호출  console.log(5)
   7. 2초뒤  callback 함수 호출 () => console.log('Asynchronous call')
   *
   *
    * // 결과 1, 2 , 3, 4, 6, action immediately, 5, Asynchronous call
* */







