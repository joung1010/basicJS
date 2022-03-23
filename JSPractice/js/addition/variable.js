//1.number ,string ,boolean, null, undefined, symbol

// 자바스크립트에서 변수를 만들때는 이 let 이라는 키워드를 사용
// 이렇게 우리가 선언한 number라는 변수에 2라는 값을 할당
// 변수에 이름은 우리가 원하는데로 정의가 가능

// 변수에 담을 수 있는 가장 작은 단위의 데이터 타입을 primitive 데이터 타입이라고 한다.
// number ,string ,boolean, null, undefined, symbol
let number = 2;
let num ='2' ;
// 이 변수는 우리가 원하는데로 이름을 지정할 수 있는데 이렇게 숫자 2라고하면 그냥 숫자라는 것은 의미가 없다.
//그래서 우리가 프로그래밍을 할때 로직과 연관된 조금더 의미있는 이름을 지정하는게 좋다
let age =3;
// 그래서 변수 이름을 이렇게 age라고 하면 어떤 나이의 정보를 담고 있다고 쉽게 추측이 가능하다.

// 또다른 포인트는 이렇게 작은단위의 데이터는 변수에 선언하는 동시에
// 메모리에 변수를위한 공간이 생긴다.  number , num, age
// 또한 이변수에 값을 할당하게 되면면 그 변수를위해 생긴 공간에 해당 값들이 적재되어진다.

let number2 = 2;
let number3 = number2;
// 위에 같은 경우 새로운 변수 number3을 선언했기때문에 number3을 위한 공간이 새로 생기고
// 그 변수에 number2라는 변수를 할당하게되면 실제 number2의 공간에 들어있는 해당 데이터를 그대로 복사해서 number3에 할당한다.
console.log(number2);   // 2
console.log(number3);   // 2

number3 = 3;
// number3가 들어있는 변수에 있는 메모리 공간에 숫자 2를 숫자 3으로 업데이트 한다.
console.log(number2);   // 2
console.log(number3);   // 3
// number2에 있는 데이터를 그대로 복사해서 number3에 저장했기때문에 number3의 값을 변경한다고 해도 number2에는 영향을 주지 않는다.
// call stack

//여기 기본 데이터 타입을 제외한 나머지는 전부 object이다
//  object : 최소한 한 두가지의 데이터를 한군데다 묶어 놓은 것
//  -> 배열, list , 함수 .....
// object는 적어도 한 두가지 이상의 큰 데이터가 들어 있기때문에 우리가 선언해둔 변수의 공간간 다 담아 놓을 수 없다.why?? 데이터가 너무 크다 뚱뚱하다
// 그래서 obejct는 그들만의 공간에 있다 (Memory Heap)


//2. Object
let obj = {
    name : 'mason',
    age: 5
};// === new Object();
// 이렇게 객체를 생성하면 메모리에는 어떤일이 발생할까???
// 결국은 object에 있는 key도 각각 key마다 메모리가 할당이된다고 생각
// 즉 name이라는 key에 할당된 공간에 mason란 값이 age라는 key에 할당된 공간에 5라는 값이 들어있다.
// 이 키들과 그 값이 할당된 공간을 하나로 묶어서 이곳을 나타낼 수 있는 마치 집마다 주소가 있고 사람마다 주민등록번호가 있듯이
//  이 key 와 value들의 묶어져있는 위치를 나타내는 reference가 있다.
// 즉 우리가 선언한 객체의 정보가 123이라는 메모리 주소에 있다면 이 obj라는 변수에 할당된 공간에는 123이라는 reference(주소값)이 들어와 있다.
obj.name;
// -> obj의 공간에 할당된 reference 123이 가리키는 곳에 name이라는 변수의 값(mason)을 찾고있구나
console.log(obj.name); // mason

let obj2 = obj;
// obj2라는 변수에 새로운 메모리 공간이 생기고 그공간에 obj를 할당할건데 그 obj에는 무언가를 가리키는 주소 reference가 들어있다.
// 즉 어떤 변수에 다른 변수를 할당하면 그 할당되는 변수안에 들어있는 값이 복사 되어서 들어온다.
// -> obj가 가지고있는 주소 123이 그대로 복사가 되서 obj2에 할당이 된다.
console.log(obj2.name);
// 그래서 obj2.name을 출력하게되면 결국은 obj안에 들어 있는 123의 주소를 이용해서 name변수의 값을 출력한다.
// 그래서 동일하게 mason의 값이 출력된다.

obj.name = 'james';
// obj가 가리키는 주소 123에 가서 name에 가서 그값을 james로 변경하게 되면
console.log('--------');
console.log(obj.name);  //james
console.log(obj2.name); //james
// obj와 obj2의 name이 모두 james로 변경된 것을 볼 수 있다.
// 즉 obj와 obj2 가 가리키고 있는 object는 동일하기 때문에 이렇게 어떤 곳을 통해서 이름을 업데이트 해도 둘다 변경된다.

const numb =2;
//numb =3; 에러 발생
//여기서 let은 선언후에 추후 값을 변경할 수 있는데 const라는 상수변수는 한 번 선언하고 나면 절대로 변경이 불가능 합니다.
// const로 정의를 한 번 하게되면 절대로 그 값은 변경이 불가능 하다.

//그럼 const로 객체를 선언했는데 왜 값이 변경이 가능한가???
const obj3 = {
    name : 'mason',
    age: 5
};

obj3.name = 'ken';
// obj3 에는 해당객체가 선언된 주소값이 할당되어져있고
// obj3.name은 이할당된 주소값이 가리크는곳에 name이라는 변수에 담겨지 있는 값을 변경한 것이지 obj3에 할당된 주소 값 자체를 변경한것이 아니다.