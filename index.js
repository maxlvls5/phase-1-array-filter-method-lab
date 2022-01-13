function findMatching(names, argument) {
  return names.filter((person) => {
    return person.toLowerCase() === argument.toLowerCase();
  });
}

// function fuzzyMatch(drivers, string) {
//   return drivers.filter((person) => {
//     return person. === string.substring();
//   });
// }

function matchName(objects, string) {
  return objects.filter((newElement) => {
    return newElement.name === string;
  });
}

const example = {
  hometown: "Tampa Bay",
  name: "Bobby",
};
