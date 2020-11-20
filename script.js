
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

function randomizeImg() {
    const pokemon = ['bulbasaur', 'charmander', 'squirtle'];
    let imgC = document.querySelector('.computer-pokemon img');
    let index = 0;
    let currentTime = new Date().getTime();
    let interval = setInterval(() => {
        if (new Date().getTime() - currentTime > 950) {
            clearInterval(interval);
        }

        imgC.src = `/img/${pokemon[index]}.png`
        index == pokemon.length - 1 ? index = 0 : index++ 
    }, 100);
}

// Array of pokemon player
const pokePlayerImg = document.querySelectorAll('.player-pokemon img');
const pokeCompImg = document.querySelector('.computer-pokemon img');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score')
const info = document.querySelector('.info');

const countScore = {
    player: 0,
    computer: 0,
}

pokePlayerImg.forEach(img => {
    img.addEventListener('click',() => {
        const computerPokemon = randomPokemon();
        const score = result(img.className, computerPokemon);
 
        randomizeImg();
        
        setTimeout(() => {
            pokeCompImg.src = `/img/${computerPokemon}.png`;

            if (score === 1) {
                countScore.player++;
                info.innerHTML = 'You Win!';
            } else if (score === -1) {
                countScore.computer++;
                info.innerHTML = 'You Lose!'
            } else {
                info.innerHTML = 'Draw!'
            }            
        }, 1000);

        playerScore.innerHTML = countScore.player;
        computerScore.innerHTML = countScore.computer;

        // setTimeout(() => {
        //     pokeCompImg.src = `/img/pokeball.png`;
        // }, 1200)
    })
})

document.querySelector('.button').onclick = () => {
    countScore.player = 0;
    countScore.computer = 0;
    countScore.count = 10;
    playerScore.innerHTML = countScore.player;
    computerScore.innerHTML = countScore.computer;
    pokeCompImg.src = `/img/pokeball.png`
    document.querySelector('.info').innerHTML = '____'
}

