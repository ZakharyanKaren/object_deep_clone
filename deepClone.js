const object1 = {
  key1: "1",
  key2: {
    name: "nini",
    lastName: "lulu",
    obb: {
      abra: "aaa",
      array: [0, 1, 2],
      gogogo: function (text) {
        console.log(this);
        this.abra = text;
      },
    },
  },
  key3: () => {
    return this.key1
  },
  myMethod1() {
    console.log(this.key1);
  }
};

function deepClone(obj1) {
  if (obj1 === null) return null;
  let obj2 = {};

  for (key in obj1) {
    obj2[key] = Array.isArray(obj1[key])
      ? [...obj1[key]]
      : typeof obj1[key] === "object"
        ? deepClone(obj1[key])
        : obj1[key];
  }
  return obj2;
}

let object2 = deepClone(object1);

console.log(JSON.stringify(object2) === JSON.stringify(object1));