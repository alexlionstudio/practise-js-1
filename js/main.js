'use strict';

let money = "Ваш бюджет на месяц?",
    time  = "2017-12-24";

let appData = {
    budget: money,
    timeData: time,
    expenses: "" ,
    optionalExpenses: "",
    income: Array(),
    savings: false   
};

let question1 = "Введите обязательную статью расходов в этом месяце",
    question2 = "Во сколько обойдется?";

let answer1 = "Ответ на первый вопрос - " + prompt(question1),
    answer2 = "Ответ на второй вопрос - " + prompt(question2);

appData.expenses = {
    answer1: answer2
}

let eachDayCost = answer2 / 30;

alert(appData.expenses.answer1);