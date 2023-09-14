Function.prototype.fakeApply = function (context, args) {
  const uniqId = Date.now().toString() + Math.random();
  context[uniqId] = this;
  const res = context[uniqId](...args);
  delete context[uniqId];
  return res
}


