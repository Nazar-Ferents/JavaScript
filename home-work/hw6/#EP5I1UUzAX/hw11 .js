


let cards = []

let suits = ['spade', 'diamond', 'heart', 'clubs'];
let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

for (const suit of suits) {
    for (const value of values) {
        let color;
        if (suit === 'diamond' && suit === 'heart'){
            color = 'red';

        }else{
            color = 'black';
        }
        let card = {
            cardSuit: suit,
            value: value,
            color: color
        }

        cards.push(card);
    }
}

console.log(cards);

let reduce = cards.reduce((previousValue, currentValue) => {

    if (currentValue.cardSuit === 'spade') {
        previousValue.spades.push(currentValue);
    }else if (currentValue.cardSuit === 'diamond') {
        previousValue.diamonds.push(currentValue);
    }else if (currentValue.cardSuit === 'heart') {
        previousValue.hearts.push(currentValue);
    }else if (currentValue.cardSuit === 'clubs') {
        previousValue.clubs.push(currentValue);
    }
    return previousValue;


},{spades:[],

    diamonds:[],

    hearts:[],

    clubs:[]})

console.log(reduce)