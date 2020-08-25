export const getVersesFrom = (bottle) => {
  let initialVerse = '';
  let index;

  for(index = bottle; index >= 0; index--) {
    initialVerse = initialVerse.concat(buildVerse(index));
  }  

  return initialVerse;
};
const buildVerse = (bottle) => {
  switch(bottle) {
    case 0:
      return 'No more bottles of beer on the wall, no more bottles of beer.\n' +
        'Go to the store and buy some more, 99 bottles of beer on the wall.';
    case 1: 
      return bottle + ' ' + container(bottle) + ' of beer on the wall, ' + bottle + ' ' + container(bottle) + ' of beer.\n' +
      'Take ' + pronoun(bottle) + ' down and pass it around, no more bottles of beer on the wall.\n\n';   
    default:
      return bottle + ' ' + container(bottle) + ' of beer on the wall, ' + bottle + ' ' + container(bottle) + ' of beer.\n' + 
        'Take ' + pronoun(bottle) + ' down and pass it around, ' + (bottle - 1) + ' ' + container(bottle - 1) + ' of beer on the wall.\n\n';
  }
}

const container = (numberOfBottles) => {
  return numberOfBottles === 1 ? 'bottle' : 'bottles';
}

const pronoun = (numberOfBottles) => {
  return numberOfBottles === 1 ? 'it' : 'one';
}