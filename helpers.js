function exceedsPropertiesLengthLimit(properties) {
    let limitLength = 10;
    let exceedsLimit = false;

    if (properties.length + 1 > limitLength) {
        exceedsLimit = true;
    }
    return exceedsLimit;
}

// Завжди повертає масив
function getResultFromStorage() {
    const results = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    return results;
};

function setResultToStorage(result) {
    const results = getResultFromStorage();
    if (!exceedsPropertiesLengthLimit(results)) {
        results.push(result);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(results));
    }
};

function addResultToHistory(startDate, endDate, resultText) {
    let historyItem = {
        startDate: startDate.toISOString().slice(0, 10),
        endDate: endDate.toISOString().slice(0, 10),
        result: resultText,
    };

    addToHistory(historyItem);
    setResultToStorage(historyItem);
    updateHistoryTable();
};

function calculateTimeDifference(startDate, endDate, dayOptions, timeOptions) {
    let result;
    if (startDate && endDate) {
        const diff = endDate - startDate;
        const days = diff / (1000 * 60 * 60 * 24);

        if (dayOptions === "weekdays") {
            result = Math.floor(days / 7) * 5;
        } else if (dayOptions === "weekends") {
            result = Math.floor(days / 7) * 2;
        } else {
            result = days;
        }

        if (timeOptions === "hours") {
            result *= 24;
        } else if (timeOptions === "minutes") {
            result *= 24 * 60;
        } else if (timeOptions === "seconds") {
            result *= 24 * 60 * 60;
        }
    }
    return result;
};