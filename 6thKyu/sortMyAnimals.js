/* Consider the following class:

var Animal = { 
    name: "Cat", 
    numberOfLegs: 4 
}

Write a method that accepts a list of objects of type Animal, and returns a new list. The new list should be a copy of the original list, sorted first by the animal's number of legs, and then by its name.

If an empty list is passed in, it should return an empty list back.
*/
function sortAnimal(animal) {
  // if comparison returns 0(false) return secondary comparison
  return animal.slice().sort((a,b) => {
    return a.numberOfLegs - b.numberOfLegs || a.name.localeCompare(b.name);
  });
}
