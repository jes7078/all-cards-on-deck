const array = [52]
let z = 0

const initialize = () => {
  console.log('initializing')
  while (z < 52) {
    array[z] = z
    z++
  }
  console.log(array)
}

const shuffle = () => {
  console.log('shuffling')
  let i = 0
  let j = 0
  let temp = null
  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  console.log(array)
  topCard = array[0]
  convert()
}

const display = () => {
  console.log('flipped card')
  document.querySelector('.output-message').textContent =
    'The top card is a ' + printCard
}

const convert = () => {
  if (topCard == 0) {
    printCard = 'Ace of Hearts'
  }
  if (topCard == 1) {
    printCard = 'Two of Hearts'
  }
  if (topCard == 2) {
    printCard = 'Three of Hearts'
  }
  if (topCard == 3) {
    printCard = 'Four of Hearts'
  }
  if (topCard == 4) {
    printCard = 'Five of Hearts'
  }
  if (topCard == 5) {
    printCard = 'Six of Hearts'
  }
  if (topCard == 6) {
    printCard = 'Seven of Hearts'
  }
  if (topCard == 7) {
    printCard = 'Eight of Hearts'
  }
  if (topCard == 8) {
    printCard = 'Nine of Hearts'
  }
  if (topCard == 9) {
    printCard = 'Ten of Hearts'
  }
  if (topCard == 10) {
    printCard = 'Jack of Hearts'
  }
  if (topCard == 11) {
    printCard = 'Queen of Hearts'
  }
  if (topCard == 12) {
    printCard = 'King of Hearts'
  }
  if (topCard == 13) {
    printCard = 'Ace of Spades'
  }
  if (topCard == 14) {
    printCard = 'Two of Spades'
  }
  if (topCard == 15) {
    printCard = 'Three of Spades'
  }
  if (topCard == 16) {
    printCard = 'Four of Spades'
  }
  if (topCard == 17) {
    printCard = 'Five of Spades'
  }
  if (topCard == 18) {
    printCard = 'Six of Spades'
  }
  if (topCard == 19) {
    printCard = 'Seven of Spades'
  }
  if (topCard == 20) {
    printCard = 'Eight of Spades'
  }
  if (topCard == 21) {
    printCard = 'Nine of Spades'
  }
  if (topCard == 22) {
    printCard = 'Ten of Spades'
  }
  if (topCard == 23) {
    printCard = 'Jack of Spades'
  }
  if (topCard == 24) {
    printCard = 'Queen of Spades'
  }
  if (topCard == 25) {
    printCard = 'King of Spades'
  }
  if (topCard == 26) {
    printCard = 'Ace of Diamonds'
  }
  if (topCard == 27) {
    printCard = 'Two of Diamonds'
  }
  if (topCard == 28) {
    printCard = 'Three of Diamonds'
  }
  if (topCard == 29) {
    printCard = 'Four of Diamonds'
  }
  if (topCard == 30) {
    printCard = 'Five of Diamonds'
  }
  if (topCard == 31) {
    printCard = 'Six of Diamonds'
  }
  if (topCard == 32) {
    printCard = 'Seven of Diamonds'
  }
  if (topCard == 33) {
    printCard = 'Eight of Diamonds'
  }
  if (topCard == 34) {
    printCard = 'Nine of Diamonds'
  }
  if (topCard == 35) {
    printCard = 'Ten of Diamonds'
  }
  if (topCard == 36) {
    printCard = 'Jack of Diamonds'
  }
  if (topCard == 37) {
    printCard = 'Queen of Diamonds'
  }
  if (topCard == 38) {
    printCard = 'King of Diamonds'
  }
  if (topCard == 39) {
    printCard = 'Ace of Clubs'
  }
  if (topCard == 40) {
    printCard = 'Two of Clubs'
  }
  if (topCard == 41) {
    printCard = 'Three of Clubs'
  }
  if (topCard == 42) {
    printCard = 'Four of Clubs'
  }
  if (topCard == 43) {
    printCard = 'Five of Clubs'
  }
  if (topCard == 44) {
    printCard = 'Six of Clubs'
  }
  if (topCard == 45) {
    printCard = 'Seven of Clubs'
  }
  if (topCard == 46) {
    printCard = 'Eight of Clubs'
  }
  if (topCard == 47) {
    printCard = 'Nine of Clubs'
  }
  if (topCard == 48) {
    printCard = 'Ten of Clubs'
  }
  if (topCard == 49) {
    printCard = 'Jack of Clubs'
  }
  if (topCard == 50) {
    printCard = 'Queen of Clubs'
  }
  if (topCard == 51) {
    printCard = 'King of Clubs'
  }
}

document.addEventListener('DOMContentLoaded', initialize)
document.addEventListener('DOMContentLoaded', shuffle)
document.querySelector('button').addEventListener('click', display)
