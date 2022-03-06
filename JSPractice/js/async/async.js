'use strict';
// async, await : syntactic sugar
// ->기존에 있던 Promise 위에 조금더 편라히게 사용할 수 있게 도와줌
// -> 기존에 존재하는 것 위에, 존재하는 것을 감싸서 조금더 간편하게 재공하는 것을
// ->syntactic sugar ex) class : proto type 위에 그위에 편리하게 사용할 수 있게끔 제공하는 것

//1. async

// 1.1
function fetchUser() {
    // 10초동안 네트워크에서 값을 받아옴
    return 'mason';
}

const user = fetchUser();
console.log(user);

// 해당 작업을 만약 비동기로 처리하지 않으면 동기적으로 작업이 진행된다 즉, 1줄이 다끝나야만 다음 작업을 수행한다는 의미
// 1. fetchUser() 해당 함수로 이동
// 2. 함수를 실행학도 10초동안 네트워크 작업 수행
// 3. 그다음 결과 값 'mason'을 return
// 4. 해당 결과값이 user에 할당
// 5. console.log로 출력
// -> 만약 이작업뒤에 화면을 보여주는 작업이 있다면 사용자는 10초동안 빈화면을 보게 된다


//1.2 Promise 적용

function fetchUser2() {
    
    return new Promise((resolve, reject) => {
        // 10초동안 네트워크에서 값을 받아옴
        //return promise
        // 어떤 비동기 처리를 promise로 실행하는데 결과값을 resovle 와 reject로 전달하지않으면 계속 프로미스 상태값이 pending상태가됨
        resolve('mason');
    });
}
//user는 Promise의 객체이기 때문에 then을통해 결과값을 처리
const user2 = fetchUser2();
user2.then(console.log);


//1.3 async 키워드 사용
async function fetchUse3r() {
    // 10초동안 네트워크에서 값을 받아옴
    return 'mason';
}
// 함수 앞에 async 라는 키워드를 붙이면 해당 함수 블럭에 있는 코드를 자동적으로 promise로 변환 해준다!!!!
const user3 = fetchUser2();
user3.then(console.log);

// await( async 가 붙은 함수안에서만 사용가능 ) -> await가 붙은 작업을 끝날때까지 기다려줘!

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple() {
    await delay(1000);
    return'apple';
}

async function getBanana() {
    await delay(3000);
    return'banana';
}

function noAsyncKeywordBanana() {
    return delay(1000).then(() =>'banana');
}

const apple = getApple();
const banana = getBanana();
console.log(`apple: ${apple}`) // 프로미스가 return
console.log(`banana: ${banana}`)// 프로미스가 return
console.log(noAsyncKeywordBanana())// 프로미스가 return

function prickFruits1() {
    return getApple()
        .then(apple => getBanana().then(banana => `${apple},${banana}`));
}

async function prickFruits2() {
    const apple = await getApple();
    const banana = await getBanana();
    // 두개의 작업은 서로 연관성이 없기때문에 apple 작업이 끝난뒤에 banana가 실행될 이유가 없다
    // apple이 실행되는데 banana가 필요없고 banana가 실행되는데 apple이 필요없다
    // console.log(apple);
    // console.log(banana);
    return `${apple},${banana}`;
}
// 개선해보기
async function prickFruits3() {
    const applePromise =  getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    // promise는 생성과 동시에 실행된다.
    // console.log(apple);
    // console.log(banana);
    return `${apple},${banana}`;
}

// promise의 유용한 API 사용해보기
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
        // all 함수는 인자로 Promise 배열로 전달하면 해당 배열 Promise 값들을 모두 받아 모아준다
        .then(fruits => {
            console.log(fruits);    // [apple, banana]
            return fruits.join('+');
        });
}

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
    // race함수는 Promise 배열중 가장 첫번째로 값을 return하는 Promise의 값을 return한다
}


prickFruits1().then(console.log);
prickFruits2().then(console.log);
prickFruits3().then(console.log);


pickAllFruits().then(console.log);
pickOnlyOne().then(console.log);



