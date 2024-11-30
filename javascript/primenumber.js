function primeNumber(number) {
    let primeArray = []; 
    for (let i = 2; i <= number; i++) {
        if (isPrime(i)) {
            primeArray.push(i);
        }
    }
    console.log(`Prime numbers up to ${number}:`, primeArray);
}

function isPrime(num) {
    if (num <= 1) return false; 
    for (let j = 2; j <= Math.sqrt(num); j++) {
        if (num % j === 0) {
            return false;
        }
    }
    return true; 
}

// Call the function
primeNumber(23);


