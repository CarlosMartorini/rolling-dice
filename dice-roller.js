let outputSumDices = [0,0,0,0,0,0,0,0,0,0,0,0,0];

const getResult = document.getElementById('result');
const createUl = document.createElement('ul');
getResult.appendChild(createUl);

const sumNumber2 = document.createElement('li');
const sumNumber3 = document.createElement('li');
const sumNumber4 = document.createElement('li');
const sumNumber5 = document.createElement('li');
const sumNumber6 = document.createElement('li');
const sumNumber7 = document.createElement('li');
const sumNumber8 = document.createElement('li');
const sumNumber9 = document.createElement('li');
const sumNumber10 = document.createElement('li');
const sumNumber11 = document.createElement('li');
const sumNumber12 = document.createElement('li');

function diceRoller(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min)) + min;
}

function thousandTimesRoller(){
    let timeRolling = 0;

    for(timeRolling; timeRolling < 1000; timeRolling++){
        let diceOne = diceRoller(1, 7);
        let diceTwo = diceRoller(1, 7);
        let sumDices = diceOne + diceTwo;
        outputSumDices[sumDices] = outputSumDices[sumDices] + 1;
    }

    return outputSumDices;

}

thousandTimesRoller();

sumNumber2.innerText = `2: ${outputSumDices[2]}`;
createUl.appendChild(sumNumber2);
sumNumber3.innerText = `3: ${outputSumDices[3]}`;
createUl.appendChild(sumNumber3);
sumNumber4.innerText = `4: ${outputSumDices[4]}`;
createUl.appendChild(sumNumber4);
sumNumber5.innerText = `5: ${outputSumDices[5]}`;
createUl.appendChild(sumNumber5);
sumNumber6.innerText = `6: ${outputSumDices[6]}`;
createUl.appendChild(sumNumber6);
sumNumber7.innerText = `7: ${outputSumDices[7]}`;
createUl.appendChild(sumNumber7);
sumNumber8.innerText = `8: ${outputSumDices[8]}`;
createUl.appendChild(sumNumber8);
sumNumber9.innerText = `9: ${outputSumDices[9]}`;
createUl.appendChild(sumNumber9);
sumNumber10.innerText = `10: ${outputSumDices[10]}`;
createUl.appendChild(sumNumber10);
sumNumber11.innerText = `11: ${outputSumDices[11]}`;
createUl.appendChild(sumNumber11);
sumNumber12.innerText = `12: ${outputSumDices[12]}`;
createUl.appendChild(sumNumber12);

const getBarResult = document.getElementById('bar-result');

const createDivBar2 = document.createElement('div');
createDivBar2.classList.add('bar-result');
getBarResult.appendChild(createDivBar2);
createDivBar2.style.width = `${outputSumDices[2]}px`;

const createDivBar3 = document.createElement('div');
createDivBar3.classList.add('bar-result');
getBarResult.appendChild(createDivBar3);
createDivBar3.style.width = `${outputSumDices[3]}px`;

const createDivBar4 = document.createElement('div');
createDivBar4.classList.add('bar-result');
getBarResult.appendChild(createDivBar4);
createDivBar4.style.width = `${outputSumDices[4]}px`;

const createDivBar5 = document.createElement('div');
createDivBar5.classList.add('bar-result');
getBarResult.appendChild(createDivBar5);
createDivBar5.style.width = `${outputSumDices[5]}px`;

const createDivBar6 = document.createElement('div');
createDivBar6.classList.add('bar-result');
getBarResult.appendChild(createDivBar6);
createDivBar6.style.width = `${outputSumDices[6]}px`;

const createDivBar7 = document.createElement('div');
createDivBar7.classList.add('bar-result');
getBarResult.appendChild(createDivBar7);
createDivBar7.style.width = `${outputSumDices[7]}px`;

const createDivBar8 = document.createElement('div');
createDivBar8.classList.add('bar-result');
getBarResult.appendChild(createDivBar8);
createDivBar8.style.width = `${outputSumDices[8]}px`;

const createDivBar9 = document.createElement('div');
createDivBar9.classList.add('bar-result');
getBarResult.appendChild(createDivBar9);
createDivBar9.style.width = `${outputSumDices[9]}px`;

const createDivBar10 = document.createElement('div');
createDivBar10.classList.add('bar-result');
getBarResult.appendChild(createDivBar10);
createDivBar10.style.width = `${outputSumDices[10]}px`;

const createDivBar11 = document.createElement('div');
createDivBar11.classList.add('bar-result');
getBarResult.appendChild(createDivBar11);
createDivBar11.style.width = `${outputSumDices[11]}px`;

const createDivBar12 = document.createElement('div');
createDivBar12.classList.add('bar-result');
getBarResult.appendChild(createDivBar12);
createDivBar12.style.width = `${outputSumDices[12]}px`;

