// window.load
/*
*  웹 페이지가 있다면 브라우저에서 HTML 파일을 먼저 읽은 다음에
*  그에 관련된 이미지나 폰트나 필요한 리소스가 있다면 리소스도 함께 다운받는다.
*  그리고 자바스크립트 파일이 있다면 자바스크립트 파일도 다운로드 받는다
* */

// 1. body 테그 끝에 script가 있는 경우
/*
*  HTML 페이지를 읽어서 DOM 요소로 변환한 다음에 script 부분을 만나면
*  window에 event Listener를 등록하게 되고 window에서 페이지 필요한 모든 리소스가 다 로딩이
*  완료가 되면 해당 등록한 event가 발생시 event Listener에 등록된 callback 함수가 실행된다
*
*   window.addEventListener('DOMContentLoaded',()=>console.log('DOMContentLoaded'))
*   DOMContentLoaded 는 Only document 즉 HTML 이 다 로드되면 호출
*
*  window.addEventListener('load',()=>console.log('load'))
*  load 는 after resources 즉 HTML 뿐만아니라 필요한 리소스들도 로드한후에 호출
*
* */
// 2. header에 추가 & deffer option
console.log('js load');
/*
*  출력 순서 : 1.js load, 2.DOMContentLoaded , 3.load
*  HTML이 전부 로드된 후에 DOMContentLoaded 이벤트가 발생되기 전에 head에 있는 script가 먼저 실행
*  즉 JS 파일이 어떤 리소스에 대해서 즉 이미지나 폰트에 대한 뭔가 수행하지 않는 다면
*  DOMContentLoaded 안에 동작을 수행하는 것이 더 빠르다.
* */

// + beforeunload : 사용자가 페이지에 나갈때 나가기전에 호출
//   unload       : resource is being unloaded 일떄 호출


//3. defer async body 끝 , body 앞
/*
*   브라우저가 HTML를 1줄씩 읽다가 script를 만나면 script를 다운받고 실행한다!!!
*
*   1. head 에 script 가 있으면 script를 다운받고 실행된후 HTML를 다운
*       -> 화면이 느리게 보인다
*
*   2. body 끝 -> 기본적으로 화면은 빠르게 볼 수 있지만 JS에 의존적인 페이지는
*                 script가 다운되고 실행될때까지 유의미한 데이터를 볼 수 없다
*
*   3. head async : script를 병렬로 다운 받음
*          -> script 와 HTML 를 동시에 다운로드
*          -> 다운 속도가 더빠르지만 HTML이 전부 다운로드 되기전에 JS가 실행될 수 있음
*
*   4. head defer : script 다운 명령을 주고 HTML 다운이 끝나면 JS를 실행 한다.
* */