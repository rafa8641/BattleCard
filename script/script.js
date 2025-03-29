const card1 ={
    nome:"Teste1",
    atributos: {
       Força: 100,
       Magia: 50,
       Constituicao: 10,
       Destreza: 60,
       Inteligencia: 20,
       Carisma: 100
    } 
}

const card2 ={
    nome:"Teste2",
    atributos: {
       Força: 20,
       Magia: 70,
       Constituicao: 50,
       Destreza: 100,
       Inteligencia: 80,
       Carisma: 30
    } 
}

const card3 ={
    nome:"Teste3",
    atributos: {
       Força: 50,
       Magia: 10,
       Constituicao: 80,
       Destreza: 20,
       Inteligencia: 60,
       Carisma: 50
    } 
}

const cards = [card1, card2, card3]



function randomCards() {
    const numeroCardMaq = parseInt(Math.random() * 3)

    const cardMaq = cards[numeroCardMaq]

    const numeroCardJog = parseInt(Math.random() * 3)

    while (numeroCardJog == numeroCardMaq){
    numeroCardJog = parseInt(Math.random() * 3)
    }

    const cardJog = cards[numeroCardJog]

    console.log(cardJog)

    document.getElementsByClassName('random_cards').disabled = true
    document.getElementsByClassName('play').disabled = false
}

// Fundo Confetes Vitoria
var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
