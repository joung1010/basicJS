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


//3. Property value shorthand
const person1 = {name:'bob', age: 3}
const person2 = {name:'steve', age: 4}
const person3 = {name:'bon', age: 5}
//다음 객체를 생성할때 마다 동일한 key 와 value가 반복된다 좀더 편한 방법이 없을까?
// -> 함수를 사용한다

function makePerson(name, age) {
    return {name,age};
}

const person4 = makePerson('mason', 5);
console.log(person4);
// 근데 우리는 이렇게 객체를 생성으로 만들어진 함수를 Constructor function 생성자 함수라고 한다
// 생성자 함수는 보통 첫글자를 대문자로 쓰고 사용은 new 키워드와 함께 사용

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person5 = new Person('bob', 5);
console.log(person5);

// in operator : 해당 key 값이 해당 객체에 있는지 없는지 체크해준다
console.log('name' in mason);
console.log('age' in mason);
console.log('wing' in mason);

// 또 다른 for(key in obj), for(value of iterable)

console.clear();
for ( const key in mason) {
    console.log(key);
}
// mason 객체의 key 값을 순차적으로 key value 에 할당한다

const array = [1, 2, 3, 4];
for (const number of array) {
    console.log(number);
}
// of 키워드는 배열이나 list 자료형일 때 사용

 // cloning

const user = {name:'mason', age: '20'};
const user2 = user;
// -> 메모리에서 user 는 name 과 age 를 가라키는 주소 값이 할당되어있다
// user2역시 user 와 같은 주소가 들어있기때문에 같은 속성들을 가리킨다

user2.name = 'coder';
console.log(user); // -> name의 값이 coder 로 변경되어있음

//진짜 객체를 복사하는 방법
//old version

const user3 = {};
for (const key in user) {
    user3[key] = user[key];
}
console.log(user3);

//2. Object.assign 사용

const user4 = Object.assign({}, user);
console.log(user4);
const user5= {};
Object.assign(user5,user);

//만약 동일한 키 값을 가지고 있는 경우 어떻게 될까???


const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};

const mix = Object.assign({}, fruit1, fruit2);

mix.color //?? blue!! 가장 오른쪽에 있는 객체의 키값을 계속 덮어쓰기한다!!
















