let arr1 = [10, 20, 30]
let arr2 = [3, 2, 10]

let arr3 = [...arr1, ...arr2]

console.log(arr3);

person1 = {
    name: 'Batman', age : 30
}

person2 = {
    ...person1,
    name : 'Superman'
}
console.log(person2)