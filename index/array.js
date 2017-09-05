//find 方法 ，（ 他的参数是一个回调函数 ）
// let ob=[1, 4, -5, 10].find((array) => array < 0)
// console.log(ob)


//map 方法 ，（ 不会改变数组的长度 ）
// let a =[1,2,3]
// let b = a.map(t =>t*2)
// console.log(b)


//filter 方法 （ 筛选 ）
// let a =[3,4,21,11]
// let b =a .filter(t => t>10)
// console.log(b)


//reverse 逆序输出
const a=[3,6,4,87]
const b=a.reverse()
console.log(b)

//拼接
let aa={a:1}
let bb={b:1}
let cc={...aa,...bb}
console.log(cc)

//覆盖
