let text = document.getElementById('text');
let sumText = document.getElementById('sumText');
let search = document.getElementById('search');
let equals = [];


function squareDetails(quantity, square) {
    let result = square * quantity;
    if (text.innerHTML !== '') {
        text.innerHTML += ' + ' + result + 'м²';
    } else {
        text.innerHTML += ' ' + result + 'м²';
    }
    equals.push(result);
    return result.toFixed(4);
}

function sumSquareDetails() {
    let sum = 0;
    for (let i = 0; i < equals.length; i++) {
        sum += equals[i]
    }
    if (text.innerHTML !== '') {
        sumText.innerHTML = ' = ' + sum.toFixed(4) + 'м²';
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

search.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("search-btn").click();
    }
});

