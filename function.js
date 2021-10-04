//Функція 1. Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8
const getMaxDigit = (n) => +Math.max(...(n + '').split(''));
console.log(getMaxDigit(132432452634563))



//Функція 2. Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл
const getDg = (n, d) => {
    let r = n;
    for (let i = 1; i < d; i++) {
        r *= n;
    }
    return r;
}
console.log(getDg(3,5));


//Функція 3. Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
const getName = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}
console.log(getName('Влад'));



//Функція 4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805
const getSum = (p) => {
    return p - (p * 19.5 / 100) ;
}
console.log(getSum(1000));

//Функція 5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5
const getRandom = (n, m) => {
    return Math.floor(Math.random() * (m - n)) + n
}
console.log(getRandom(1,10));

//Функція 6. Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4
const countLetter = (s, str) => {
    
    return str.split(s).length -1;
   
}
console.log(countLetter('а','Асталавіста'));