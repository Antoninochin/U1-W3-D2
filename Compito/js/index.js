
document.getElementById('h1').style.color = '#492aa0';

var number = 20;

document.write(number,' ');


var number = 30;

document.write( number, ' ');


let number1 = 40;

document.write(number1, ' ');

/*let number1 = 50;

document.write(number1, ' ');*/
console.log(number1)
 
let somma = 2+6-5;
console.log(somma)

document.write(somma);

const hour = new Date().getHours();
let greeting;
let greeting2;

if (hour < 18){
    greeting = 'Good Day!';
}else {
    greeting = 'Good Evening'
}
 if (hour < 15){
    greetin2 = 'Good Day!'
 } else{
    greeting2 = 'Good Evening!'
 }

document.getElementById('saluto').innerHTML = greeting;
document.getElementById('saluto').style.fontSize = '3em';
document.getElementById('saluto').style.color = 'Darkblue';
document.getElementById('saluto').style.textAlign = 'center';

document.getElementById('saluto2').innerHTML = greeting2;
document.getElementById('saluto2').style.fontSize = '3em';
document.getElementById('saluto2').style.color = 'Darkblue';
document.getElementById('saluto2').style.textAlign = 'center';

//function myFunction() {}
    let person = prompt('Please enter your name');
    if (person != null) {
        document.getElementById('chi-sei?').innerHTML = 'Ciao' + ' ' + person + ' ' + 'Come stai oggi?';
    }
