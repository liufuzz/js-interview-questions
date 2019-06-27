// 如果是基本数据类型，直接返回
// 如果是 RegExp 或者 Date 类型，返回对应类型
// 如果是复杂数据类型，递归。
// 考虑循环引用的问题

function _deepCopy(obj, hash = new WeakMap()) {
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);
  if (obj === null || typeof obj !== 'object') return obj;
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  let t = new obj.constructor();
  hash.set(obj, t);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      t[key] = _deepCopy(obj[key], hash);
    }
  }
  return t;
}

// 测试
let obj1 = {
  title: 'abc',
  nums: [1, 2, 3, 4],
  price: {
    a: 'a',
    b: 'b'
  }
};

let obj2 = _deepCopy(obj1)
//console.log(obj2);
obj1.price.a = 'c';
console.log(obj1);
console.log(obj2);
