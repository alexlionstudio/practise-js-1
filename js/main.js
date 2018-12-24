'use strict';

let money = prompt('Ваш бюджет на месяц?', ''),
    time  = prompt('Введите дату в формате YYYY-MM-DD', '');


let appData = {
    budget: money,
    timeData: time,
    expenses: {} ,
    optionalExpenses: {},
    income: [],
    savings: false   
};

let questAnswer1 = prompt('Введите обязательную статью расходов в этом месяце' , ''),
    questAnswer2 = prompt('Во сколько обойдется?' , ''),
    questAnswer3 = prompt('Введите обязательную статью расходов в этом месяце' , ''),
    questAnswer4 = prompt('Во сколько обойдется?' , '');

appData.expenses.questAnswer1 = questAnswer2;
appData.expenses.questAnswer3 = questAnswer4;

alert(appData.budget / 30);



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
