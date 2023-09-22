let escolha = prompt("Você deseja seguir área de front-end ou de back-end??");
let area = "";
if (escolha == 'front-end') {
    area = prompt("você deseja aprender React ou Vue?");
}
else if (escolha == 'back-end') {
    area = prompt("você deseja aprender c# ou java?");
}
else {
    alert("você inseriu uma resposta invalida");
}

const especializacao = prompt(`"escolha entre seguir se especializar em ${area} ou seguir se desenvolvendo para se tornar Fullstack,
 Digite '1' para ${area} e '2' para Fullstack"`);
if (especializacao === '1') {
    alert(`"Continue estudando as matérias focadas em ${area} e comece a estudar matérias da area que não escolheu também"`);
}
else if (especializacao === '2') {
    alert(`"Continue estudando as matérias focadas em ${area}"`);
}

const msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.")
while (msg === 'ok') {
    let tecnologia = prompt("quais são as tecnologias nas quais gostaria de se especializar ou de conhecer?");
    alert(`"${tecnologia} é uma otima liguagem para estudar"`);
}

