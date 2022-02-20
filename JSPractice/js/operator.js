//String concatenation
console.log('my' + '  cat');
console.log('1' + 2);
console.log(`String literal 1+2: ${1 + 2}`);
//2. Numberic Operator
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3); // 2에 3승

//3. Increment and Decrement operator
let counter = 2;
const preIncrement = ++counter;
//counter = count+1;
//preIncrement = counter;
console.log(`preIncrement:${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement:${postIncrement}, counter: ${counter}`);

//4, Assignment operator
let x = 3;
let y = 6;
x += y; // x+ x=y
x -=y;
x *=y;
x /=y;
//5. logical operator ||(or), &&(and), ! (not)
const value1= false;
const value2 = 4<2;

//|| or
console.log(`or: ${value1 || value2 || check()}`)

function check() {
    for (let i = 0; i < 10; i++) {
        console.log('윙');
    }
    return true;
}
// && and
console.log(`or: ${value1 && value2 && check()}`)

// ! (값을 반대로 변경해줌)
console.log(`not: ${!value1}`); //true

//6. Equality
const stringFive = '5';
const numberFive = 5;

// == lose equality, with type conversion(논리적 비교)
console.log(stringFive == numberFive); //true
console.log(stringFive != numberFive); //false

// === strict equality, no type conversion 타입이 다르면 틀림
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true

//object equality by reference
const mason1 ={name: 'mason'};
const mason2 ={name: 'mason'};
const mason3 = mason1;

console.log(mason1 == mason2); // false 두 객체의 참조값이 다르다
console.log(mason1 === mason2); // false 두 객체의 멤버변수가 가르키는 값이 다르다
                                // 두 멤버 변수가 가르키는 메모르상 위치가 다르다
console.log(mason1 === mason3);// true 두 참조 값이 같다

// 8. conditional operator
// if else if else
const name = 'mason';
if (name === 'mason') {
    console.log('I am mason')
}else if (name === 'coder') {
    console.log('I am coder')
}else{
    console.log('who are you?');
}

//9. Ternary operator : ?
console.log(name === 'mason' ? 'yes' : 'not');

//10. switch
const browser = 'IE';

switch (browser) {
    case "IE":
        console.log("IE");
        break;
    case "Chrome":
    case "Firefox":
        console.log('great it');
        break;
    default:
        console.log("Oh no!~");
        break;

}

let i =3;
while (i > 0) {
    console.log(`i: ${i}`);
    i--;
}
//do while 은 무조건 1번 실행

//for(begin: condition: step)
/*
for (let i = 0; i < 10; i++) {
    console.log(`i: ${i}`);
}
*/

//break: 반복문 탈출
// continue: 현재 조건만 스킵
for (let i = 0; i <= 10; i++) {
    if (i % 2  !== 0) {
        continue;
    }
    console.log(`num: ${i}`);
}


for (let i = 0; i <= 10; i++) {
    if (i > 8) {
        break;
    }
    console.log(`num2: ${i}`);
}
