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

// 음료 출력 함수
function buyRandomDrink() {
    const randomDrink = getRandomDrink();

    if (randomDrink.price <= money) {
        money -= randomDrink.price;

        console.log(`${randomDrink.name} 음료가 나왔어요! (가격: ${randomDrink.price}원)`);
        console.log(`지갑에 남은 돈: ${money}원`);
    } else {
        console.log("돈이 부족해요! 음료를 살 수 없어요!");
    }
}

// 3번 반복
for (let i = 0; i < 3; i++) {
    console.log(`[${i + 1}번째 시도]`);
    buyRandomDrink();
}
