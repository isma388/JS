// you can write js here
console.log('exo-3');

const playerInput = prompt("your choice (rock / paper / scissors) ?");

function getPlayerChoice(playerInput){
    const player = playerInput.toLowerCase();
    if ('rock' === player || 'paper' === player || 'scissors' === player) { // rock ou paper ou scissors
      console.log(player)
  }else{
      console.log(`error detected`);
  }
}

function getComputerChoice(){
    let random = Math.floor(Math.floor()*3);
    if (random === 0){
        return('rock');
    }else if (random === 1){
        return ('paper');
    }else if (random === 2){
        return ('scissors');
    }
}

function findWinner(playerChoice,computerChoice){

    if (playerChoice === computerChoice){
        return('Tied');
    }
    if (playerChoice === 'rock'){
        if (computerChoice === 'scissors'){
            return('Won');
        }
        return ("Lost");
    }
    if (playerChoice === 'paper'){
        if (computerChoice === 'scissors'){
            return('Lost');
        }
        return ("Won");
    }
    if (playerChoice === 'scissors'){
        if (computerChoice === 'paper'){
            return('Won')
        }
        return ("Lost")
    }
}

function playGame(){
    const uChoice = getPlayerChoice(playerInput);
    const computerChoice = getComputerChoice();
    const resultat = findWinner(uChoice, computerChoice);
    console.log(uChoice);
    console.log(computerChoice);
    return resultat;
}
console.log(playGame());