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
    action(bottle) +
    quantity(successor(bottle)) + ' ' + container(bottle - 1) + ' of beer on the wall.';
  }
      
  return capitalize(quantity(bottle)) + ' ' + container(bottle) + ' of beer on the wall, ' + 
    quantity(bottle) + ' ' + container(bottle) + ' of beer.\n' + 
    action(bottle) + 
    quantity(successor(bottle)) + ' ' + container(bottle - 1) + ' of beer on the wall.\n\n';
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
const capitalize = (stringToCapitalize) => {
  if (typeof stringToCapitalize !== 'string') return ''
  return stringToCapitalize.charAt(0).toUpperCase() + stringToCapitalize.slice(1)
}

const action = (numberOfBottles) => {
  return numberOfBottles === 0 ?
    'Go to the store and buy some more, ' :
    'Take ' + pronoun(numberOfBottles) + ' down and pass it around, ';
}

const successor = (numberOfBottles) => {
  return numberOfBottles === 0 ? 99 : numberOfBottles - 1;
}