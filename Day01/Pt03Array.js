// 1
let arr1 = [1,2,3];
arr1.push(4);
arr1.pop();
console.log(arr1);

// 2
let arr2 = [2,3,4];
arr2.unshift(1);
arr2.shift(1);
console.log(arr2);


// 3
let arr3 = [1,3,5,7]
arr3.splice(1,2);
console.log(arr3);

// 4
let arr4 = [1,2,3,4,5];
let arr4_2 = arr4.slice(1,4);
console.log(arr4_2);

// 5
let arr5 = [1,2,3,4,5];
let arr5_2 = arr5.map(x => x * 2)

console.log(arr5_2);

// 6
let arr6 = [1,2,3,4,5]
let arr6_2 = arr6.filter(x => x % 2 == 0)

console.log(arr6_2)

// 7
let arr7 = [1,2,3,4,5]
console.log(arr7.find(x => x > 4));

// 8
let arr8 = [1,2,3,4,5]
console.log(arr8.reduce((x, y) => x += y))