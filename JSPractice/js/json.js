'use strict';
// http: application 과 같은 client 들이 어떻게 서버와 통신할것인지 정의 한 것
// (Hyper text transfer protocal) -> 어떻게 hypertext들을 주고 받을지 규약한 것
// client는 서버에게 요청(request)하고 요청의 응답(response)을 받는다
// hypertext 뿐만 아니라 이미지나, 문서 파일등도 전달할 수 있다.

//Ajax(Asynchronous javascript and xml): http 서버에서 데이터를 받아올 수 있는 방법
// XHR(XML Http Request) : 브라우저에서 제공하는 API
// 이 API를 사용하면  간단하게 서버에게 데이터 요청하고 받아올 수 있다
// -> 최근에는 fetch() API 사용

//XML: HTML 과 같이 markup언어로 데이터를 표현
//최근에는 서버와 통신할때 json을 많이 사용용

//XML은 파일이 무겁고 가독성이 떨어져서 최근에는 json을 많이 사용한다

//json(javascript Object nation)
//1. 데이터를 주고 받을때 사용하는 가장 간단한 형식
//2. 가볍고, 텍스트 기반
//3. 가독성이 좋다
//4. key, value로 구성
//5. 데이터를 서버와 주고받을때 주로 직렬화를 위해서 사용
//6. 언어와 플랫폼에 상관 없이 사용

// 포인트 : 어떤 데이터를 어떻게 직렬화 할것인지 반대로 직렬화된 데이터를 어떻게 객체로 변환할 것인지

//1. Object to json
//stringify
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

//객체를 변환

const rabit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthday: new Date(),
    jump: function (){
        console.log(`${this.name} is jump`);}
};
json = JSON.stringify(rabit);
console.log(json);
//stringify 함수는 원하는 속성값만을 뽑아서 json을 만들 수 있다 []형식 또는 callback함수를 이용해서
let json2 = JSON.stringify(rabit,['name','color']);
console.log(json2);

//call back 함수는 인자로 key value 모두 받는다 첫번재는 객체 그자체의 값을 받는다
json = JSON.stringify(rabit,(key , value) => {
        console.log(`key : ${key} value : ${value}`)
    return key === 'name' ? 'mason' : value;
    }
);
console.log(json);


//2. Json to Object
//parse
console.clear();
json = JSON.stringify(rabit);
console.log(json);
const obj = JSON.parse(json);
console.log(obj);

// 기존에 rabit이라는 객체에는 함수가 존재 하지만 우리가 변환한 obj 객체는 함수가 존재하지 않는다
// 그이유는 직렬화된 string값을 객체로 전환 했기때문에 즉 우리가 rabit을 json으로 변환할떄 함수는 포함되어 있지 않기 때문이다.
rabit.jump();
//obj.jump();

console.log(rabit.birthday.getDay()); // birthday 는 new로 만들어진 Date 객체
//console.log(obj.birthday.getDay()); // 에러 이유는 obj의 birthday는 string 이기때문이다
// 해결 방법
const obj2 = JSON.parse(json,(key,value) =>  key === 'birthday' ? new Date() : value);
console.log(obj2.birthday.getDay());

// 오류 발견 객체 내에서 화살표 함수를 쓰면 해당 객체의 속성값을 읽어 오지 못한다
