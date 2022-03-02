'use strict';

// Promise is a JS Object for asynchronous operation (비동기를 수행할때 사용)
// 확인점
//1. state 삳태를 확인(성공 했지는 실패했는지)
//2. producer (원하는 정보를 재공), consumer (재공받은 정보를 사용) 두 차이를 이해하면서 사용

//State : 프로미스가 만들어져서 우리가 원하는 로직이 수행 중일때 (pending)
// -> 성공적으로 수행(fulfilled) vs 실패(rejected)
//producer: 우리가 원하는 로직을 수행해서 해당하는 데이터를 만들어냄
//consumer: 만들어낸 데이터를 소비

