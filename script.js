
const verbGame = {};

verbGame.verbsTenses = {
    came: {
        name: 'came',
        value: 01,
        img: "assets/came-01.gif",
    },

    come: {
        name: 'come',
        value: 01,
        img: "assets/come-01.gif",
    },

    took: {
        name: 'took',
        value: 02, 
        img:"assets/took-02.gif",
    },

    taken: {
        name: 'taken',
        value: 02,
        img: "assets/taken-02.gif",
    },

    knew: {
        name: 'knew',
        value: 03,
        img: "assets/knew-03.gif",
    },

    known: {
        name: 'known',
        value: 03,
        img: 'assets/known-03.gif'
    },

    went: {
        name: 'went',
        value: 04,
        img: "assets/went-04.gif",
    },

    gone: {
        name: 'gone',
        value: 04,
        img: "assets/gone-04.gif",
    },

    did: {
        name: 'did',
        value: 05,
        img: "assets/did-05.gif",
    },

    done: {
        name: 'done',
        value: 05,
        img: "assets/done-05.gif",
    },

    saw: {
        name: 'saw',
        value: 06,
        img: "assets/saw-06.gif",
    },

    seen: {
        name: 'seen',
        value: 06,
        img: "assets/seen-06.gif",
    }

};

// console.log(verbGame); CHECKED - Ok to delete

// Define sets of cards:

    verbGame.firstSet =  ['came','took', 'knew','went', 'did','saw'];
    verbGame.secondSet = ['come','taken','known','gone', 'done','seen'];

    verbGame.finalSet = verbGame.firstSet.concat(verbGame.secondSet);

    const cardsInHand = {
        openedCards: []
        
    };

    
    
    // console.log(verbGame.finalSet); Checked - OK to delete


// This is to randomize the display of the cards and to add images to each card.

verbGame.randomizeCards = () => {
    // console.log(verbGame.finalSet)
    let cardArray = []
    // console.log(cardArray);


    // This is looping over each item in finalSet array creating cards with images and alt text. AND adding it to the deck (array). 
    verbGame.finalSet.forEach( function(verb){
        // console.log(verb);
        const verbValues = verbGame.verbsTenses[verb];
        // console.log(verbValues);
        const card = $(`<li class="card" data-value="${verbValues.value}">${verbValues.name}</li>`);
        const cardImage = $(`<img src= ${verbValues.img} alt= "This is an image of the word ${verbValues.name}">`);
        // console.log(cardImage);
        card.append(cardImage);
        // console.log(card);
        cardArray.push(card);
    })

    cardArray = verbGame.shuffle(cardArray);
    cardArray.forEach(function(card){
        $('.deck').append(card);
    })
};   

// Copied from https: //stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
verbGame.shuffle = function(a){
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};


$('ul').on('click', 'li', function () {
    $(this).toggleClass("activeOn");
    // console.log(this);
})            

verbGame.matchedCards = function () {
    cardsInHand.openedCards.push(this);
    console.log("test");
    if (cardsInHand.openedCards.length === 2) {
        if ($(".activeOn").data(verbGame.verbsTenses[01].value) === $(".activeOn").data(verbValues[value]))
    console.log("positive");
    else {
        verbGame.unmatched().push(this);
        
    }
}
};

$(document).ready(() => {
    verbGame.randomizeCards();
    verbGame.matchedCards();
})

