function randomPokemon() {
    let randomNumber = Math.random()

    if (randomNumber >= 0.66) return 'charmander';
    return randomNumber >= 0.33 ? 'squirtle' : 'bulbasaur';
}

function result(player, computer) {
    if (player == computer) return 0;
    if (player == 'charmander') return computer == 'bulbasaur' ? 1 : -1;
    if (player == 'squirtle') return computer == 'charmander' ? 1 : -1;
    return computer == 'squirtle' ? 1 : -1;   
}

const countScore = {
    player: 0,
    computer: 0
}

document.querySelectorAll('.player-pokemon img').forEach(playerPokemon => {
    playerPokemon.onclick = () => {
        const pComputer = randomPokemon();
        const score = result(playerPokemon.className, pComputer);
        document.querySelector('.computer-img').src = `/img/${pComputer}.png`

        const info = document.querySelector('.info');

        if (score === 1) {
            countScore.player += 3;
            countScore.computer -= 1;
            info.innerHTML = 'You Win!';
        } else if (score === -1) {
            countScore.player -= 1;
            countScore.computer += 3;
            info.innerHTML = 'You Lose!'
        } else {
            info.innerHTML = 'Draw!'
        }

        document.querySelector('.player-score').innerHTML = countScore.player;
        document.querySelector('.computer-score').innerHTML = countScore.computer;
    }
})

document.querySelector('.button').onclick = () => {
    countScore.player = 0;
    countScore.computer = 0;
    document.querySelector('.player-score').innerHTML = countScore.player;
    document.querySelector('.computer-score').innerHTML = countScore.computer;
    document.querySelector('.computer-img').src = `/img/pokeball.png`;
    document.querySelector('.info').innerHTML = '____'
}