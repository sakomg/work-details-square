let text = document.getElementById('text');

function squareTravers() {
    let quantityTraversDetails = document.getElementById('travers').value;
    let result = SQUARE_TRAVERS * quantityTraversDetails;
    if (text.innerHTML !== '') {
        text.innerHTML += '+' + result + 'м^2';
    }
    else {
        text.innerHTML += result + 'м^2';
    }
    return result;
}

function squareCircle() {
    let quantityCircleDetails = document.getElementById('circle').value;
    let result = SQUARE_CIRCLE * quantityCircleDetails;
    if (text.innerHTML !== '') {
        text.innerHTML += '+' + result + 'м^2';
    }
    else {
        text.innerHTML += result + 'м^2';
    }
    return result;
}

function squareBigCircle() {
    let quantityBigCircleDetails = document.getElementById('big-circle').value;
    let result = BIG_SQUARE_CIRCLE * quantityBigCircleDetails;
    if (text.innerHTML !== '') {
        text.innerHTML += '+' + result + 'м^2';
    }
    else {
        text.innerHTML += result + 'м^2';
    }
    return result;
}

function sum() {

}