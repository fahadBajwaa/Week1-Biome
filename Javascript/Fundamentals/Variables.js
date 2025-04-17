// Javascript Fundamentals

//Variables: var, let, const

function testFunction() {
  //  console.log(a) // hoisted - but undefined
  var a = 22; // function level scope
  console.log(a)
  if (a = 22) {

    //   console.log(b) // Refrence Error - Hoisted but is in TDZ

    console.log(a)
    let b = "Fahad" // block level scope
    const c = "Momin" //block level scope
    console.log(b + ' is ' + a + ' years old')
  }
  //  console.log(c) //error - out of scope
}
// console.log(a) //error - out of scope
testFunction();