const vs_div = document.getElementById("vsAction");
const refresh_div = document.getElementById("refreshAction");
const result_div = document.querySelector(".result");
const playerGreyBox_div = document.querySelector(".greyBox-js.playerGrey")
const comGreyBox_div = document.querySelector(".greyBox-js.comGrey")
const batu_div = document.getElementById("batu");
const kertas_div = document.getElementById("kertas");
const gunting_div = document.getElementById("gunting");
const comBatu_div = document.getElementById("comBatu");
const comKertas_div = document.getElementById("comKertas");
const comGunting_div = document.getElementById("comGunting");

function getComputerChoice() {
    const choices = ["batu", "kertas", "gunting"]
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function main() {
    batu_div.addEventListener('click', function () {
        game("batu")
    })

    kertas_div.addEventListener('click', function () {
        game("kertas")
    })

    gunting_div.addEventListener('click', function () {
        game("gunting")
    })
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "batugunting":
        case "kertasbatu":
        case "guntingkertas":
            win();
            break;
        case "batukertas":
        case "kertasgunting":
        case "guntingbatu":
            lose();
            break;
        case "batubatu":
        case "kertaskertas":
        case "guntinggunting":
            draw();
            break;
    }
}

function win() {
    vs_div.innerHTML = "PLAYER 1 WIN".fontsize(38);
}

function lose() {
    vs_div.innerHTML = "COM WIN".fontsize(38);

}

function draw() {
    vs_div.innerHTML = "DRAW".fontsize(38);

}

main()