function delay(params) {
    setTimeout(params, 3000);
}

delay(function() {
    console.log("3초 후에 실행됩니다.");
  });
  
console.log("delay 함수 호출 후 바로 실행됩니다.");
  