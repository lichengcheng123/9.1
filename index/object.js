//Object.assign方法用于对象的合并 

// var target = {a:1}
// var target1 = {b:2,c:2}
// var target2 = {c:3}

// console.log(Object.assign(target,target1,target2))



//Object.keys 可以把一个对象的所有的key(属性名) 都拿出来，组成一个数组。

const obj ={a:1,b:2,c:3}
console.log(Object.keys(obj))
//打印的是数组[ 'a', 'b', 'c' ]

Object.keys(obj).map(t=>console.log(obj[t]))
//依次输出1，2， 3

