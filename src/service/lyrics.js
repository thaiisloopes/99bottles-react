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
      return '1 bottle of beer on the wall, 1 bottle of beer.\n' +
        'Take one down and pass it around, no more bottles of beer on the wall.\n\n';   
    default:
      return bottle + ' bottles of beer on the wall, ' + bottle + ' bottles of beer.\n' + 
        'Take one down and pass it around, ' + (bottle - 1) + ' ' + container(bottle - 1) + ' of beer on the wall.\n\n';
  }
}

const container = (numberOfBootles) => {
  return numberOfBootles === 1 ? 'bottle' : 'bottles';
}