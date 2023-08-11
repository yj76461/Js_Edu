function Pokemon (name){
    _name = name
    _lv = 0
    let levelUp = () => {
        _lv ++
        console.log(`레벨 1 증가 (레벨 ${_lv})`)
    }
    let getName = () =>{return _name}
    let getLevel = () => {return _lv}
    
    return {levelUp, getName, getLevel}
}



pokemon1 = Pokemon("피카츄");
pokemon1.levelUp();  // 레벨 1증가 (레벨 1)
pokemon1.levelUp();  // 레벨 1증가 (레벨 2)
pokemon1.levelUp();  // 레벨 1증가 (레벨 3)
console.log(`${pokemon1.getName()}  LV.${pokemon1.getLevel()}`);

pokemon2 = Pokemon("라이츄");
pokemon2.levelUp();  // 레벨 1증가 (레벨 1)
pokemon2.levelUp();  // 레벨 1증가 (레벨 2)
pokemon2.levelUp();  // 레벨 1증가 (레벨 3)
console.log(`${pokemon2.getName()}  LV.${pokemon2.getLevel()}`);




