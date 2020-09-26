let text = document.getElementById('text');
let sumText = document.getElementById('sumText');
let equals = [];

function squareDetails(quantity, square) {
    let result = square * quantity;
    if (text.innerHTML !== '') {
        text.innerHTML += ' + ' + result + 'м²';
    } else {
        text.innerHTML += ' ' + result + 'м²';
    }
    equals.push(result);
    return result;
}

function sumSquareDetails() {
    let sum = 0;
    for (let i = 0; i < equals.length; i++) {
        sum += equals[i]
    }
    if (text.innerHTML !== '') {
        sumText.innerHTML += ' = ' + sum + 'м²';
        sumText.style.color = 'maroon';
    } else {
        alert('Выберете детали')
    }
}

function clearSquareDetails() {
    text.innerHTML = '';
    sumText.innerHTML = '';
    equals = [];
}

