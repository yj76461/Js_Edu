let arr1 = [10, 20, 30]
let arr2 = new Array(10, 20, 30)

console.log(arr1, arr2)

person ={
    name : 'John Doe',
    age : 20,
    greet : function(){
        console.log(`Hi my Name is ${this.name}`)
    }
}
person.greet();