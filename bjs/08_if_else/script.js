let minValue = parseInt(prompt('Минимальное значение числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное значение числа для игры','100'));
if (isNaN(minValue) || isNaN(maxValue)) {
    minValue = 0;
    maxValue = 100;
}
minValue = minValue < -999 ? -999 : minValue;
maxValue = maxValue > 999 ? 999 : maxValue;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${textNumber(answerNumber) }?`;

document.querySelector('#btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное значение числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное значение числа для игры','100'));
    if (isNaN(minValue) && isNaN(maxValue)) {
        minValue = 0;
        maxValue = 100;
    } 
    minValue = minValue < -999 ? -999 : minValue;
    maxValue = maxValue > 999 ? 999 : maxValue;   
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${textNumber(answerNumber) }?`;
    gameRun = true;    
})

document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 3);
            if (phraseRandom === 1) {
                answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
            } else if (phraseRandom === 2) {
                answerPhrase = `Не знаю что и подумать \n\u{1F92F}`;
            } else if (phraseRandom === 3) {
                answerPhrase = `Мне кажется вы меня обманываете \n\u{1F92F}`;
            } else {
                answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
            }


            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${textNumber(answerNumber) }?`;
        }
    }
})




document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 3);
            if (phraseRandom === 1) {
                answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
            } else if (phraseRandom === 2) {
                answerPhrase = `Не знаю что и подумать \n\u{1F92F}`;
            } else if (phraseRandom === 3) {
                answerPhrase = `Мне кажется вы меня обманываете \n\u{1F92F}`;
            } else {
                answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
            }

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${textNumber(answerNumber) }?`;
        }
    }
})

document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random() * 3);
        if (phraseRandom === 1) {
            answerPhrase = `Я угадал\n\u{1F60E}`;
        } else if (phraseRandom === 2) {
            answerPhrase = `Это же не сложно\n\u{1F60E}`;
        } else if (phraseRandom === 3) {
            answerPhrase = `Да это легко\n\u{1F60E}`;
        } else {
            answerPhrase = `Я всегда угадываю\n\u{1F60E}`;
        }        
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})


function textNumber100(nn100) {
    let numberString = '';
    switch (nn100) {
        case 1:
            numberString = 'сто ';
        break;
        case 2:
            numberString = 'двести ';
        break;
        case 3:
            numberString = 'тристо ';
        break;
        case 4:
            numberString = 'четыресто ';
        break;
        case 5:
            numberString = 'пятьсот ';
        break;
        case 6:
            numberString = 'шестьсот ';
        break;
        case 7:
            numberString = 'семьсот ';
        break;
        case 8:
            numberString = 'восемьсот ';
        break;
        case 9:
            numberString = 'девятьсот ';
        break;                
    }
    return numberString; 
}

function textNumber10(nn10) {
    let numberString = '';
    switch (nn10) {
        case 2:
            numberString = 'двадцать ';
        break;
        case 3:
            numberString = 'тридцать ';
        break;
        case 4:
            numberString = 'сорок ';
        break;
        case 5:
            numberString = 'пятьдесят ';
        break;
        case 6:
            numberString = 'шестьдесят ';
        break;
        case 7:
            numberString = 'семьдесят ';
        break;
        case 8:
            numberString = 'восемьдесят ';
        break;
        case 9:
            numberString = 'девяносто ';
       break;     
    }
    return numberString;  
}    

function textNumber1(nn1) {
    let numberString = '';
    switch(nn1) {
        case 1:
            numberString = 'один';
        break;
        case 2:
            numberString = 'два';
        break;
        case 3:
            numberString = 'три';
        break;
        case 4:
            numberString = 'четыре';
        break;
        case 5:
            numberString = 'пять';
        break;
        case 6:
            numberString = 'шесть';
        break;
        case 7:
            numberString = 'семь';
        break;
        case 8:
            numberString = 'восемь';
        break;
        case 9:
            numberString = 'девять';
        break;
        case 10:
            numberString = 'десять';
        break;
        case 11:
            numberString = 'одиннадцать';
        break;
        case 12:
            numberString = 'двенадцать';
        break;
        case 13:
            numberString = 'тринадцать';
        break;
        case 14:
            numberString = 'четырнадцать';
        break;
        case 15:
            numberString = 'пятнадцать';
        break;
        case 16:
            numberString = 'шестнадцать';
        break;
        case 17:
            numberString = 'семнадцать';
        break;
        case 18:
            numberString = 'восемнадцать';
        break;
        case 19:
            numberString = 'девятьнадцать';
        break;
    } 
    return numberString;  
}


function textNumber(answerNumber) {
    let resultNumber = answerNumber;
    let numberString = '';
    let minusString = false;
    if (answerNumber < 0) {
        minusString = true;
    } 
    if (answerNumber === 0) {
        numberString = 0;
        return numberString;
    } 
    answerNumber = Math.abs(answerNumber);

    let nn100 = nn10 = nn1 = nn = 0;
    nn100 = Math.floor(answerNumber / 100);
    numberString = textNumber100(nn100);
    nn10 = answerNumber % 100;
    if (nn10 > 19 ) {
        nn1 = Math.floor(nn10 / 10);
        nn = nn10 % 10;
        numberString = numberString + textNumber10(nn1) + textNumber1(nn);
    } else {
        numberString = numberString + textNumber1(nn10);
    }
    if (minusString) {
        resultString = 'минус ' + numberString;    
    } else {
        resultString = numberString;
    }
    
    if (resultString.length > 20) {
        return resultNumber;
    } else {
        return resultString;
    }
}