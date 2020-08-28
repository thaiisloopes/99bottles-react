import { getVersesFrom } from './lyrics';

test('Return 99 verse', () => {
  const verse99 = '99 bottles of beer on the wall, 99 bottles of beer.\n' + 
    'Take one down and pass it around, 98 bottles of beer on the wall.';

  expect(getVersesFrom(99)).toContain(verse99);
});

test('Return 12 verse', () => {
  const expectedVerse = '12 bottles of beer on the wall, 12 bottles of beer.\n' +
    'Take one down and pass it around, 11 bottles of beer on the wall.';

  expect(getVersesFrom(12)).toContain(expectedVerse);
});

test('Return 2 verse', () => {
  const expectedVerse = '2 bottles of beer on the wall, 2 bottles of beer.\n' +
    'Take one down and pass it around, 1 bottle of beer on the wall.';

  expect(getVersesFrom(2)).toContain(expectedVerse);
});

test('Return 1 verse', () => {
  const expectedVerse = '1 bottle of beer on the wall, 1 bottle of beer.\n' +
    'Take it down and pass it around, no more bottles of beer on the wall.';

  expect(getVersesFrom(1)).toContain(expectedVerse);
});

test('Return no verse', () => {
  const expectedVerse = 'No more bottles of beer on the wall, no more bottles of beer.\n' +
    'Go to the store and buy some more, 99 bottles of beer on the wall.\n';

  expect(getVersesFrom(0)).toEqual(expectedVerse);
});

test('Return all required verses', () => {
  const expectedVerse = '4 bottles of beer on the wall, 4 bottles of beer.\n' +
    'Take one down and pass it around, 3 bottles of beer on the wall.\n' +
    '3 bottles of beer on the wall, 3 bottles of beer.\n' +
    'Take one down and pass it around, 2 bottles of beer on the wall.\n' +
    '2 bottles of beer on the wall, 2 bottles of beer.\n' +
    'Take one down and pass it around, 1 bottle of beer on the wall.\n' +
    '1 bottle of beer on the wall, 1 bottle of beer.\n' +
    'Take it down and pass it around, no more bottles of beer on the wall.\n' +
    'No more bottles of beer on the wall, no more bottles of beer.\n' +
    'Go to the store and buy some more, 99 bottles of beer on the wall.\n';

  expect(getVersesFrom(4)).toEqual(expectedVerse);
});