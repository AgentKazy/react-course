const people = ['Kazy', 'Kalethyr', 'Mythwind', 'Kaelar'];

const formatPeople = () => {
  let val = '';
  people.forEach((person) => (val += person + ', '));
};

const greet = () => {
  console.log(people[0] + ' says hello.');
};

export { people, formatPeople, greet };

export default people;
