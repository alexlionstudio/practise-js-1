'use strict';

let a = 5;
console.log(a++);

let b = [] + false - null +true;
console.log(b);

let y = 1,
    x = y = 2;
console.log(x);

let c = [] + 1 + 2;
console.log(c);

console.log("1"[0]);

console.log(2 && 1 && null && 0 && undefined);

let a = 1,
    b = 2;
console.log( !! ( a && b ) );
console.log( ( a && b ) );

console.log(null || 2 && 3 || 4);

let a = [1,2,3],
    b = [1,2,3];
console.log( a == b );

console.log( +"infinity" );

let a = "Ёжик",
    b = "яблоко";
console.log( a > b );

console.log( 0 || "" || 2 || undefined || true || false);