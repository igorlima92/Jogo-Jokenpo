// Seleciona o elemento onde será exibido o resultado das jogadas (Ganhou/Perdeu/Empate)
const result = document.querySelector('.result')

// Seleciona os elementos do HTML onde serão mostrados os pontos do humano e da máquina
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

// Variáveis que armazenam a pontuação atual do jogador humano e da máquina
let humanScoreNumber = 0
let machineScoreNumber = 0

/* 
 -----------------------------------------------------------------------
  FUNÇÃO: playHuman
  - Recebe a escolha do jogador Humano (rock, paper ou scissors)
  - Chama a função principal do jogo enviando:
      1. A escolha do humano
      2. A escolha aleatória da máquina (retornada pela função playMachine)
 -----------------------------------------------------------------------
*/
const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

/* 
 -----------------------------------------------------------------------
  FUNÇÃO: playMachine
  - Define as 3 opções possíveis do jogo
  - Gera um número aleatório entre 0 e 2
  - Retorna a opção correspondente ao número sorteado
  - Ou seja, é aqui que a máquina “escolhe”
 -----------------------------------------------------------------------
*/
const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']  // Lista de opções
    const randomNumber = Math.floor(Math.random() * 3)  // Número aleatório: 0, 1 ou 2

    return choices[randomNumber]  // Retorna a escolha aleatória
}

/* 
 -----------------------------------------------------------------------
  FUNÇÃO PRINCIPAL: playTheGame
  - Recebe a escolha do humano e da máquina
  - Compara as escolhas e determina quem ganhou
  - Atualiza as pontuações na tela
  - Exibe um texto explicando o resultado (ganhou, perdeu ou empatou)
 -----------------------------------------------------------------------
*/
const playTheGame = (human, machine) => {

    // Apenas para fins de depuração (debug). Mostra no console as escolhas
    console.log('Humano: ' + human + " Maquina: " + machine)

    // --- Caso 1: EMPATE ---
    if (human === machine) {
        result.innerHTML = "Deu Empate!"  // Atualiza texto na tela
    } 
    
    // --- Caso 2: JOGADOR GANHOU ---
    else if (
        (human === 'paper' && machine === 'rock') ||        // Papel ganha da Pedra
        (human === 'rock' && machine === 'scissors') ||     // Pedra ganha da Tesoura
        (human === 'scissors' && machine === 'paper')       // Tesoura ganha do Papel
    ) {

        humanScoreNumber++                       // Aumenta 1 ponto para o humano
        humanScore.innerHTML = humanScoreNumber  // Atualiza o placar no HTML
        result.innerHTML = "Você Ganhou!"        // Mensagem de vitória
    } 
    
    // --- Caso 3: JOGADOR PERDEU ---
    else {
        machineScoreNumber++                       // Aumenta 1 ponto para a máquina
        machineScore.innerHTML = machineScoreNumber // Atualiza o placar no HTML
        result.innerHTML = "Você Perdeu!"          // Mensagem de derrota
    }
}
