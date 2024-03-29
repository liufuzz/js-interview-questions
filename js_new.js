function _new(func) {
  let obj = Object.create(func.prototype);
  let k = func1.call(obj);
  return k && (typeof k === 'object' || typeof k === 'function') ? k : obj;
}

function func1() {
  this.name = 'lf';
  this.age = 24;
}

let a = _new(func1);
console.log(a.name);