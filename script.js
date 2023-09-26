// script.js
const history = [];

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    try {
        const expression = document.getElementById('display').value;
        const result = eval(expression);

        if (history.length >= 10) {
            history.shift(); // Remove the oldest calculation
        }

        history.push(`${expression} = ${result}`);
        updateHistoryList();

        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function updateHistoryList() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    
    for (const entry of history) {
        const listItem = document.createElement('li');
        listItem.textContent = entry;
        historyList.appendChild(listItem);
    }
}

