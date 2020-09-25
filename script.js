let text = document.getElementById('text');
let sumText = document.getElementById('sumText');
let equals = [];

function squareTravers() {
    let quantityTraversDetails = document.getElementById('travers').value;
    let result = SQUARE_TRAVERS * quantityTraversDetails;
    if (text.innerHTML !== '') {
        text.innerHTML += ' + ' + result + 'м²';
    } else {
        text.innerHTML += result + 'м²';
    }
    equals.push(result);
    return result;
}

function squareTaperedRing() {
    let quantityTaperedRingDetails = document.getElementById('tapered-ring').value;
    let result = SQUARE_TAPERED_RING * quantityTaperedRingDetails;
    if (text.innerHTML !== '') {
        text.innerHTML += ' + ' + result + 'м²';
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
        text.innerHTML += ' + ' + result + 'м²';
    } else {
        text.innerHTML += result + 'м²';
    }
    equals.push(result);
    return result;
}

function squareGearOpen() {
    let quantityGearOpenDetails = document.getElementById('gear-open').value;
    let result = SQUARE_GEAR_OPEN * quantityGearOpenDetails;
    if (text.innerHTML !== '') {
        text.innerHTML += ' + ' + result + 'м²';
    } else {
        text.innerHTML += result + 'м²';
    }
    equals.push(result);
    return result;
}

function squareDetails(quantity, square) {
    let result = square * quantity;
    if (text.innerHTML !== '') {
        text.innerHTML += ' + ' + result + 'м²';
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
    sumText.style.color = 'red';
}

function clearSquareDetails() {
    text.innerHTML = '';
    sumText.innerHTML = '';
}

