Function.prototype.fakeApply = function (context, args) {
  const uniqId = Date.now().toString() + Math.random();
  context[uniqId] = this;
  const res = context[uniqId](...args);
  delete context[uniqId];
  return res
}

const user = {
  name: 'Tyom',
  age: 23,
  toString() {
    return [this.name, this.age]
  }
}

function getInfo(country, city) {
  console.log(`${this.name} is ${this.age} years old, lives in ${city}, ${country}`);
}

getInfo.fakeApply(user, ['Armenia', 'Erevan']);
