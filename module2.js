//  # 1 Написать код, который будет выводить максимум из ДВУХ чисел.

/*var a = prompt('ввидите первое число', '');
var b = prompt('ввидите второе число', '');
if (a>b){
	alert(a + ' ' + 'Больше чем' + ' ' + b);
}
else if (b > a)
	alert(b + ' ' + 'Больше чем' +' ' + a);*/

	// #2  Написать код, который будет выводить максимум из ТРЁХ чисел.

/* var a = prompt('ввидите первое число', '');
var b = prompt('ввидите второе число', '');
var c = prompt('ввидите третье число', '');
if (a > b && a > c)  {
	alert(a + ' ' + 'Больше чем' + ' ' + b + 'и' + c);
}
if (b > a && b > c) {
	alert(b + ' ' + 'Больше чем' + ' ' + a + 'и' + c);
}
else if (c > b && c > a)
	alert(c + ' ' + 'Больше чем' + ' ' + a + 'и' + b); */

// #3 Написать код, который переведёт градусы по Цельсию в градусы по Фаренгейту.

/*var celsius = prompt('Ввидите значение температуры по Цельсию', '');
var fahrenheit = (celsius * 9 / 5 ) + 32;
alert ('Температура по Форенгейту  составляет' + ' ' + fahrenheit );*/


// # 4  Написать код, который будет принимать от пользователя три числа и выводить среднее по значению число.

/*var a = +prompt('ввидите первое число', '');
var b = +prompt('ввидите второе число', '');
var c = +prompt('ввидите третье число', '');
if((b<a && a<c) || (c<a && a<b)) {
	alert(a);}
if((a<b && b<c) || (c<b && b<a)) {
alert(b);
}
if((a<c && c<b) || (b<c && c<a)){
alert(c);}*/



/*  #5 Пользователь вводит логин и пароль. Если логин и пароль совпадают с указанными ниже, то выводится «Добро пожаловать». Если не совпадают – то «Ошибка входа»
Данные для задачи:
Логин Пароль
ivan         334455
alex         777
petr         b5678
*/
/*var log_1 = 'ivan';
var pass_1 = '334455';
var log_2 = 'alex';
var pass_2 = '777';
var log_3 = 'petr';
var pass_3 = '5678b';

var login = prompt('enter login' );
var password = prompt('enter password');

if (login === log_1 && password === pass_1 || 
		login===log_2 && password === pass_2 || 
    login===log_3 && password === pass_3 ) {
alert ('welcome');
}
else {
	alert("Enter error !");
}*/

/* #6 Пользователь вводит год рождения. Программа показывает количество лет и если лет больше или равно 16, то пишет – «добро пожаловать», если нет – «вход воспрещен».*/

/*var year = +prompt ('Ввидите год своего рождения', ' ')
var entrance = 2018 -  year;
if (entrance > 16) {
	alert ('добро пожаловать');
}
else  {
		alert ('вход воспрещен');
}
*/



/*  #7 В первом подъезде квартиры с 1 по 20. Во втором с 21 по 48. В третьем с 49 по 90. Пользователь вводит номер квартиры. Программа должна указать в каком подъезде находится данная квартира.*/


/*var apartment = +prompt ('Ввидите номер квартиры');
if (apartment<=20) {
 alert ('Вам в первый подьезд')
}
if (apartment > 20 && apartment <= 48 ) {
 alert ('Вам во  второй подьезд')
}
if (apartment > 48 && apartment <= 90) {
 alert ('Вам в третий подьезд')
}
else if (apartment > 90) {
	alert ('В этом доме нет квартипы под таким номером')
}*/


/* Пользователь указывает цену одной минуты исходящего звонка с одного мобильного оператора другому, а также, продолжительность разговора. Необходимо вычислить денежную сумму на которую был произведен звонок.
*/

/*var price = + prompt('Укажите цену одной минуты разговора');
var timeCall = + prompt('Укажите продолжительность разговора');
var money = price * timeCall ; 
alert (money);
*/
/*Простой калькулятор. Написать программу, которая  предлагает пользователю выбрать одну из четырех простейших арифметических операций(+ – * /) и, в зависимости от сделанного выбора, предлагает ввести 2 аргумента и производит соответствующие вычисления (простейший одношаговый калькулятор).*/

/*var num_1 = +prompt ('Ввтдите первое число', '');
var num_2 = +prompt ('Ввидите второе число', '');
var act = prompt ('какое дествие хотите выполлнить', '+,-,/,*');

if (act === '+') {
	alert (num_1 +num_2);
}

if (act === '-') {
	alert (num_1  - num_2);
}
if (act === '/') {
	alert (num_1 / num_2);
}
if (act === '*') {
	alert (num_1 * num_2);
}*/

/*Написать программу, которая предлагает пользователю ввести число и определяет
кратно ли оно 3, 5, 7.*/

/*var Num = prompt ('ввидите число');
 
 if (Num % 3 == 0 ) {
 		alert (Num + 'кратное 3')
 }
  if (Num % 5 == 0 ) {
 		alert (Num + 'кратное 5')
 }
  if (Num % 7 == 0 ) {
 		alert (Num + 'кратное 7')
 }*/