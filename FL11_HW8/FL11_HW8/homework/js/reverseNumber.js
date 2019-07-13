function reverseNumber(num) {
    let revNum = +Math.abs(num).toString().split('').reverse().join('');
    return num < 0 ? -revNum : revNum;
}
reverseNumber();