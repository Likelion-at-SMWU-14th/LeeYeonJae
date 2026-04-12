console.log("JS로 랜덤 자판기 만들기");

// 음료 리스트
const drinks = [
    { name: "🍎apple", price: 5000 },
    { name: "🍊orange", price: 5500 },
    { name: "🍇grape", price: 6000 },
    { name: "🥝kiwi", price: 6500 },
    { name: "🍓strawberry", price: 7000 },
    { name: "🍋lemon", price: 7500 },
    { name: "🫐blueberry", price: 8000 },
];

// 지갑 금액
let money = 7000;

// 음료 1개 랜덤 선택
function getRandomDrink() {
    return drinks[Math.floor(Math.random() * drinks.length)];
}
