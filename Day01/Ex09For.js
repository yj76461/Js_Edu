let arr = ["abc", "def", "ghi"]

for(let val in arr){
    console.log(val);
}

for(let val in arr){
    console.log(arr[val]);
}

let person = {
    name : `john`,
    age : 30,
    showInfo : function(){console.log(`${this.name} ${this.age}`)}
}

for(let i in person){
    console.log(`i : ${i}, person[i] : ${person[i]}`)
}