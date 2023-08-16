function fecthData(callback){
    const random = Math.random()
    setTimeout(() => {
        if(random <= 0.5){
            callback(null, 'success!')
        }else{
            callback(new Error('Fail..',null))
        }
        console.log("after 3sec")
    }, 3000)
}

let myCallback = (e, d) =>{
    if(e){
        console.log(`Err : ${e.message}`)
    }else{
        console.log(d)
    }
}

fecthData(myCallback)