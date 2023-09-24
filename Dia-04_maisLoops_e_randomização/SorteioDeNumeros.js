function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
let i = 0;
while (i <= 1) {
    const perguntar = prompt("Tente adivinhar o numero de 0 a 10 do sortei em duas tentativas, qual valor você deseja chutar ?");
    if (perguntar == getRandomArbitrary) {
        console.log("Você adivinhou o numero sorteado !!!");
        i = i + 2;
    } else {
        console.log("você não adivinhou, você tem mais uma tentativa!");
        i = i + 1;
    }
}
console.log(getRandomArbitrary(0, 10));