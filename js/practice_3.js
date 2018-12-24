'use strict';

let money = +prompt('Ваш бюджет на месяц?', ''),
    time  = prompt('Введите дату в формате YYYY-MM-DD', '');


let appData = {
    budget: money,
    timeData: time,
    expenses: {} ,
    optionalExpenses: {},
    income: [],
    savings: false   
};

//  ЦИКЛ for

// for(let i = 0; i < 2; i++ ){

//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдется?' , '');

//     // Проверка на неправильные вводы инфлормации
    
//     if( (typeof(a)) === 'string' && (typeof(a)) != 'null' && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log('done');    
//         appData.expenses[a] = b;
//     } else { 
//         if( i == 1){
//             i = 0;
//         } else if( i == 2){
//             i = 1;
//         }
//         console.log('repeate');    
//     }
// }

//  ЦИКЛ while

// let i = 0;
// while(i < 2) {

//     i++ 

//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдется?' , '');

//     // Проверка на неправильные вводы инфлормации
    
//     if( (typeof(a)) === 'string' && (typeof(a)) != 'null' && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log('done');    
//         appData.expenses[a] = b;
//     } else { 
//         if( i == 1){
//             i = 0;
//         } else if( i == 2){
//             i = 1;
//         }
//         console.log('repeate');    
//     }
// }

//  ЦИКЛ while

let i = 0;
do{
    i++ 

    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?' , '');

    // Проверка на неправильные вводы инфлормации
    
    if( (typeof(a)) === 'string' && (typeof(a)) != 'null' && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log('done');    
        appData.expenses[a] = b;
    } else { 
        if( i == 1){
            i = 0;
        } else if( i == 2){
            i = 1;
        }
        console.log('repeate');    
    }
    
} while(i < 2);

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневные бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Мининмальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}

console.log(appData);


//  Ниже я уже неправильно сделал - это до проверки


// 'use strict';

// let money = "Ваш бюджет на месяц?",
//     time  = "2017-12-24";

// let appData = {
//     budget: money,
//     timeData: time,
//     expenses: "" ,
//     optionalExpenses: "",
//     income: Array(),
//     savings: false   
// };

// let question1 = "Введите обязательную статью расходов в этом месяце",
//     question2 = "Во сколько обойдется?";

// let answer1 = "Ответ на первый вопрос - " + prompt(question1),
//     answer2 = "Ответ на второй вопрос - " + prompt(question2);

// appData.expenses = {
//     answer1: answer2
// }

// let eachDayCost = answer2 / 30;

// alert(appData.expenses.answer1);
