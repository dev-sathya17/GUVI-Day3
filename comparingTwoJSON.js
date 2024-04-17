let object1 = { name: "Person 1", age: 5 };
let object2 = { age: 5, name: "Person 1" };

console.log(compareJSON(object1, object2));

function compareJSON(object1, object2) {
  // 1. Getting the keys of the objects in sorted order.
  let keysOfObject1 = Object.keys(object1).sort();
  let keysOfObject2 = Object.keys(object2).sort();

  // 2. Checking the keys are of equal length.
  if (keysOfObject1.length !== keysOfObject2.length) {
    return false;
  }

  // 3. Checking whether the keys are identical.
  for (let index = 0; index < keysOfObject1.length; index++) {
    if (keysOfObject1[index] !== keysOfObject2[index]) {
      return false;
    }
  }

  // 4. Checking for the values now that the keys are identical.
  for (let key in object1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}
