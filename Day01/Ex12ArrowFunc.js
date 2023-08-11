let sayHello = () => {console.log("Hello, World!");};

sayHello = (name) => {console.log(`Hello, ${name}!`);}

// 매개변수 1개일 때는 소괄호 생략가능
// name => { ... }
sayHello('as')

