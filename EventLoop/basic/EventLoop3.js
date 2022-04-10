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
*       --------------------
*       callback | callback
*       --------------------
*       ----------------------------------------------------------
*          Request           |  Render  |   Layout  |   Paint
*          Animation        |  Tree    |           |
*           Frame           |          |           |
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
*
*   Render : 주기적으로 브라우저에서 우리가 요소를 움직이고 애니메이션을 할때 주기적으로 브라우저에 업데이트해 줘야하는데
*           그때 화면에 주기적으로 업데이트 해준다.
*
*   +) Request Animation Frame (Web API) : 이 API를 통해서 callback 을 등록해 놓으면 다음에 브라우저가 업데이트 되기전에
*                                          내가 callback 을 먼저 실행해줘라는 API
*                                           그때 우리가 호출하는 callback은 이 Request Animation Frame Queue 에 차곡 차곡
*                                               쌓인다.
*           -->  브라우저에서 우리가 변형한 코드를 주기적으로 업데이트 되기 위해서 주기적으로 호출되는 순서인데 그전에 우리가
*                 Request Animation Frame 이라는 API를 부르면 그 때 등록된 callback은 이 Request Animation Frame 큐에 차곡차곡 쌓인다.
*
*
* 그러면 브라우저는 어떻게 Render, Microtask Queue, Task Queue 를 동시에 순서적으로 잘 실행하는 걸까???? 어떻게 이렇게 많은 것들을 처리할 수 있을까???
*
*
*   1. Event Loop 는 구현상을 보면 while(true) 같은 아이를 이용해서 계속해서 실행되는 루프이다. 그래서 평소에 계속 빙글빙글 돌다가 callstack 에 무언가가 있다면
*   즉 callstack 에 실행중인 함수가 있다면 callstack 이 끝날때까지 머물러 있다가 즉 callstack 에 함수가 끝날때까지 꼼짝도 하지 않고 callstack에서 기다리고 있는다.
*   그래서 굉장히 긴 시간이 걸리는 작업을 하면 사용자에게 더이상 화면이 업데이트 되어져 보이지 않는다. 그러면 다른 클릭이 발생해도 그 클릭에 등록한 callback 함수가 실행되지 않는다.
*   왜냐 이벤트 루프가 callstack 에 계속 머물러 있기 때문이다.
*
*   2.그래서 callstack에 있는 함수가 종료되면 그때서야  빙글빙글 다시 돌기 시작한다. 여기 Render 쪽으로는 갈 수 도 있고 안갈 수도 있다.
*   이말은 즉 브라우저에서는 우리가 업데이트 하는 내용들을 사용자에게 60 frames per seconds 즉 1초당 60개의 프레임을 보여주도록 노력한다
*  ex) 종이에 그림을 그리고 빠르게 넘기면 그 그림이 움직이는 것처럼 보인다. 이런 원리를 이용해서 사람눈에 애니메이션이 자연스러워 보이기 위해서는
*       1초당 60개의 그림이 필요하다. 즉 사용자의 눈에 애니메이션이 자연스러워 보이기 위해서는 1초당 60개의 프레임을 보여줘야한다.
*
*   그렇게 하기위해서는 16.7ms 동안 업데이트가 일어나야 한다는 뜻인데 참고로 Event Loop가 한바퀴 도는 시간은 1ms 가 걸리지 않는다.
* 그래서 매번 Render를 업데이트 할 필요가 없다. 그래서 어느정도 시간이 있다가 즉 16.7ms 범주 안에서 한번씩 업데이트 해준다
*
* 3. 그 다음에 Microtask Queue 에 가서 이 Queue 가 텅빌때까지 기다렸다가 즉 하나 하나 callstack으로 가지고 간다. 이때 다른 callback 이
*       Microtask Queue 로 들어오면 그 callback까지 수행하고 Queue 가 완전히 텅빌때 까지 수행을 계속한다.
*
* 4. 텅 비면 다시 Event Loop 는 순회를  재개한다. Task Queue 로 넘어와서 작업을 수행한다. 이때 한번에 딱 한가지의 callback 함수만 callstack 으로 가지고 와서 수행하고
*    다시 Render 로가서 Render를 업데이트 한다 이때 Request Animation Queue에 callback 이 존재하면  그 콜백을 전부 수행하고 RenderTree를 업데이트하고 Layout을 통해 요소의 위치 크기를 계산하고 paint한다 이 작업이 끝나면 다시 순회한다.
*
*       +) 만약 Task Queue 에 3개의 콜백 이 있다면
*       callstack 작업 수행 --> Render 들릴 수도 안들리 수 도 있음 --> Micro Task Queue 텅빌때까지 수행 --> Task Queue callback 하나 callstack으로 이동 (2개남음)
*       --> Render 들릴 수도 안들리 수 도 있음 --> Micro Task Queue 텅빌때까지 수행 --> Task Queue callback 하나 callstack으로 이동 (1개남음) ... 이런식으로 수행한다.
*
*
* */