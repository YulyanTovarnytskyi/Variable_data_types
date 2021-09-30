let n
let m

do{
    n = +prompt("Введдіть число N", "");
}
while(!Number.isInteger(n));


do{
    m = +prompt("Введіть число М , більше за N" ,"");

}while(!Number.isInteger(m) || (m < n ));

const evenNumbers = confirm("Пропускати парні числа?", "");

let sum = 0;

if (evenNumbers) {
     for (let i = n; i <= m; i++) {
        if (i % 2 !== 0) {
            sum += i;
        };
    };
} else {
        for (let i = n; i <= m; i++) {
            sum += i;
    };
};
document.writeln(sum);