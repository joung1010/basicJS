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


