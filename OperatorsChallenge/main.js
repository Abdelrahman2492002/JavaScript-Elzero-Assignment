// Challenge 1

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
[++a] 
value : 11
Explain: Pre Increment
[+] : addition Operator
-----------------
[+b++]
[+] : unary plus Operator
value : 20
Explain: post increment & unary operator return number
[+] : addition Operator
-----------------
[+c++]
[+] : unary plus Operator
value : 80
Explain : post increment & unary operator return number 
[-] : Subtraction Operator
-----------------
[+a++]
value : 11
Explain: post increment & unary operator return number
 */
//========================================================================
/*
[++a] 
value : 13
Explain: Pre Increment
[+] : addition Operator
-----------------
[-b]
value : -21
Explan : Unary minus return negative number
[+] : addition Operator
-----------------
[+c++]
[+] : unary plus Operator
value : 81
Explain: post increment & unary operator return number
[-] : subtract Operator
-----------------
[-a++]
[-] : Unary minus Operator
value: -13
Explain : post increment & Unary minus return negative number
[+] : addition Operator
-----------------
[+a]
[+] : unary plus Operator
value : 13
Explain : unary operator return number
*/
//========================================================================
/*
[--c]
value: 81
Explain : pre Decrement
[+] : addition Operator
-----------------
[+b]
value : 21
Explan : Unary plus return number
[+] : addition Operator
-----------------
[--a]
[-] : Unary minus Operator
value : 13
Explan : pre Decrement
[*] : multiplication Operator
-----------------
[+b++]
[+] : unary plus Operator
value : 21
Explain: post increment & unary operator return number
[-] : Subtraction Operator
-----------------
[+b]
value : 22
Explan : Unary plus return number
[*] : multiplication Operator
-----------------
[a] :
value : 13
[+] : addition Operator
-----------------
[--a]
[-] : Unary minus Operator
value : 12
Explan : pre Decrement
[-] : Subtraction Operator
-----------------
[+true]
[+] : unary plus Operator
value : 1
Explain : Unary plus return number from true
*/
//=======================================================================================================

//Challenge 2

let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(-d * +e);
console.log(++e * ++g + ++f + -d);
