let batu= document.getElementById("playerBatu")
let val = batu.getAttribute("value")
let choices = ["batu", "kertas", "gunting"]


class Game{
    constructor(playerChoice){
        this.playerChoice=playerChoice
        this.computer=choices[Math.floor(Math.random()*3)]
    }
    suit(){
        if(this.playerChoice== "batu"){
            console.log("Menang")
            console.log(this.computer)
        }
    }

}
let game= new Game(val)

game.suit()