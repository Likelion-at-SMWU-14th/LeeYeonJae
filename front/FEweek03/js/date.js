// 현재 날짜/시간 출력하기
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

//const formattedDate = `${year}년 ${String(month).padStart(2, "0")}월 ${String(day).padStart(2, "0")}일`;
//const formattedHours = `${String(hours).padStart(2, "0")}시 ${String(minutes).padStart(2, "0")}분 ${String(seconds).padStart(2, "0")}초`;

console.log(`${year}년 ${month}월 ${day}일`);
console.log(`${hours}시 ${minutes}분 ${seconds}초`);
