/*
    closure 함수 :
        내부 함수가 외부 함수의 변수에 접근하는 경우, 외부함수가 종료되어도 내부함수가 실행되는 동안에는 외부 함수의 변수가 살아있다.
*/

function outer() {
    let val = 10;
    let inner = function(){val ++
    console.log(val)}
    console.log("outer")
    return inner;
}

var a = outer();
a();
a();
a();
a
outer();
