const people = [
  { name: 'Kazy', rank: 'Hero' },
  { name: 'Kalethyr', rank: 'Adventurer' },
  { name: 'Mythwind', rank: 'Hero' },
  { name: 'Kaelar', rank: 'Captain' },
];

// Filter method
const rank = people.filter((person) => {
  return person.rank == 'Hero';
});

console.log(rank, people);

// Map method
const names = people.map((char) => {
  return char.name;
});

console.log(names, people);
