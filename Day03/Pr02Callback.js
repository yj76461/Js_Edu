let arr = []

let promise = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = parseInt(Math.random() * 50) + 1
            console.log(`new number : ${num}`)
            resolve(num);
        }, 1000);
})

const aa =() => {
    promise().then((res) => {
        if(arr.includes(res)){
            throw new Error('Already Existed Number!')
        }else{
            arr.push(res)
            console.log(arr);
            return aa()
        }
    }).catch(e => {
        console.log(`res : ${arr} res size : ${arr.length}`)
    })
}

aa();
// promise.
// then((result) =>{
//     if(arr.includes(result)){
//         throw new Error('Already Existed Number!')
//     }else{
//         arr.push(result)
//         console.log(arr);
//         return promise()
//     }
// }).catch(e => {
//     console.log(`res : ${arr} res size : ${arr.length}`)
// })
