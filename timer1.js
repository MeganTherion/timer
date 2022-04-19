const speak = function(x) {
  let timer = process.argv.slice(2);
  let timer2 = timer.map(x => x *= 1000);
  let doIt = function(){
    console.log('.');
  }
  for (let t of timer2) {
    if (timer2.indexOf(t) < 0) {
      clearInterval(myFunc)
    }
  let myFunc = setTimeout(doIt, t);
 }
}

console.log(speak())


//for let t of timer
//if index of t < 0
//clear interval
// const speak = function() {
//   let timer = process.argv.slice(2);
//   //console.log(timer)

// for (let t of timer) {
// (function(t) {
//   setInterval(function() {
//     if (t < timer.length) {
//   console.log('*!*')
// }
// else {
//   clearInterval(function);
// }
// });
// }
// )}
// }
// console.log(speak());