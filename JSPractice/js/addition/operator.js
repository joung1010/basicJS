if (true) {
    console.log('true');
} else {
    console.log('false');
}
let num;
if (num) {
    console.log('it is true?');
} else {
    console.log('it is false ');
}


// false : 0 , -0, '', null, undefined
// true : -1 , 'hello', []
// --> 무조건 0은 false 그리고 이를 제외한 모든 숫자는 전부 true


// if 문은 무언가가 true이면 실행하고 true가 아니면 실행이 되지 않는다
// 여기서 어떤 데이터 타입도 boolean이 될 수 있고 true가 될 수 있다.
// 이말은 즉 0이 무엇일까??
// 숫자 0은 false 이다.

//즉 프로그래밍 언어에서 데이터가 없고 비어있는 이런 것들은 false에 속한다.
// 어떤 변수를 선언하고 할당하지 않으면 이곳에는 undefined 가 할당되어져 있다.

let num2;

num2 && console.log(num2); // num2가 true이면 그값을 출력
num2 = 5;
num2 && console.log(num2);  // 9가 출력

// 이 && 연산자는 앞에 값이 true가 돼야지 뒤에가 실행이 된다.
// 그래서 지금 num2가 undefined이기 때문에 즉 num2가 false 이기 때문에 이 뒤에 문장이 실행되지 않는다.

//활용

let obj;
obj && console.log(obj.name);
obj= {name : 'hello'};
obj && console.log(obj.name); // && 연산자를 사용하는 것은 if 문을 사용하는 것과 동일하다.