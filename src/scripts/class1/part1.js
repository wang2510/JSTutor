import '../styles/index.scss';

console.log('webpack starterkit');

/************************************************/
/****************** 基础语法部分 ******************/
/************************************************/

console.log(myId);
let myId = 50; // error

console.log(myId);
var myId = 50; // undefined

if (true) {
    var foo = 10;
}
console.log(foo); //10

if (true) {
    let foo = 10;
}
console.log(foo); //error

function sendAges(...allStudentAges) {
    allStudentAges.forEach( age => console.log(age));
}

sendAges(15,20,27);
// 15, 20, 27

function sendAges(name, ...allStudentAges) {
    allStudentAges.forEach( age => console.log(age));
}

sendAges('Wang', 15,20,27);
// 15, 20, 27

let myIds = [1, 2, 5];
let [id1, id2, id3] = myIds;

console.log(id1, id2, id3);
// 1, 2, 5

let myIds = [1, 2, 5];
let id1, reamainingIds;
[id1, ...reamainingIds] = carIds;

console.log(id1, reamainingIds);
// 1, [2, 5]

let myIds = [1, 2, 5];
let reamainingIds;
[, ...reamainingIds] = carIds;

console.log(reamainingIds);
// [2, 5]

let student = { id: 1000, name: 'Wang'};
let {id, name} = student;

console.log(id, name);
// 1000 Wang

let student = { id: 1000, name: 'Wang'};
{id, name} = student;

console.log(id, name);
// error

let student = { id: 1000, name: 'Wang'};
({id, name} = student);

console.log(id, name);
// 1000 Wang

function printStudents(s1, s2, s3) {
    console.log(s1, s2, s3);
}

let studentIds = [1, 2, 3];
printStudents(...studentIds);
// 1, 2, 3

let studentIds = '123';
printStudents(...studentIds);
// 1, 2, 3

typeof(1); // number
typeof(true); // boolean
typeof('Hello') // string
typeof( function(){} ); // function
typeof({}) // object
typeof(null) // object
typeof(undefined); //undefined
typeof(NaN); // number

// convert to string
let foo = 1;
foo.toString();

// convert string to integer
Number.parseInt('55'); // 55 as a number

// convert string to number
Number.parseFloat('50.2'); // 55.99 as a number

let i = 0;
for(; i < 12; i ++) {
    if( i === 8) {
        break;
    }
}

console.log(i); // 8

for(let i = 0; i < 4; i ++) {
    if (i === 2) {
        continue;
    }

    console.log(i); // 0, 1 , 3
}

/************************************************/
/****************** 操作符号部分 ******************/
/************************************************/

if(var1 == var2) {}
if(var1 === var2) {}
if(var1 != var2) {}
if(var1 !== var2) {}
console.log(1 == true);
console.log(1 === true);

++ var1;
var1 ++;

-- var1;
var1 --;

+var1; // convert String to number
-var1; // change sign of number

let year = 1998;
console.log(++year); //1999
console.log(year++); //1998
console.log(year); // 1999

let year2 = "1998";
console.log(typeof(+year2)); // number
console.log(typeof(year2)); // string

let year3 = "-1998";
console.log(typeof(-year3));
console.log(-year3); // 1998

if (var1 > 5 && var2 < 100) {};
if (var1 > 5 || var2 < 100) {};
if (var1 > 5 || var2 < 100 && var3 === 5) {};
if ((var1 > 5 || var2) < 100 && var3 === 5) {};
var1 && var2
var1 || var2
!var1

if (5 ===5 || 6 === 6) {
    console.log(true);
} else {
    console.log(false);
}

let userSettings = null;
let defaultSettings = { name: 'default' };

console.log(userSettings || defaultSettings); // default;

let userSettings = { name: 'Wang' };
let defaultSettings = {name: 'default'};

console.log(userSettings || defaultSettings); // Wang;

var result = (foo > 5) ? true : false;