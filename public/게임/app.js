const cards = [
    {
        name: 'rad',
        img:'free-icon-fruit-11079667.png'
    },
    {
        name: 'orange',
        img:'free-icon-round-10037411.png'
    },
    {
        name: 'yellow',
        img:'free-icon-rubber-duck-3367502.png'
    },
    {
        name: 'green',
        img:'free-icon-green-love-392208.png'
    },
    {
        name: 'blue',
        img:'free-icon-blue-12808693.png'
    },
    {
        name: 'purple',
        img:'free-icon-purple-ribbon-4086421.png'
    },
    {
        name: 'rad',
        img:'free-icon-fruit-11079667.png'
    },
    {
        name: 'orange',
        img:'free-icon-round-10037411.png'
    },
    {
        name: 'yellow',
        img:'free-icon-rubber-duck-3367502.png'
    },
    {
        name: 'green',
        img:'free-icon-green-love-392208.png'
    },
    {
        name: 'blue',
        img:'free-icon-blue-12808693.png'
    },
    {
        name: 'purple',
        img:'free-icon-purple-ribbon-4086421.png'
    },
    
]
document.addEventListener('DOMContentLoaded', () =>{
    cards.sort(() => 0.5 - Math.random())
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []


    function createeBoard(){
        for (let i = 0; i < cards.length; i++){
            const card = document.createElement('img')
            card.setAttribute('src', cards[i].img)
            card.setAttribute('src', 'free-icon-backdrop-11770615.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cards[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src',cards[cardId].img)
        if (cardsChosen.length ===2){
            setTimeout(checkForMatch, 500)
        }
    }
    function checkForMatch(){
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        
        if(optionOneId == optionTwoId){
            cards[optionOneId].setAttribute('src', 'free-icon-plain-square-67354.png')
            cards[optionTwoId].setAttribute('src', 'free-icon-plain-square-67354.png')
            alert('You have clicked the same image!')
        }
        else if(cardsChosen[0] === cardsChosen[1]){
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'free-icon-card-games-2118315.png')
            cards[optionTwoId].setAttribute('src', 'free-icon-card-games-2118315.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        }else{
            cards[optionOneId].setAttribute('src', 'free-icon-backdrop-11770615.png')
            cards[optionTwoId].setAttribute('src', 'free-icon-backdrop-11770615.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cards.length/2){
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }
        
        
    createeBoard();
})