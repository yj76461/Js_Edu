function add(x,y){
    return x + y
}

let sub = (x, y) => (x - y)

let myMath = {
    getCircleArea : (radius) => radius ** 2 * Math.PI,
    getTriangleArea : (base, height) => base * height / 2
}

export {add, sub}
export default myMath