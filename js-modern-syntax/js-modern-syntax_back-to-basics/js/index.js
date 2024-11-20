/*
Now that you've practiced destructuring, default parameters, and the spread operator,
try reversing the challenge by rewriting this code without using these modern features.
*/

// export const getNameAndCountry = ({ name, country }) => [name, country];

/* export const getRelocatedCity = (
  city1,
  city2 = { name: "Berlin", country: "Germany" }
) => {
  const [, country] = getNameAndCountry(city2);
  
  return {
    ...city1,
    country,
  };
};
*/
export function getNameAndCountry(city) {
  let name = city.name;
  let country = city.country;

  return [name, country];
}

export function getRelocatedCity(city1, city2) {
  if (typeof city2 === "undefined") {
    city2 = { name: "Berlin", country: "Germany" };
  }
  let city2CityAndCountry = getNameAndCountry(city2);
  let country = city2CityAndCountry[1];

  let result = Object.assign({}, city1);
  result.country = country;

  return result;
}
