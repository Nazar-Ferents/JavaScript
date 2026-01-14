

// setTimeout(()=> {
//     let x =1
//     console.log(x);
//     setTimeout(()=> {
//         x++;
//         console.log(x);
//         setTimeout(()=> {
//             x++;
//             console.log(x);
//         },1000)
//     },1000)
// },1000)

new Promise((resolve) => {
    setTimeout(()=>{
        let x = 1;
        console.log(x)
        resolve(x)
    },1000)
})
.then((value) => {
    return new Promise((banana) => {
        setTimeout(()=>{
            value++;
            console.log(value)
            banana(value)
        },1000)
    })
})
.then((x) => {
    setTimeout(()=>{
        x++;
        console.log(x)
    },1000)
})