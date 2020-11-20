
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

// function shuffle() {
//     let arr = [
//         'bulbasaur',
//         'charmander',
//         'squirtle',
//     ]

//     let currentIndex = arr.length;

//     while (currentIndex !== 0) {
//         randomIndex = Math.floor(Math.random() * 3);
//         currentIndex--;

//         let tmpValue = arr[currentIndex];
//         arr[currentIndex] = arr[randomIndex];
//         arr[randomIndex] = tmpValue;
//     }

//     return arr
// }

// Array of pokemon player
const pokePlayerImg = document.querySelectorAll('.player-pokemon img');
const pokeCompImg = document.querySelector('.computer-pokemon img');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score')
const info = document.querySelector('.info');

const countScore = {
    player: 0,
    computer: 0,
    count: 10
}

pokePlayerImg.forEach(img => {
    img.addEventListener('click',() => {
        const computerPokemon = randomPokemon();
        // const playerPokemon = shufflePokemon[index];
        const score = result(img.className, computerPokemon);

        // img.src = `/img/${playerPokemon}.png`;
        pokeCompImg.src = `/img/${computerPokemon}.png`

        if (score === 1) {
            countScore.player++;
            info.innerHTML = 'You Win!';
        } else if (score === -1) {
            countScore.computer++;
            info.innerHTML = 'You Lose!'
        } else {
            info.innerHTML = 'Draw!'
        }

        playerScore.innerHTML = countScore.player;
        computerScore.innerHTML = countScore.computer;

        setTimeout(() => {
            pokeCompImg.src = `/img/pokeball.png`;
        }, 1200)
    })
})

document.querySelector('.button').onclick = () => {
    countScore.player = 0;
    countScore.computer = 0;
    countScore.count = 10;
    playerScore.innerHTML = countScore.player;
    computerScore.innerHTML = countScore.computer;
    // pokePlayerImg.forEach(img => img.src = `/img/pokeball.png`)
    document.querySelector('.info').innerHTML = '____'
    // shufflePokemon = shuffle();
}

