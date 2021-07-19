let isReady = true;
let playerScore = 0;
let comScore = 0;

const [
    playerScore_span,
    comScore_span,
    vs_div,
    refresh_div,
    playerGreyBox_div,
    comGreyBox_div,
    batu_div,
    kertas_div, 
    gunting_div,
    batu2_div,
    kertas2_div, 
    gunting2_div,
    ] = [
    document.getElementById("playerScore"),
    document.getElementById("comScore"),
    document.getElementById("vsAction"),
    document.getElementById("refreshAction"),
    document.querySelector(".greyBox-js.playerGrey"),
    document.querySelector(".greyBox-js.comGrey"),
    document.getElementById("batu"),
    document.getElementById("kertas"),
    document.getElementById("gunting"),
    document.getElementById("batu2"),
    document.getElementById("kertas2"),
    document.getElementById("gunting2"),
]


function getComputerChoice() {
    const choices = ["batu", "kertas", "gunting"]
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function main() {
    batu_div.addEventListener('click', function () {
        game("batu")
        isReady = false
    })

    kertas_div.addEventListener('click', function () {
        game("kertas")
        isReady = false
    })

    gunting_div.addEventListener('click', function () {
        game("gunting")
        isReady = false
    })
    refresh_div.addEventListener('click', function (){
        reload()
        isReady = true
    })
    
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    if(isReady) {
        switch (userChoice + computerChoice) {
            case "batugunting":
            case "kertasbatu":
            case "guntingkertas":
                win(userChoice, computerChoice);
                break;
            case "batukertas":
            case "kertasgunting":
            case "guntingbatu":
                lose(userChoice, computerChoice);
                break;
            case "batubatu":
            case "kertaskertas":
            case "guntinggunting":
                draw(userChoice, computerChoice);
                break;
        }    
    }
    else {
        alert("Reload dl coi")
    }
}

function win(userChoice, computerChoice) {
    vs_div.innerHTML = "PLAYER 1 WIN".fontsize(38);
    vs_div.classList.add("winlosebackground-js");
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    comScore_span.innerHTML = comScore;
    document.getElementById(userChoice).classList.add("greyBox-js");
    document.getElementById(computerChoice+"2").classList.add("greyBox-js");
}

function lose(userChoice, computerChoice) {
    vs_div.innerHTML = "COM WIN".fontsize(38);
    vs_div.classList.add("winlosebackground-js");
    comScore++;
    playerScore_span.innerHTML = playerScore;
    comScore_span.innerHTML = comScore;
    document.getElementById(userChoice).classList.add("greyBox-js");
    document.getElementById(computerChoice+"2").classList.add("greyBox-js");

}

function draw(userChoice, computerChoice) {
    vs_div.innerHTML = "DRAW".fontsize(38);
    vs_div.classList.add("winlosebackground-js");
    document.getElementById(userChoice).classList.add("greyBox-js");
    document.getElementById(computerChoice+"2").classList.add("greyBox-js");
}

function reload() {
    batu_div.classList.remove("greyBox-js");
    kertas_div.classList.remove("greyBox-js");
    gunting_div.classList.remove("greyBox-js");
    batu2_div.classList.remove("greyBox-js");
    kertas2_div.classList.remove("greyBox-js");
    gunting2_div.classList.remove("greyBox-js");
    // location.reload()
}

main()