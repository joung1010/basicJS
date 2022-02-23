'use strict';

//class : template (틀)
//object : instance of a class (데이터를 실제 넣어서 만듬)
//JS에서는 클레스가 ES6부터 추가 되었다 기존에 prototype-base에서 문법만 추가된 형식(Syntactical sugar)

//1. Class declaration

class Person{
    constructor(name,age) {
        //files
        this.name =name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name}: hello!`)
    }
}

const mason = new Person('mason', 20);
console.log(mason.name);
console.log(mason.age);
mason.speak();


 //2. Getter Setter

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age =age;
    }

    get age() {
        return  this._age;
    }

    set age(value) {
        /*if (age > 0) {
            throw Error('나이가 어떻게 음수니 친구야!')
        }*/
        this._age = value <0 ? 0 : value;
    }

}

const user1 =new User('Steve','job', -1);
console.log(user1.age);

// feild는 _age 인데 실제 age를 호출할 수 있는 이유는 내부적으로 get 과 set함수를 이용하기 때문이다.
//즉 this.age 의 변수는 get 함수를 호출하고 실제 = age를 메모리에 할당할때 set함수를 이용하기 때문이다.

//3. public private
class Test{
    publicField =3; //생성자 없이 그냥 필드 선언시 public
    #privateField = 0; // # 기호 붙이면 private
}
const test = new Test();
console.log(test.publicField);
console.log(test.privateField);

//4. static

class Article {
    static publisher = 'mason';
    constructor(articleNum) {
        this.articleNum  = articleNum;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const a1 = new Article(1);
const a2 = new Article(2);

console.log(a1.publisher); // undefined -> a1의 객체 안에는 publisher가 정의 되어있지  않다
console.log(Article.publisher);
// 즉 static 키워드가 붙은 친구들은 객체에 정의된것이 아닌 클래스 자체에 정의되어져 있는 친구들이다.

//상속 다양성

class Shape {
    constructor(width,height,color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){console.log(`drawing ${this.color} color`)}
    getArea(){return this.width * this.height;}
}

class Rectangle extends Shape{} // extends 상속 키워드
class Triangle extends  Shape{
    draw() {
        super.draw();  //super 부모 클래스 호출
        console.log('삼각형이요')
    }

    getArea() {
        return (this.width*this.height) /2 ; //오버 라이딩 : 부모 클래스 함수 재정의
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());

console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString() );






