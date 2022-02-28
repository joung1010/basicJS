
// Q1. make a string out of an array
{   // join : 배열에 있는 모든 요소들을 전달된 구분자값으로 String으로 변환(default 구분자는 ,)
    const fruits = ['apple', 'banana', 'orange'];
    let result = fruits.join();
    console.log(result);
}

// Q2. make an array out of a string
{
    //split 파라미터로 구분자(String 정규식), 반환되는 길이(필수x)값을 받아서 해당 문자열을 지정된 구분자로 구분해서 배열로 반환한다.
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',',2);
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    //reverse : 배열안의 순서를 거꾸로 만들어준다.
    // 단 전달된 배열 자체도 순서가 바뀐다!
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(array);
}

// Q4. make new array without the first two elements
{
    //splice : 배열 자체에서 데이터를 삭제 (내가 원하는 위치에서 원하는 갯수만큼 삭제) -> return값으로는 삭제된 배열을 return
    // 즉 새로운 배열을 만드는 것은 아님 기존 배열을 지우기 때문에
    /*
    * const result = array.splice(2);
    * *console.log(result);
    * console.log(array); 원본 배열이 변동됨
    * */

    //slice 사용: 배열에 특정한부분을 return한다 이때 파라미터로 start, end(end로 지정된 인덱스는 그범위에 포함되지 않는다)로
    // 기존 배열에서 어떤 부분을 새로운 배열로 return받을지 지정한다.
   const array = [1, 2, 3, 4, 5];
    const result = array.slice(2);
    console.log(result);
    console.log(array); //기존 원본 배열은 변화하지 않는다.
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    //find : 콜백함수(this, value, index, obj) 배열안에 첫번째로 찾아진 요소를 return(전달된 callback 함수가 true일때) 찾지 못하면 undefined 를 return
    const result = students.find((student) => student.score === 90);
    console.log(result);
    // find vs filter
    //find함수는 주어진 콜백함수가 true인 첫번째 요소만 return(만약 배열의 첫번째가 true이면 뒤에 요소들은 검사하지 않음)
    //filter 함수는 주어진 callback함수가 true인 모든 요소를 모아서 배열로 return
}

// Q6. make an array of enrolled students
{

    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    //map : 배열안에 있는 요소들을 모두 다른 것으로 변환해주는 것 -> 각 요소들 마다 callback함수를 거쳐서 다시 새로운 것으로 반환하는 것
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    // some callback함수가 return이 true가 되는 요소가 있는지 없는지를 확인(하나라도 있으면 true)
    const result = students.some((student) => student.score <50);
    console.log(result);

    // 배열의 모든 요소가 콜백함수의 조건을 모두 true로 return하면 true 아니면 false
    const result2 = students.every((student) => student.score <50);
    console.log(result2);
}
console.clear();
// Q9. compute students' average score
{   //reduce
    // callback(return 값을 누적해서 전달) return 값이 콜백함수의 이전값으로 전달된다.
    // , initalValue
    const result = students.reduce((prev,curr)=>{return prev + curr.score},0);
    console.log(result);
    const average = result/students.length;
    console.log(average);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
        .map((student) => student.score)
        .filter((scroe) => scroe>=50)
        .join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    // sort callback 함수로 이전값과 현재값을 받고 a-b인 값이 음수가되면 첫번째가 그다음값보다 작다고 간주되고 정렬이된다.
    const result = students
        .map((student) => student.score)
        .sort((a,b) => a-b)
        .join();
    console.log(result);
}

