var a; 
var b;
var sum;
var difference;
var product;

a = 6;
b = 5;

console.log('a', a);
console.log('b', b);

sum = add(a, b);

console.log('1. add', a, b, sum);

function add(x, y) {
    return x+y; 
}

difference = sub(a, b);

function sub(x,y) {
    return y-x;
}


console.log('2. sub', a, b, difference);

product = mult(a, b);

function mult(x, y) {
    return y*x;
}

console.log('3. mult', a, b, product) 

function checkDifference(x) {
    return difference;
}
console.log ('4. My football team lost ' + difference + ' times this week')

function checkSum {
    return sum;
}
console.log ('5. I CAN ADDZ ' + sum + ' numbers')


