let a1 = parseFloat(prompt('Enter a1 for A'));
let a2 = parseFloat(prompt('Enter a2 for A'));
let b1 = parseFloat(prompt('Enter b1 for B'));
let b2 = parseFloat(prompt('Enter b2 for B'));
let c1 = parseFloat(prompt('Enter c1 for C'));
let c2 = parseFloat(prompt('Enter c2 for C'));

const newLocal = 2;

if (c1===(a1+b1)/newLocal & c2===(a2+b2)/newLocal) {
    console.log('A distance is equal');
} else {
    console.log('A distance is not equal');
}