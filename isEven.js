const isEven = (number) => {
    if(typeof number !== 'number'){
        throw new Error('The argument must be a number');
    }
    return number % 2 === 0;
};

module.exports = isEven;