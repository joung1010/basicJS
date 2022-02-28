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

//2. Json to Object
//parse