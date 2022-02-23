// Objects
// 우리가 일반적으로 primitive 타입은 변수 하나당 값을 하나만 할당할 수 있다.
// 함수에 파라미터로 넘길때 필요한 값이 증가하면 계속 그 파라미터가 증가한다.
const name = 'mason';
const age = 4;

function print1(name, age) {
    console.log(name);
    console.log(age);
}
// lastName, firstName, age 등 파라미터가 계속 증가한다
//그래서 이를 해결하기위해서 object가 등장

const mason = {name: 'mason', age: 2};

function print2(person) {
    console.log(person.name);
    console.log(person.age);
}

// Object를 만드는 2가지 방법
const obj1 = {}; //{} 사용 -> object literal
const obj2 = new Object(); //new 연산자와 함계 class 사용 -> object constructor

// JS Runtime에 변수의 타입이 정해지는 언어 이다 그래서 object의 속성을 선언후에 추가하거나 삭제할 수 있다.
mason.hasJob = true;
console.log(mason.hasJob);
delete mason.hasJob;
console.log(mason.hasJob);

// 즉 앞의 예제를 봤을 때 Object는 key 와 value의 집합체 {key: value}

// 2. Computed properties  키는 항상 String으로

console.log(mason.name); // object 의 속성을 . 을 이용해서 접근 1
console.log(mason['name']); // [] 배열 형태로 안에 String 형태의 변수명을 입력해준다 2
mason['hasJob'] = true; //이런식으로 추가도 가능
console.log(mason['hasJob']);

// 1번은 그냥 코딩하는 순간에 바로 그 key 값을 가져오고 싶을때
//2번은 정확하게 어떤 key 가 필요한지 모를때. 즉 runtime에 결정될때, 실시간으로 원하는 key 값을 가져오고 싶을때 사용
// 예시

function printvalue1(obj, key) {
    console.log(obj.key);
}

printvalue1(mason, 'name'); // undefined
//-> object에 key라는 proerty가 있니?? -> key라는 proerty 없잖아!!!!!

// 이럴때 computed property 사용
function printvalue2(obj, key) {
    console.log(obj[key]);
}
printvalue1(mason, 'name');
printvalue1(mason, 'age');
// 즉 동적으로 어떤 key의 value를 받아올대 사용














