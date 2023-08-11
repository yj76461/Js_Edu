let a = 1; // stable
var b = 1; // local variable, unstable
const c = 1; // cannot change value
d = 1; // global variable
console.log(a, b, c, d + 20)
sum();
function sum(){
    console.log(a + 20);
}
