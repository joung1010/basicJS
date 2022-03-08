//Window Size
//1. Window Screen : 브라우저 밖, 즉 모니터 사이즈
//2. Window.outer: outer width, outer height -> 브라우저의 사이즈
//3, Window.inner : 페이지가 표시되는 전체부분(스크롤 포함)
//4. DocumentElement.clientWidth: 전체적인 페이지(스크롤 제외)

const tag = document.querySelector('.tag');
// DOM 요소중에 클래스가 about인 태그를 가리킨다
function updateTag() {
    tag.innerHTML = `
    window.screen: ${window.screen.width},${window.screen.height} <br>
    window.outer: ${window.outerWidth},${window.outerHeight}<br>
    window.inner: ${window.innerWidth},${window.innerHeight}<br>
    documentElement.clientWidth: ${document.documentElement.clientWidth},${document.documentElement.clientHeight}
    `;
}
window.addEventListener('resize',()=>{
  updateTag();
    // 우리가 선택한 태그안에 새로운 태그를 추가한다.
  /*  console.log(`window.screen: ${window.screen.width},${window.screen.height}`);
    console.log(`window.outer: ${window.outerWidth},${window.outerHeight}`);
    console.log(`window.inner: ${window.innerWidth},${window.innerHeight}`);
    console.log(`documentElement.clientWidth: ${document.documentElement.clientWidth},${document.documentElement.clientHeight}`);*/
})
updateTag();