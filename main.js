const name='Karo';
const age=19;

console.log(
    `nazywam się ${name} i mam ${age} lat.`)

const heading = document.querySelector('.main-heading');

heading.innerHTML = `SZKOLENIE WTF`

const footer = document.querySelector('.footer--js');

footer.innerHTML = `TO JEST STOPKA, KTÓRĄ ZMIENIAM JAVA SCRIPTEM.`;

const greet = (age, name) => {
    console.log(`Akuku ${name}`);
}
greet(age,name);

function newGreet(age, name){
    console.log(`Mam na imię ${name} i mam ${age} lat`);
}
newGreet(age,name);