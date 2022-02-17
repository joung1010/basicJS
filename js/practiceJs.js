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
