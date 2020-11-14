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

function min(a, b) {
    switch (a, b) {
        case a > b:
            return b;
            break;
        case a < b:
            return a;
            break;
    }
}

