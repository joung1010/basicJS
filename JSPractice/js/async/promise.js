'use strict';

// Promise is a JS Object for asynchronous operation (비동기를 수행할때 사용)
// 확인점
//1. state 삳태를 확인(성공 했지는 실패했는지)
//2. producer (원하는 정보를 재공), consumer (재공받은 정보를 사용) 두 차이를 이해하면서 사용

//State : 프로미스가 만들어져서 우리가 원하는 로직이 수행 중일때 (pending)
// -> 성공적으로 수행(fulfilled) vs 실패(rejected)
//producer: 우리가 원하는 로직을 수행해서 해당하는 데이터를 만들어냄
//consumer: 만들어낸 데이터를 소비

// promise 만들기

//1. producer 만들기
// promise object는 인자로 executor 라는 call back 함수를 받는다
// executor 는
//1. resolve : 기능을 정상적으로 수행해서 최종데이터를 전달
//2. rejected : 문제가 생겼을대 호출
// 2개의 callback 함수를 인자로 받는다
const promise = new Promise((resolve,rejected) => {
    // 프로미스는 보통 무거운 작업을 수행 : 왜냐하면 동기적으로 무거운 작업을 수행하면 그작업이 끝나기 전까지
    //다음 작업을 수행할 수 없음 ex).. network, read files ..
    console.log('doing Something ...'); // 바로실행됨
    // -> promise가 생성되면 바로 executor callback 실행됨!!!
    setTimeout(() => {
        resolve('mason')
        //rejected(new Error('no network')); //reject 콜백함수는 error 객체를 통해 보통 값을 전달
    }, 2000);
    // resolve callback 함수의 인자로 network 에서 받아온, 파일에서 읽어온 데이터를
    // 가공해서 그 가공한 데이터 (최종 가공 데이터를)를 전달
});

//2. Consumer : then , catch , finally
// 우리가 만든 promise가 정상 작동해서 값이 잘 전달 되었다면 (then)
// 그러면 콜백함수로 value를 받아서 우리가 원하는 기능 수행
// 이때 value라는 파라미터 는 마지막으로 resolve 콜백함수에 전달된 값을 받아온다
// then 함수가 성공적인 케이스하면
// 바로 뒤에오는 catch는 rejected callback의 값을 받아온다.(실패)
promise
    .then((value => { //then에서 성공적인 case를 받았다면
    console.log(value); // 'mason' 출력
})
    ).catch(error => { // 실패 한값을 전달받는다
    console.log(caches);
})
    .finally(()=> console.log("finish")); //성공 실패여부와 상관없이 무조건 호출
// then은 성공한 결과값을 받아서 promise를 호출하고 그 호출된 promise의 catch함수를 호출 (training)



//3. promise chaining

const fetchNum = new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000));

fetchNum.then((num) => num * 2) // -> 1*2 =  2
    .then((num) => num * 3)     // -> 2*3 =  6
    .then(num => {
        return new Promise((resolve, reject) => setTimeout(() => resolve(num - 1), 1000));
    })
    .then((num) => console.log(`num: ${num}`));

// then은 바로 값을 전달해도 되고 새로운 프로미스를(다른 비동기를 처리 해서) 전달해도된다.

// 4. Error Handling
const getHen = () => new Promise((resolve, reject) =>
setTimeout(()=> resolve('닭'),1000)
);

const getEgg = hen =>
    new Promise((resolve, reject) =>
        /*setTimeout(() => resolve(`${hen} => 계란`),1000)*/
        setTimeout(() => reject(new Error(`Error!! ${hen} => 계란`)),1000)
);

const cook = egg => new Promise((resolve, reject) => setTimeout(() => resolve(`${egg} => 후라이`),1000));


getHen()
    .then(getEgg) // -> === then( egg => getEgg(egg) ) 특정 값을 받아서 바로 콜백함수를 실행하는겨우 그 파라미터를 생략가능하다
    .catch(error => '계란 대신 빵')//  에러발생시 다른 값으로 대체함으로 써 전체 채인이 문제 없이 동작하게됨 , then절 다음에 에러를 처리하고싶을때 바로 catch절 이용
    .then(cook)
    .then(console.log);


