// [데이터 타입]
// Template literals
let first = "yeonjae";
let last = "lee";

console.log(`My name is ${first} ${last}.
    I'm ${20 + 5} years old.`);


// undefined & null
let likelion;
likelion = "null";

console.log(likelion);


// array (배열)
const daysOfWeek = ['월', '화', '수', '목', '금', '토'];
console.log(daysOfWeek);

daysOfWeek.push('일');
console.log(daysOfWeek);

const firstDay = daysOfWeek[0];
console.log(firstDay);

const lastDay = daysOfWeek[6];
console.log(lastDay);


// object (객체)
const myInfo = {
    name: "이연재",
    age: 25,
    major: "IT Engineering",
    tired: true,
};

console.log(myInfo);

myInfo.tired = false;
myInfo.hungry = true;

console.log(myInfo);


// [연산자 및 조건문]
// 삼항 조건 연산자
let x = 10;

let result = x % 2 ? "홀수입니다." : "짝수입니다.";

console.log(result);


// 조건문 (if...else)
let score1 = 85;

if (score1 >= 90) {
    console.log("A");
} else if (score1 >= 80) {
    console.log("B");
} else {
    console.log("C");
}
