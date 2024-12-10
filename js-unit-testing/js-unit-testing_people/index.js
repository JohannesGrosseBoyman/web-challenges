import { people } from "./data";

export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  const result =  people.map((person) =>
     `${person.firstName} ${person.lastName}`);
  return result;
}
 
export function getNameAndAge(people) {
  const result = people.map((person) =>
  `${person.lastName} (${person.age})`);
  return result;
}

export function getPeopleByAge(people, age) {
  const result = people.filter((person, age) =>
  person.age === age);
  return result;
}

export function getPeopleNamesOlderThan(people, age) {}

export function getPeopleByLastName(people, lastName) {}

export function findPersonById(people, id) {}

export function isAnyoneOlderThan(people, age) {}

export function getFullNamesSortedByAge(people) {}

getFullNames(people)