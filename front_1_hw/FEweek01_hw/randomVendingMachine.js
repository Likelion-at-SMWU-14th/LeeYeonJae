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

// 음료 랜덤 선택
function getRandomDrink() {
    return drinks[Math.floor(Math.random() * drinks.length)];
}

// 출력 문자열 반환
function getResult(drink, canBuy) {
    if (canBuy) {
        return `${drink.name} 음료가 나왔어요! (가격: ${drink.price}원)\n지갑에 남은 돈: ${money}원`;
    } else {
        return `돈이 부족해요! 음료를 살 수 없어요!`;
    }

}

// 음료 출력 함수
function buyDrink() {
    for (let i = 0; i < 3; i++) {
        console.log(`\n[${i + 1}번째 시도]`);

        const drink = getRandomDrink();

        if (drink.price <= money) {
            money -= drink.price;
            console.log(getResult(drink, true));
        } else {
            console.log(getResult(drink, false));
        }
    }
}

// 호출
buyDrink();
