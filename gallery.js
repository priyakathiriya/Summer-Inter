var date = new Date();
document.getElementById('month').innerHTML=date.toLocaleDateString("default", {month:"long"});
document.getElementById('date').innerHTML=date.getDate();
document.getElementById('year').innerHTML=date.getFullYear();

document.getElementById('mo').innerHTML=date.toLocaleDateString("default", {month:"long"});
document.getElementById('da').innerHTML=date.getDate();
document.getElementById('ye').innerHTML=date.getFullYear();

const btn1 = document.querySelector('#btn');
const text1 = document.querySelector('.show-1');

const btn2 = document.querySelector('#btn2');
const text2 = document.querySelector('.show-2');
btn1.addEventListener('click' , button1);
function button1(){
    text1.classList.toggle('hide-1');
    btn1.textContent = text1.classList.contains('hide-1') ? ('Read More') : ('Read Less');
}
btn2.addEventListener('click', button2);
function button2(){
    text2.classList.toggle('hide-2');
    btn2.textContent = text1.classList.contains('hide-2') ? ('Read More') : ('Read Less');
}