'use strict';
//1. 변수 선언 let
let name = 'mason';
console.log(name);
name = 'jeong';
console.log(name); //값 변경
/*
*  name 이라는 변수를 정의
*  이 name 이라는 변수가 가리키는 특정 메모리 어딘가에 mason이라는 값이 할당
*  추후 이 값은 변경이 가능
* */

// 2. block scope 범위
let globalName ='global';
{
    let name = 'mason';
    console.log(name);
    name = 'jeong';
    console.log(name);
    console.log(globalName); //값 출력
}
console.log(name); // 값출력 안됨
console.log(globalName); //값 출력

/*
*  특정 block 안에서 정의돈 변수들은 그 범위안에서만 사용가능
*  그러나 스코프 밖에서 정의된 변수들을 전역 변수라한다
*  이 전역 변수들은 application 이 실행되고 끝날때까지
* 메모리에 상주하고 있기 때문에 사용을 최소하고
* 정말 필요한 곳에서만 선언해서 사용하자
* */


// 기존에 섰던 var을 쓰면 안되는 이유
console.log(age)
age = 4
var age;
/*1. 위와 같이 변수 선언전에 사용가능
*  이러한 현상을 호이스팅이라한다
* 호이스팅: 변수 선언 위치와 상관없이 변수 선언을 가장 최상단으로 끌어올린다.
* */

{
    console.log(age)
    age = 4
    var age;
}
onsole.log(age)

/*
*   2. block 스코프를 무시
*   해당 블록에서 선언하고 그밖에서도 사용가능하다
* */


/*
* 3. Costants
* 한번 값을 할당하면 다신 변경 불가
* */

const count = 17;
const size = 17.1;
// template literal `` <- 사용
console.log(`Value: ${count}, type: ${typeof count}`);
/*
* 값이 할당되고 다시 변경되지 않는 데이터 타입을 사용하자
* 1. 보안성
* 2. 스레드에 대한 안전성
* 3. 사람의 싫수를 줄이기 위해서
* */

// Immutable data Type: 한번 값이 저장되면 읽기만 가능
// mutable type: 값을 읽고 쓰기 가능

//이때 primitive type과 object type이 메모리에 저장되는 방식이 다르다
// primitive 타입은 그 값이 그대로 메모르에 정장되는 반면에
// object 타입은 한번에 메모리에 올라가기에는 그값이 커서
// 실제 object안의 변수가 실제 가리키는 값에 위치가 저장된다.



//4. Variable type
//1. primitive : number String, boolean, symbol, null, undefined
//2. Object: primitive 타입 여러개를  하나의 object로 관리
//3.function: first-class function 이란 함수를 변수로,파라미터 또 return으로 반환 가능한 형태

//Javascript 에서 숫자형은 모두 number
//* 숫자 번위가 -2^53 ~ 2^53인데 이보다 큰값은 뒤에 n을 붙혀 bigInt 타입으로 변환한다.

//Javascript 에서 문자형은 모두 String

//boolean
//true: any other value
//false: 0, null. undefined, NaN, ''

//null
let nothing = null;
// 값이 아무것도 없이 빈값이다.

//undefined
let x;
// 아지 값이 정해지지 않았다.

//5. Dynamic typing: 런타입때 할당된 값에 따라 자료형이 정해진다.
let text = 'hello';
console.log(text);
text = 1;
console.log(text);
text = '7'+5;
console.log(text);
// 값 75 자료형 string
text = '8'/'2';
//값 4: 자료형 number;















