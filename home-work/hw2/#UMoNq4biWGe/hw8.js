
let day = + prompt('what day is it today')

if (day >= 1 && day <= 10) {
    console.log('the first decade of month')
}
else if (day >= 11 && day <= 20) {
    console.log('the second decade of month')
}
else if (day >= 21 && day <= 31) {
    console.log('the third decade of month')
}
else{
    console.log('srsly?')
}