class Counter {
    constructor() {
        this.counter = 0;
    }

    increase(runIf5Times) {
        this.counter ++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            //console.log('wow~')
            // 함수내에 해당 조건이 있으면 우리가 이것에 대해서 컨트롤할 수 없다.
            // 만약내가 wow~를 다른것으로 바꾸고싶어도 그렇게할 수 없다는 문제점이 있다.
            // 아니면 콜백함수를 전달하자
            runIf5Times(this.counter);
        }
    }
}
// Counter 라는 class 에는 자체적으로 counter라는 변수가 있고 이 counter 변수는 이 Counter class를 이용해서 object를 만드는 순간 0으로 초기화 된다.
// class 안에서 함수를 선언할때는 function이라는 키워드를 생략해도 된다.
// class는 다양한 object를 만들기 위한 청사진이다.

const coolCounter = new Counter();
// new 라는 키워드를 통해서 class를 만들게 되면 constructor 함수가 실행이 되는데 이제 this.counter = 0 으로 초기화

function printSomething(num) {
    console.log(`wow~ ${num}`);
}
function alertSomething(num) {
    alert(`wow~ ${num}`);
}
/*coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);

coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(alertSomething);*/
// 장점은 이제 우리가 조절할 수 있다. 콜백함수를 전달함으로써 우리가 원하는 기능을 수행할 수 있다.
// 즉 class Counter라는 거 자체는 숫자가 5배가 될 때마 어떤 동작을 하는지는 다체적으로 결정되어 있지는 않다
// 그래서 사용하는 사람이 이런 기능을 전달 하게 되면 그 기능을 수행하게 된다.
// 여기서 문제점은 이 increase라는 함수를 호출할때마다 콜백함수를 계속 전달해 줘야한다.


class Counter2{
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback =runEveryFiveTimes;
        // 우리가 전달한 콜백함수를 기억하기위해서 callback 변수에 인자로 전달받은 콜백함수를 할당한다.
    }

    increase() {
        this.counter++;
        if(this.counter % 5 === 0) {
            //this.callback(this.counter);
            // 이때 만약 object를 생성할떄 callback 함수를 전달하지 않으면 타입 오류가 발생
         /*   if (this.callback) {
                this.callback(this.counter);
            }*/
            this.callback && this.callback(this.counter);
        }
    }
}
// 그래서 보통은 이런 식으로 함수를 전달할 때마다 하지 않고 constructor에서 콜백함수를 받는다.
const printCounter = new Counter2(printSomething);
const alertCounter = new Counter2(alertSomething);
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();

// 포인트: class를 하나 완전히 다 만들어진 완전체로 만들기 보다는 우리가 레고로 원하는 것을 조립해서 만들 수 있는 것처럼
//          우리가 원하는 기능을 끼워 맞춰서 재조립이 가능하도록 만드는 것이 좋다다