'use strict';
// 브라우저 좌표 (coordinate)
/*
*
* JS 에서 x 축 과 y축은 브라우저 가장 좌측 상단 을 기준으로(0,0)
* 밑으로 또 우측으로 갈수록 값이 증가한다. 즉 브라우저 대각선으로 갈수록 값이 증가한다.
*
* Element.getBoundingClientRect() -> Element Object 안에 듷어 있는 API
* Element 란 DOM 에 들어있는 모든 요소들, 즉 이미지, 텍스트 테그들, 다양한 테그, 모두 Element
* -> 즉 모든 요소들은 getBoundingClientRect() API를 사용할 수 있다
*
*   EX) imgTag.getBoundingClientRect() 하면 위치 정보를 가져올 수 있다.
*
*     요기 가 기준으로 값을 가져올때는 (left , top)
*      😉-----------------------------------------------
*     |                                             |
*     |                                             |
* *   |---------------------------------------------😉
*                                                   요기 기준으로 값을 가져오면 (right 과 bottom)
*      여기서 CSS position의 top left right bottom과 햇갈릴 수 있다
*       CSS의 기준은 항상 이름그대로 top은(브라우저 상단), right(우측) left(좌측) bottom(하단)
*
* */

// client x y 와 page x y
// client x y는 브라우저를 기준으로 해당 좌표값을 가져온다
// page x y 는 페이지의 시작점에서부터 해당위치가 얼마나 떨어져있는지를 계산한다.

