/*
*   웹 APIs 는 브라우저에서 제공하는 API 이기 떄문에
*   브라우저 멀티쓰레딩을 이용해서 조금더 다양한 일들을 동시에 실행가능
*   Ex) fetch를 이용해서 back-end 에서 데이터를 받아옴,
*       setTimeOut 을 이용해서 일정기간의 시간이 지난다음에 등록한 callback 을 호출 하는 등등
*
*       WEB APIS
*           |
*           |
*           |
*           -------> DOM API
*           |
*           |
*           |
*           -------> setTimeOut
* *         |
*           |
*           |
*           -------> fetch
* *         |
*           |
*           |
*           -------> setInterval
* *         |
*           |
*           |
*           -------> eventListener
* */

/*
*   자바스크립트 엔진에는 callstack 이 있는데 이 callstack 에는 순서대로 함수들이 실행하는 것을 담고 있다고 했는데
*   그럼 Web APIs 를 통해 등록한 callback 함수는 어떻게 동작할까????
*   어떻게 자바스크립트 엔진과 Web APIS 는 어떻게 서로 일을하게 되는 걸까?
*
* */

/**
 *                                                 JavaScript Engine
 *
 *                                                                          Call Stack
 *
 *          MemoryHeap                                 |
 *    Data                                             |                setTimeOut() --> 3초뒤 hello 출력 callback 등록
 *                                                     |---------------------------------------------------
 *                          Data                       |                    Second();
 *                                                     |
 *                                                     |
 *                  Data                               |------------------------------------------------
 *                                                     |
 *                       Data                          |
 *                 Data                                |                  fist()
 *                                                     |------------------------------------------------------
 *                                                     |                  main()
 *                      Data                           |
 *                                                     |
 *
 * ------------------------------------------------------------------------------------------------------------
*
*   setTimeOut을 호출하는 순간 callStack 에서 지워지고
 *   웹 APIs 타이머를 실행하게 된다. 이렇게 타이머가 실행되고 있는 동안 타이머와 자바스크립트 엔진은 병렬적으로 실행 되고 있다가
*   지정된 시간이 끝나면 웹 APIs 는 Task Queue 에 "타이머 끝났어" 여기에 너가 등록한 콜백 자체를 태스크 큐에 집어 넣는다
*
*
* ----------------------------------------------------------------------------------
 *                                      |
 *                                      |
 *          timeOut callBack            |
 *                                      |
* ----------------------------------------------------------------------------------
*                               Task Queue
*
* */


/*
*
*       What is Queue???
*       큐도 자료구조 중 하나이다.
*       --> FIFO ( First In First Out) 처음에 들어온 아이가 가장 먼저 나간다.
*       큐의 API 로는 대표적으로 add, remove 가 있다.
*
*
* * ----------------------------------------------------------------------------------
 *                                      |
 *                                      |
 *          1  --> add(1)               |            2 --> add(2)
 *             remove()                 |
* ----------------------------------------------------------------------------------
*
*
*   그래서 이렇게 지정된 setTimeOut이 끝나게 되면
*   즉 setTimeOut을 호출할때 콜백을 등록하는데 그 callback 이 Task Queue 에 들어오게 된다.
*   즉 웹 APis 는 우리가 드옥한 콜백 함수를 원하는떄 지정된 시간에 Task Queue 에 넣어준다
*   그러면 Task Queue 에 들어 있는 callback 은 언제 실행될까?????
*   --> Task Queue 와 callStack 을 관찰하는 EventLoop!!!
*
*
* 이 EventLoop는 계속 빙글 빙글 돌아다니면서 즉 while 이나 for loop 같은 이런 루프를 계속 돌면서
*  callstack 과 Task Queue 를 관찰하면서 callstack 이 아직 업무가 남아있으면 이 callstack이 비워질때 까지 기다린다
*   그랙서 first() 함수가 끝나고 main으로 돌아와서 main()함수가 끝나면
*   즉 callstack 이 비워져 있어서 자바스크립트 엔진이 더이상 일을 하지 않고 있을때 eventLoop에 있는 TaskQueue에 있는 callback 함수를
*  callstack으로 가져온다.
*
*
*                                       |
*                                       |
*                                       |
*                                       |                   EventLoop
*                                       |
* --------------------------------------|                       Task Queue
*             TimeoutCallback           |           ---------------------------------------
*                                       |                   click       |       click
*                                       |                               |
* ---------------------------------------           ---------------------------------------
*
*       그러면 자바스크립트 엔진이 callstack에 들어온 callback을 실행
*   그래서 EventLoop 는 프로시저가 동작하는 동안 계속 빙글 빙글 루프를 돌면서 callstack이 비어져 있다면
*   Task Queue 에 들어있는 아이를 callstack 으로 가져온다
*
*   그래서 자바스크립트로 버튼에 click event를 등록하면 브라우저에서 클릭이 되면 클릭이라는 이벤트가 발생하게 도미ㅕㄴ
*   웹 APIs 는 EventLoop에 우리가 등록한 callback 함수를 Task Queue 안에 넣는다 그리고 setTimeout Callback이 끝나면
*   click callback 을 callstack 으로 옮긴다
*   --> 이때 Task Queue 에 있는 작업은 한개씩 callstack 으로 옮겨 진다.
*
* */