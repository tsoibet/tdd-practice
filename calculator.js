const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    divide: function(a, b) {
        if (b == 0) {
            throw new Error('Cannot be divided by zero');
        } else if (a == 0) {
            return 0;
        }
        return a / b;
    },
    multiply: function(a, b) {
        return a * b;
    }
}

export default calculator;