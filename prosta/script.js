// pirveli davaleba

// let admin;
// let name = 'giorgi mamardashvili';

// admin = name;

// console.log(admin);


// meore

// let name = "David";
// console.log( `hello ${1}` ); // hellos miewereba 1
// console.log( `hello ${"name"}` ); // hellos miewereba sityva name
// console.log( `hello ${name}` ); // miewereba sityva david, romelic mivanichet names


// mesame

// let num = 50;

// while (true) {
//     let x = +prompt('sheiyvane ricxvi:', '');
//     if (x < num) {
//         alert('arasakmarisi mniSvneloba');
//     } else if (x > num) {
//         alert('zedmetia');
//     } else {
//         alert('zustad!');
//         break;
//     }
// }


// meotxe

// let birthYear = +prompt('sheiyvanet dabadebis weli', '');
// let currentYear = 2020;
// let age = currentYear - birthYear;

// if (age >= 18) {
//     alert('tqven xart srulwlovani');
// } else {
//     alert('tqven xart arasrulwlovani');
// }

// 13.11 პირველი დავალება

// alert(null || 2 && 3 || 4); //პრიორიტეტულია და მნიშვნელობა. ამ შემთხვევაში 2 და 3 შორის ვირჩევთ 3, რადგან ბოლო true 3-ია. null არის false, მისი შემდეგი true არის სწორი პასუხი, ანუ 3.

// მეორე დავალება

// let age = +prompt("tqveni asaki", "");
// alert(age >= 14 && age <= 90 ? 'true' : 'false');

// მესამე დავალება

// let login = prompt('Enter your login', '');

// if (login === 'Admin') {
//     let password = prompt('enter your password', '');

//     if (password === 'TheMaster') {
//         alert('Welcome!');
//     } else if (password === '' || password === null) {
//         alert('Canceled');
//     } else {
//         alert('Wrong password');
//     }
// } else if (login === '' || login === null) {
//     alert('Canceled');
// } else {
//     alert('i dont know you');
// }

// მეოთხე დავალება

// function checkAge(age) {
//     
//     return age > 18 || confirm('Did parents allow you?')
//      
// }

// checkAge();

// მეხუთე დავალება

// function min(a, b) {
//     let result;
//     switch (a > b) {
//         case true:
//             result = b;
//             break;
//         case false:
//             result = a;
//             break;
//     }
//     return result;
// }

// 21.11.2020 
// დავალება 1

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;
// console.log(user);


// დავალება 2

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };
// let sum = 0;
// for(let key in salaries){
//     sum += salaries[key];
// }
// console.log(sum);

// დავალება 3

// let styles = ['jazz', 'blues'];
// styles.push('Rock-n-Roll');

// let i = (styles.length - 1) / 2;
// styles[i] = 'Classic';
// console.log(styles);
// styles.unshift('Rap', 'Reggae');
// console.log(styles);

// დავალება 4

// for(let i=2; i <= 10; i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }
// let i = 2;
// while(i <= 10 ){
//     console.log(i);
//     i += 2;
// }

// დავალება 5

// const array = [1, 5, 987, 21, 56, 928, 1, 23, 5, 91, 34, 51];
// let counter = 0;
// let odds = (arr) => {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 !== 0){
//             console.log(arr[i]);
//         }
//     }
// }
// odds(array);

// let odds = (arr) => {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 !== 0){
//             counter++;
//         }
//     }

//     return counter;
// }

// console.log(odds(array));

// let minNumber = (arr) => {
//     let minNum = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(minNum > arr[i]){
//             minNum = arr[i];
//         }
//     }
//     return minNum;
// };
// console.log(minNumber(array));

// დავალება 6

// const array = [1, 5, 987, 21, 56, 928, 1, 23, 5, 91, 34, 51];
// const mult = array.map(x => x*2);
// console.log(mult);

// დავალება 7
const array = [
    {
        name: 'giorgi',
        salary: 1000,
        occupation: 'Web Developer'
    },
    {
        name: 'nika',
        salary: 1200,
        occupation: 'Teacher'
    },
    {
        name: 'goga',
        salary: 1600,
        occupation: 'Web Developer'
    }
];
const newArr = array.filter(some => some.occupation === 'Web Developer');

const sum = newArr.reduce(((x, y) => x + y.salary), 0);
console.log(sum);