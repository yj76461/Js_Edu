let arr = [10, 20, 30, 40, 50];

arr.forEach((e) => {console.log(`e : ${e}`);})
arr.forEach((i, e) => {console.log(`i : ${i} e : ${e}`);})


let arr2 = arr.map((e) =>  e * 7)

console.log(arr2)

let rarr = []

for(let i = 0; i < 10; i++){
    rarr[rarr.length] = parseInt(Math.random() * 50) + 1
}

let sum = rarr.reduce((acc, cur) => acc + cur)
let even = rarr.filter(s => s % 2 == 0)
let odd = rarr.filter(s => s % 2 == 1)
console.log(rarr)
console.log(sum, even, odd)


let people = [
    {
        name : "aa",
        age : 10
    },{
        name : "bb",
        age : 33
    },{
        name : "cc",
        age : 500
    },{
        name : "dd",
        age : 10
    },{
        name : "ee",
        age : 1010
    }

]


let adult = people.filter((p) => (p.age >= 20))
console.log(people);
console.log(adult)