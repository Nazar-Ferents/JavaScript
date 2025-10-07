
let time = + prompt("what time is it");

if (time >=0 && time <= 15 ) {
    console.log('the first quarter of hour')
}
else if (time >=16 && time <= 30 ) {
    console.log('the second quarter of hour')
}
else if (time >=31 && time <= 45 ) {
    console.log('the third quarter of hour')
}
else if (time >=46 && time <= 60 ) {
    console.log('the fourth quarter of hour')
}