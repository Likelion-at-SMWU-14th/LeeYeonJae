// currentTime 출력 구현
const timePrint = document.getElementById("time");

function currentTime() {
    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");

    const ampm = hours >= 12 ? "오후" : "오전";

    hours = hours % 12 || 12; // 12시간제로 변환

    timePrint.textContent = `${year}. ${month}. ${day}. ${ampm} ${hours}:${minutes}`;
}

currentTime();
setInterval(currentTime, 1000);
