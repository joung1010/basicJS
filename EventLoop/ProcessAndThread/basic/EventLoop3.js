/*
*   중요 포인트
*   callstack 에서 수행중인 작업은 끝날때 까지 보장 된다.
* 즉 그 중간ㅇ ㅔ다른 작업을 할 수 없고 지금 수행중인 그 코드 블럭이 끝날때까지 이벤트 루프가 기다렸다가 다음에 다른 밑에 있는
*  callstack 이 수행되거나 Task Queue 에 ㅇ있는 작업이 실행된다.
*
* 즉 callstack 에서 수행되어지는 작업은 끝날때 까지 보장된다 .
*
* ----------------------------------------------------------
* |                                                         |
* |                 Web APIs                                |
* |                                                         |
* ----------------------------------------------------------
*
*       ----------------------------------------------------------
*          Request     |  Render  |   Layout  |   Paint
*          Animation   |  Tree    |           |
*           Frame      |          |           |
*       ----------------------------------------------------------
*                               Render
*
*        ----------------------------------------------------------
*            Promise   |     mutation     |
*             Then     |     observer     |
*                      |                  |
*        ----------------------------------------------------------
*                             micro Queue
*
*
*       ----------------------------------------------------------
*            setTimeout   |     click        |
*            callback     |     callback     |
*                         |                  |
*        ----------------------------------------------------------
*                             Task Queue
*
*
*  Task Queue : Web APIs 에서 우리가 등록한 callback 함수를 특정한 이벤트가
*   발생 했을때 즉 지정된 이벤트가 발생했을때 Task Queue 에 넣는다.
*
*   Micro task Queue : Promise에 등록된 callback 즉 Promise가 다 수행이 되고 나면 그다음에 등록한 then 에 등록한 callback
*                       함수, 그리고 mutation observer 라는 웹 APIs 중 한가지가 있는데 거기에 등록된 callback 함수가
*                       Micro task Queue 에 들어온다.
*                       ex) 만약 back-emd 에서 fetch 를 이용해서 데이터를 받아오는 Promise 를 만들었다면
*                       프로미스에 then 이라고 callback 함수를 등록해 놓으면 이 프로미스가 resolve 가 되면 그때 등록된
*                       callback 이 Micro task Queue 에 등록된다.
*
* */