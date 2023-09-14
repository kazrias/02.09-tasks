Function.prototype.fakeBind = function (context, ...args) {
  return (...restArgs) => {
    const uniqId = Date.now().toString()+Math.random();
    context[uniqId] = this;
    const res = context[uniqId](...args, ...restArgs);
    delete context[uniqId];
    return res
  }
}

