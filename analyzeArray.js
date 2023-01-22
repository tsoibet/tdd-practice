export default function analyzeArray(array) {
    if (array.length === 0) {
        let obj = {
            average: null,
            min: null,
            max: null,
            length: 0
        };
        return obj;
    }
    let sum = 0;
    let mini;
    let maxi;
    for (let num of array) {
        if (typeof num !== 'number' || num === NaN) {
            throw new Error('Array contains non-number(s).');
        }
        sum += num;
        if (mini === undefined || num < mini) {
            mini = num;
        }
        if (maxi === undefined || num > maxi) {
            maxi = num;
        }
    }
    let obj = {
        average: sum / array.length,
        min: mini,
        max: maxi,
        length: array.length
    };
    return obj;
}