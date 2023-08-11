function Person(name, age){
    let _name = name;
    let _age = age;

    console.log(`person 함수 실행 ${_name} ${_age}`)

    let updateInfo = (newName, newAge) => {
        console.log(
            `Before modification : ${_name} ${_age}`
        );
        
        _name = newName
        _age = newAge

        console.log(
            `After modification : ${_name} ${_age}`
        );
    }

    let getInfo = () => {return `${_name}은 ${_age}`}

    return {updateInfo, getInfo}
}
p = Person('aa', 11)
console.log(p.getInfo())
p.updateInfo('bb', 22)
console.log(p.getInfo());

