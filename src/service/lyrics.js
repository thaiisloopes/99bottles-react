export const getVersesFrom = (bottle) => {
  let initialVerse = '';
  let index;

  for(index = bottle; index >= 0; index--) {
    initialVerse = initialVerse.concat(buildVerse(index));
  }  

  return initialVerse;
};
const buildVerse = (bottle) => {
  if(bottle === 0) {
    return capitalize(quantity(bottle)) + ' ' + container(bottle) + ' of beer on the wall, ' +
    quantity(bottle) + ' ' + container(bottle) + ' of beer.\n' + 
    'Go to the store and buy some more, ' +
    '99 bottles of beer on the wall.';
  }
      
  return capitalize(quantity(bottle)) + ' ' + container(bottle) + ' of beer on the wall, ' + 
    quantity(bottle) + ' ' + container(bottle) + ' of beer.\n' + 
    'Take ' + pronoun(bottle) + ' down and pass it around, ' + 
    quantity(bottle - 1) + ' ' + container(bottle - 1) + ' of beer on the wall.\n\n';
}

const container = (numberOfBottles) => {
  return numberOfBottles === 1 ? 'bottle' : 'bottles';
}

const pronoun = (numberOfBottles) => {
  return numberOfBottles === 1 ? 'it' : 'one';
}

const quantity = (numberOfBottles) => {
  return numberOfBottles === 0 ? 'no more' : numberOfBottles.toString();
}
const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}