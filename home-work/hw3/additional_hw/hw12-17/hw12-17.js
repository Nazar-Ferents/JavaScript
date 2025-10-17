// let x = [1,2,3,4,5,6,7,8,9,10];
//
//
// for (let i = 0; i<x.length; i++) {
//     console.log(x[i]);
// }
//
// let y = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
//
// let i = 0;
// while (i < y.length) {
//     console.log(y[i]);
//     i++;
// }
//
// let z = [1,2,3,4,5,'a', 'b', 'c', 'd', 'e']
// for (let i = 0; i<z.length; i++) {
//     console.log(z[i]);
// }

let q = [1,2,3,4,'a', 'b', 'c', 'd', true,false]
let i = 0;
while (i < q.length) {
    if (typeof q[i] === 'boolean'){
        console.log(q[i]);
    }
    i++;
}

for (let x = 0; x < q.length; x++){
    if (typeof q[x] ===  'number'){
        console.log(q[x]);
    }
}

for (let y = 0; y < q.length; y++){
    if (typeof q[y] === 'string'){
        console.log(q[y]);
    }
}
