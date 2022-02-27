'use strict';
//현실에서도 비슷한 물건들을 한곳에서 모아둔다 마치 마트의 식품코너, 생필품 코너처럼
//프로그래밍에서도 비슷한 데티러를 한곳에 묶어서 보관하는 것을 '자료구조' 라고한다
// 그럼 전에 비슷한 종류를 묶는 Object와 무슨 차이가 있을까???

//그건 고기(양고기, 닭고기, 소고기) 처럼 Object는 서로 연관된 특징이나 행동들을 묶어둔다
// 그 서로 연관된 특징들 (타입)을 묶어두는 것을 자료구조 라고 한다.
// 또한 자료구조는 보통 동일한 타입으로된 데이터를 묶어 둔다
//하지만 JS에서는 타입이 동적으로 결정되기 때문에 서로다른 타입을 자료구조에 저장할 수 있기는 하지만 그렇게 사용하지는 말자



// 선언
const arr1 = new Array();
const arr2 = [];
const arr3 = [1,2]; //사이즈는 2 인덱스는 0 -> 1 , 1 -> 2

//2. Index position
 const animal = ['😼','🐶'];
console.log(animal); // 0 : 고양이 , 1 : 강아지 , __proto__ : 다음시간에 자세히
console.log(animal.length);// 사이즈는 2
console.log(animal[1]); //고양이
console.log(animal[2]); //강이지
console.log(animal[3]); // undefined
// 보통 배열의 마지막 요소에 접근할때 는
console.log(animal.length - 1); // 이런식으로 접근


 //3. Looping over an array
console.clear();
//1.
for (let i = 0; i < animal.length; i++) {
    console.log(animal[i]);
}
//2.
for (let string of animal) {
    console.log(string);
}
//3.foreach 배열에 들어있는 각각의 값에 특정한 로직을 수행
//총 2개의 파라미터를 받는다 콜백함수와 , 콜백함수가 참조할 수 있는 객체(필수값 아님 안주면 undefined)
// 콜백함수는 총 3개의 값을 받는다 1. value(배열의 각 각 값), 인덱스, 전체적인 배열
animal.forEach(function (animal,index,array){
    console.log(animal, index, array);
});
// 이름 없는 익명함수는 arrow function으로 변환 가능

animal.forEach((animal, index) => console.log(animal, index));

//4. Addtion , deletion , copy
//add an item to the end
//push : add an item to the end
animal.push('🐯', '🦎');
console.log(animal);
// pop : remove an item from the end
animal.pop();
animal.pop();
console.log(animal);

// unshift : add an item to the begin
animal.unshift('🐯', '🦎');
console.log(animal);

//shift : remove an item from the begin
animal.shift();
animal.shift();
console.log(animal);

// shift , unshift는 pop , push 보다 속도가 매우 느리다
// why?? -> 배열을 맨뒤에 추가되거나 삭제되는것은 기존 배열데이터들은  아무 이동없이 진행된다
// 하지만 맨앞인덱스에 추가하거나 삭제될시 기존 인덱스들은 다음 인덱스로 이동되고 맨앞 인덱스의 기존값은 삭제된다
// 즉 다른 기존 데이터들이  많은 이동을 하기때문에 속도가 느리다!.

// splice: 특정인데스 지우고 추가하기

animal.push('🐯', '🦎');
console.log(animal);
// 삭제할 인덱스, 지우고싶은 개수, 추가할 값
// 기본적으로 삭제할 인덱스만주면 그인덱스 부터 뒤에 있는 모든 내용을 삭제
animal.splice(1);

animal.push('🐯', '🦎');
animal.splice(1,1);
console.log(animal);
animal.splice(1,1,'🐨','🐟'); //지우고 추가도 가능

//배열 합차기 : concat;

const animal2 =['🦝','🐢'];

const newAnimal = animal.concat(animal2);
console.log(newAnimal);

// concat API : 1개이상의 배열을 합칠때 사용 return 으로 새로운 배열
console.clear();

//5. searching
// find the index;
console.log(animal);

//index of
console.log(animal.indexOf('😼')); //0
console.log(animal.indexOf('🦈')); // -1 없으면 -1
//include
console.log(animal.includes('😼')) // 있으면 true
console.log(animal.includes('🦈')) // 없으면 false
//lastIndexOf
console.clear();
animal.push('😼');
console.log(animal.indexOf('😼')); //0 해당 값을 처음으로 가지고 있는 index 반환
console.log(animal.lastIndexOf('😼')); //3 해당 값을 마지막으로 가지고 있는 index 반환







