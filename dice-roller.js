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

// const getBarResult = document.getElementById('bar-result');
// const createDivBar2 = document.createElement('div');
// createDivBar2.innerText = `${outputSumDices[2]}`;
// getBarResult.appendChild(createDivBar2);
// createDivBar2.style.width = `${outputSumDices[2]}px`;

// minhaBarra.style.width = `${larguraDaBarra}px`;