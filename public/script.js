const botao = document.getElementById(`botao`);
const contador = document.querySelector(`.contador`);
const body = document.querySelector(`body`);

let cont = 0;

botao.addEventListener(`click`, () => {
    cont += 1;
    contador.textContent = `Contador: ${cont}`;

    // if (cont > 10) {
    //     body.style.transform = `rotate(2turn)`;
    // }
});