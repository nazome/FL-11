let a = parseFloat(prompt('Enter value of first side:'));
let b = parseFloat(prompt('Enter value of second side:'));
let c = parseFloat(prompt('Enter value of third side:'));

if (a<b+c || b<c+a || c<a+b) {
    if (a===b && b===c && c===a ) {
        console.log('Eequivalent triangle');
    } else if (a===b || b===c || c===a ) {
        console.log('Isosceles triangle');
    } else {
        console.log('Normal triangle');
    }
} else {
    console.log('Triangle doesn’t exist');
}

