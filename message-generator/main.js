//TODO generate a random message every time code script is ran
//TODO log to console
// Truly randomness:
//    output should be made up of at least three different pieces of data

/* 
    Hot Fuzz one liner bits

    ?Past Tense
    made people diappear
    fired a gun
    fired two guns
    been in a high speed pursuit
    seen Bad Boys II
    been Judge Judy and executioner
    had four aces beat a straight
    taken a shortcut before
    gone "Aaargh!"
    had bolognese
    ?Present Tense
    needing to be stopped
    jumping through the air
    in a high speed pursuit
    having a bad hand
    going "Aaargh!"


    Three sections
    Have you ever
    [
        (done) first thing
    ]
    and
    [
        (done) second thing
    ] 
    whilst
    [
        (doing) something else
    ]
*/

const past1 = "made people diappear"
const past2 = "fired a gun"
const past3 = "fired two guns"
const past4 = "been in a high speed pursuit"
const past5 = "seen Bad Boys II"
const past6 = "been Judge Judy and executioner"
const past7 = "had four aces beat a straight"
const past8 = "taken a shortcut before"
const past9 = 'gone "Aaargh!"'
const past10 = "had bolognese"

const present1 = "needing to be stopped"
const present2 = "jumping through the air"
const present3 = "in a high speed pursuit"
const present4 = "having a bad hand"
const present5 = 'going "Aaargh!"'

const pastPhrases = [past1, past2, past3, past4, past5, past6, past7, past8, past9, past10]
const presentPhrases = [present1, present2, present3, present4, present5]

function generatePhrase(phrases){
    const randNum = Math.floor(Math.random() * phrases.length)
    return phrases[randNum]
}

function generateRandomMessage(){
    let firstPhrase = generatePhrase(pastPhrases)
    let secondPhrase = generatePhrase(pastPhrases)

    //makes sure there's no repeats
    while (secondPhrase === firstPhrase){
        secondPhrase = generatePhrase(pastPhrases)
    }

    let thirdPhrase = generatePhrase(presentPhrases)
    return `Have you ever ${firstPhrase} and ${secondPhrase} whilst ${thirdPhrase}?`
}

console.log(generateRandomMessage())