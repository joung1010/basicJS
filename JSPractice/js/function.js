//Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

//1. 함수 선언방법
// function name(param1, param2){ main logic  return;   }
// -> 하나의 함수는 한가지의 일만 해라
// 이름: doSomething, command, verb
// 자바스크립트에서 함수는 object 이다

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hi');

//2. 파라미터
// Primitive Parameter: 실제 메모리에 해당 값이 저장되어 있기때문에 값이 전달
// Object Parameter : 실제 메모리에 참조값이 저장되어 있기때문에 참조값이 전달

function changeName(obj) {
    obj.name = 'coder';
}

const mason ={name: 'mason'};
changeName(mason);
console.log(mason);

//3. Default parameters (add ES6)
function showMessage(message, from = 'unkown') {
    console.log(`${message}, by ${from}`);
}

showMessage('Hi!');
// from 의 파라미터가 전달되지 않으면 = 'unkown' from 은 해당 값을 default로 갇는다

//4.Rest parameter(added in Es6)

function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}

printAll('Dream', 'is', 'come', 'true');

// ... 은 해당 파라미터를 배열 형태로 전달한다.
//-> args=['Dream', 'is', 'come', 'true']; 처럼 전달

//5. local scope

let globalMessage = 'global'; //global

function printMessage() {
    let message= 'message';
    console.log(message); //local
    console.log(globalMessage);

    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }

    function printAnother() {
        console.log(message);
        let childMessage = 'hi';
        // 함수 관계에서도 이원칙은 동일!
    }
}
printMessage();
//클로저와 같은 상위 개념을 관통하는 대원칙
// 밖에서는 안을 볼 수 없지만 안에서는 밖을 볼 수 있다.

//6. Return Value

function sum(a, b) {
    return a+ b;
}

const result = sum(1,2); // 3
console.log(`result : ${result}`);
// return 이 없는 경우 return undefined 가 생략되어 있는 것이다.

// tip 7 Early return, early exit

function upgrade(user) {
    if (user.points>10) {
        // long logic
    }
}
// bad if 절 안에 로직이 길어지면 가독성이 떨어짐


function upgradetwo(user) {
    if (user.point <= 10) {
        return;
    }
    //long logic
}
// good 특정 조건일때 빠르게 종료후 뒤에 로직 작성

//First-class function
//1.함수를 변수에 할당할 수 있다.
//2. 함수를 파라미터로 넘길 수 있다.
//3. 함수를 return  할 수 있다.

// 이 모든 걸 가능하게 하는 것이 함수 표현식
//1. function expression
const print = function () {//이처럼 이름이 없는 함수를 anonymous function 익명함수라고 한다.
    console.log('print');
};
print();
const printAgain = print;
printAgain();

const sumAgain = sum;
console.log(sumAgain(2, 3));

// 함수 선언과 함수표현식의 가장 큰 차이는 함수 표현식은 변수에 할당한후에 사용가능
// 함수 선언식은 호이스팅된다(즉 함수를 선언하기도전에 호출이 가능하다.)


//2. callback 함수

function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function () {
    console.log('yes');
};

// named function
//사용 이유 디버깅할때 stack trace 함수명 표시할때
// 재귀함수에 사용
const printNo = function () {
    console.log('no');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love', printYes, printNo);


// Arrow function 항상 anonymous function

const simplePrint = function () {
    console.log('simple');
};

const simplePrint2 =  () => console.log('simple');
// 위 두개는 동일한 함수

const add = function (a, b) {
    return a+b;
};

const add2 = (a,b)=> a+b;
//위 두개는 동일한 함수

//만약 여러줄을 써야 되는 경우

const add3 = (a, b) => {
    //doSomething

    return a*b;
};
//단 blokc이 있는 경우는 return을 명시해  줘야 된다

// IIFE (Immediately Invoke Function Expression) 즉시 실행한수
function hello() {
    console.log('IIFE');
}
hello(); //이렇게 선언후 별도 실행이 필요

(function hello() {
    console.log('IIFE');
})();
//위 처럼 함수를 선언하고 ()안에 넣고 (); 실행하면 선언과 동시에 실행된다.

const calculate = (command, a, b) => {
    switch (command) {
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            return a / b;
            break;
        default:
            return;
    }
};










