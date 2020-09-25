let text = document.getElementById('text');
let sumText = document.getElementById('sumText');
let equals = [];

function squareTravers() {
    let quantityTraversDetails = document.getElementById('travers').value;
    let result = SQUARE_TRAVERS * quantityTraversDetails;
    if (text.innerHTML !== '') {
        text.innerHTML += '+' + result + 'м²';
    } else {
        text.innerHTML += result + 'м²';
    }
    equals.push(result);
    return result;
}

function squareCircle() {
    let quantityCircleDetails = document.getElementById('circle').value;
    let result = SQUARE_CIRCLE * quantityCircleDetails;
    if (text.innerHTML !== '') {
        text.innerHTML += '+' + result + 'м²';
    } else {
        text.innerHTML += result + 'м²';
    }
    equals.push(result);
    return result;
}

function squareBigCircle() {
    let quantityBigCircleDetails = document.getElementById('big-circle').value;
    let result = BIG_SQUARE_CIRCLE * quantityBigCircleDetails;
    if (text.innerHTML !== '') {
        text.innerHTML += '+' + result + 'м²';
    } else {
        text.innerHTML += result + 'м²';
    }
    equals.push(result);
    return result;
}

function sumSquareDetails() {
    let sum = 0;
    for (let i = 0; i < equals.length; i++) {
        sum += equals[i]
    }
    sumText.innerHTML += ' = ' + sum + 'м²';
    sumText.style.color = 'red'
}

function clearSquareDetails() {
    text.innerHTML = '';
    sumText.innerHTML = '';
}