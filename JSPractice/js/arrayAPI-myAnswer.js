// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    console.log(fruits.toString());
}


// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const furitarray = fruits.split(',');
    console.log(furitarray);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    console.log(array.reverse());
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const splice = array.splice(2);
    console.log(splice);
    console.log(array);
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
    const goodStudent = students.filter((student) => student.score >= 90);
    console.log(goodStudent);

}

// Q6. make an array of enrolled students
{
    const enrolledStduent = students.filter((studnet) => studnet.enrolled === true);
    console.log(enrolledStduent);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const rtnList = [];
    students.forEach((studnet, index) => rtnList[index] = studnet.score);
    console.log(rtnList);
}

// Q8. check if there is a student with the score lower than 50
{
    const lowerStduent = students.filter((student) => student.score < 50);
    console.log(lowerStduent);
}

// Q9. compute students' average score
{
  const total = students.reduce((curr, student) => {
     let total = curr + student.score;
      return total;
  },0);
const average = total / students.length;
    console.log(average);

}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const scoreArray = students.reduce((acc, student) => {
        acc.push(student.score);
        return acc;
    },[] );
    console.log(scoreArray);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    let string = students.reduce((acc, student,index)=>{
        if (index === students.length - 1) {
            return acc += student.score;
        }
        return acc += student.score+',';
    },'');
    console.log(string);
}






