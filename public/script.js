const botao = document.getElementById(`botao`);
const contador = document.querySelector(`.contador`);
const body = document.querySelector(`body`);

let cont = 0;

const moveHearts = async () => {
    const heart = body.querySelectorAll(".heart");
    
    heart.forEach(x => x.classList.add('move'))
}

botao.addEventListener(`click`, () => {
    cont += 1;
    contador.textContent = `Contador: ${cont}`;

    if (cont % 15 == 0) {
        const heart = body.querySelectorAll(".heart");

        heart.forEach(x => x.remove())

        body.insertAdjacentHTML("beforeend", `<img class="heart topleft" src="/heart.svg"/>`)
        body.insertAdjacentHTML("beforeend", `<img class="heart bottomleft" src="/heart.svg"/>`)
        body.insertAdjacentHTML("beforeend", `<img class="heart topright" src="/heart.svg"/>`)
        body.insertAdjacentHTML("beforeend", `<img class="heart bottomright" src="/heart.svg"/>`)

        setTimeout(moveHearts, 200);
    }
});


